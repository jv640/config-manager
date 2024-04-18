interface AWSConfig {
  accessKeyId: string | undefined;
  secretAccessKey: string | undefined;
  region: string | undefined;
}

const config: AWSConfig = {
  accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID as string | undefined,
  secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY as string | undefined,
  region: import.meta.env.VITE_AWS_REGION as string | undefined,
};

export default config;
