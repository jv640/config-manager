import React, { useState } from 'react';
import { listS3Buckets } from './s3Access'; // Assuming you have the s3Access.ts file in the same directory

interface S3Bucket {
  Name: string;
}

const S3BucketList: React.FC = () => {
  const [buckets, setBuckets] = useState<S3Bucket[]>([]);

  const handleListBuckets = async () => {
    try {
      const data = await listS3Buckets();
      setBuckets(data);
    } catch (error) {
      console.error('Error listing S3 buckets:', error);
    }
  };

  return (
    <div>
      <h2>S3 Buckets</h2>
        <button onClick={handleListBuckets}>List S3 Buckets</button>
      <ul>
        {buckets.map((bucket, index) => (
          <li key={index}>{bucket.Name}</li>
        ))}
      </ul>
    </div>
  );
};

export default S3BucketList;
