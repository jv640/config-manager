import React, { useRef, useEffect } from 'react';
import * as monaco from 'monaco-editor';

interface FileEditorProps {
  fileContent: string;
  onSave: (content: string) => void;
}

const FileEditor: React.FC<FileEditorProps> = ({ fileContent, onSave }) => {
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor>();

  useEffect(() => {
    if (editorRef.current) {
      // Set the value of the editor when the fileContent prop changes
      editorRef.current.setValue(fileContent);
    }
  }, [fileContent]);

  const handleEditorDidMount = (editor: monaco.editor.IStandaloneCodeEditor) => {
    editorRef.current = editor;
  };

  const handleSave = async () => {
    try {
      if (editorRef.current) {
        // Get updated content from the editor
        const updatedContent = editorRef.current.getValue();

        // Call onSave callback with updated content
        onSave(updatedContent);
      }
    } catch (error) {
      console.error('Error saving file:', error);
    }
  };

  return (
    <div>
      <button onClick={handleSave}>Save</button>
      <div
        id="editor"
        style={{ height: '500px', textAlign: 'left' }} 
        ref={(ref) => {
          if (ref) {
            handleEditorDidMount(monaco.editor.create(ref, {
              value: fileContent,
              language: 'plaintext' // Change this to the appropriate language
            }));
          }
        }}
      ></div>
    </div>
  );
};

export default FileEditor;
