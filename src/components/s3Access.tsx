import config from '../config/config';
import AWS from 'aws-sdk';

console.log("🚀 ~ accessKeyId:", config.accessKeyId, config.secretAccessKey, config.region)

AWS.config.update({
    accessKeyId: config.accessKeyId,
    secretAccessKey: config.secretAccessKey,
    region: config.region,
});

const s3 = new AWS.S3();

export const listS3Objects = async (bucketName:string) => {
    return s3.listObjectsV2({ Bucket: bucketName }).promise();
}


interface S3Bucket {
  Name: string;
  CreationDate: Date;
  // Add other properties if needed
}

export const listS3Buckets = async (): Promise<S3Bucket[]> => {
    const s3 = new AWS.S3();

    try {
        const data = await s3.listBuckets().promise();
        return data.Buckets?.map(bucket => ({
            Name: bucket.Name!,
            CreationDate: bucket.CreationDate!,
            // Map other properties if needed
        })) || [];
    } catch (error) {
        throw new Error(`Failed to list S3 buckets: ${error}`);
    }
};
