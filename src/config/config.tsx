import dotenv from 'dotenv';

interface AWSConfig {
  accessKeyId: string | undefined;
  secretAccessKey: string | undefined;
  region: string | undefined;
}

dotenv.config();

const config: AWSConfig = {
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
};

export default config;
