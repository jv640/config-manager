import React, { useState } from 'react';
import { listS3Objects, downloadS3Object } from './s3Access'; // Assuming you have the s3Access.js file in the same directory
import FileEditor from './FileEditor';
import { ObjectList } from 'aws-sdk/clients/s3';


const S3ObjectList: React.FC = () => {
  const [objects, setObjects] = useState<ObjectList>([]);
  const [fileContent, setFileContent] = useState<string>('');

  const handleListObjects = async () => {
    try {
      const data = await listS3Objects('staggcp-6');
      if (data && 'Contents' in data && Array.isArray(data.Contents)) {
        setObjects(data.Contents);
      } else {
        console.error('Error: Invalid data format received from listS3Objects');
      }
    } catch (error) {
      console.error('Error listing S3 objects:', error);
    }
  };

  const handleDownloadS3Object = async (key: string) => {
    try {
      const data = await downloadS3Object('staggcp-6', key);
      console.log('Downloaded S3 object:', data);
      setFileContent(data);
    } catch (error) {
      console.error('Error downloading S3 object:', error);
    }
  };

  return (
    <div>
      <button onClick={handleListObjects}>List S3 Objects</button>
      <ul>
        {objects.map((object, index) => (
          <li key={index} onClick={() => handleDownloadS3Object(object.Key || '')}>
            {object.Key}
          </li>
        ))}
      </ul>
      {fileContent && <FileEditor fileContent={fileContent} onSave={(content) => console.log('loggin on save option', content)} />}
    </div>
  );
};

export default S3ObjectList;
