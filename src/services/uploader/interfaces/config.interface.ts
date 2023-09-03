// ./interfaces/config.interface.ts

// Define an interface to represent the configuration settings for the application.
export interface IConfig {
  // Configuration for the uploader module, responsible for handling file uploads.
  uploader: {
    // Configuration options for the S3 client, which interacts with an S3-compatible storage service.
    clientConfig: {
      // Set to true to use path-style addressing for the S3 endpoint.
      forcePathStyle: boolean;
      // The AWS region where the S3-compatible service is hosted.
      region: string;
      // The endpoint URL for the S3-compatible service.
      endpoint: string;
      // AWS credentials for accessing the S3 service.
      credentials: {
        accessKeyId: string;
        secretAccessKey: string;
      };
    };
    // Information about the S3 bucket where files will be uploaded.
    bucketData: {
      // The name of the S3 bucket.
      name: string;
      // The folder within the bucket where files will be stored.
      folder: string;
      // A unique identifier for the application.
      appUuid: string;
      // The URL for accessing files stored in the bucket.
      url: string;
    };
    // Middleware options for handling file uploads.
    middleware: {
      // Maximum allowed field size for file uploads.
      maxFieldSize?: number;
      // Maximum allowed file size for individual files.
      maxFileSize?: number;
      // Maximum number of files allowed in a single upload request.
      maxFiles?: number;
    };
  };
  // ... (Other application configuration properties can be added here if needed)
}
