/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { listS3Objects } from './s3Access'; // Assuming you have the s3Access.js file in the same directory

class S3ObjectList extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      objects: [],
    };
  }

  handleListObjects = async () => {
    try {
      const data = await listS3Objects('YOUR_BUCKET_NAME');
      this.setState({ objects: data.Contents });
    } catch (error) {
      console.error('Error listing S3 objects:', error);
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.handleListObjects}>List S3 Objects</button>
        <ul>
          {(this.state as { objects: any[] }).objects.map((object, index) => (
            <li key={index}>{object.Key}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default S3ObjectList;