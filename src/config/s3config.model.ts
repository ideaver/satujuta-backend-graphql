export class S3Config {
  clientConfig: {
    forcePathStyle: boolean;
    region: string;
    endpoint: string;
    credentials: {
      accessKeyId: string;
      secretAccessKey: string;
    };
  };
  bucketData: {
    name: string;
    folder: string;
    appUuid: string;
    url: string;
  };
  middleware: {
    maxFileSize: number;
    maxFiles: number;
  };
}
