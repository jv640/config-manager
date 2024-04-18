import config from '../config/config';
import AWS from 'aws-sdk';

const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
const region = process.env.AWS_REGION;

console.log("🚀 ~ accessKeyId:", config.accessKeyId, config.secretAccessKey, config.region)

AWS.config.update({
    accessKeyId,
    secretAccessKey,
    region,
});

const s3 = new AWS.S3();

export const listS3Objects = async (bucketName:string) => {
        return s3.listObjectsV2({ Bucket: bucketName }).promise();
}