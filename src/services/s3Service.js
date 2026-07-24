import {
  S3Client,
  PutObjectCommand,
} from "@aws-sdk/client-s3";

const s3Client = new S3Client({
  region: import.meta.env.VITE_AWS_REGION,
  credentials: {
    accessKeyId: import.meta.env.VITE_ACCESS_KEY,
    secretAccessKey: import.meta.env.VITE_SECRET_KEY,
  },
});

export const uploadToS3 = async (file, folder) => {
  const fileName = `${Date.now()}-${file.name}`;

  const params = {
    Bucket: import.meta.env.VITE_BUCKET_NAME,
    Key: `${folder}/${fileName}`,
    Body: file,
    ContentType: file.type,
  };

  const command = new PutObjectCommand(params);

  await s3Client.send(command);

  return fileName;
};