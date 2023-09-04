import { FileType } from '@prisma/client';

export function mimeTypeToEnum(mimeType: string): FileType {
  switch (mimeType) {
    case 'video/mp4':
      return FileType.MP4;
    case 'image/jpeg':
    case 'image/jpg':
      return FileType.JPG;
    case 'image/png':
      return FileType.PNG;
    case 'application/pdf':
      return FileType.PDF;
    // case 'audio/mpeg':
    //   return FileType.MP3;
    // case 'text/plain':
    //   return FileType.TXT;
    // case 'application/json':
    //   return FileType.JSON;
    // case 'application/xml':
    //   return FileType.XML;
    // case 'application/zip':
    //   return FileType.ZIP;
    // case 'text/html':
    //   return FileType.HTML;
    // case 'application/msword':
    // case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
    //   return FileType.DOCX;
    // // Add more cases as needed for the MIME types you want to handle
    default:
      // Handle unknown or unsupported MIME types
      return FileType.UNKNOWN; // You can define UNKNOWN as needed
  }
}
