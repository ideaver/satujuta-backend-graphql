import * as mime from 'mime-types';
import * as path from 'path';
import { FileType } from 'src/@generated';

export function detectMimeTypeFromFilenameOrUrl(input: string): string | null {
  // Check if the input is a valid URL
  if (isValidUrl(input)) {
    // Extract filename from URL
    const filename = path.basename(new URL(input).pathname);
    const extension = path.extname(filename).slice(1); // Extracts extension without the dot
    return mime.lookup(extension) || null;
  } else {
    // If not a URL, treat input as filename
    const extension = path.extname(input).slice(1); // Extracts extension without the dot
    return mime.lookup(extension) || null;
  }
}

function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
}

export function mapFileTypeEnumFromMIME(mimeType: string | null): FileType {
  switch (mimeType) {
    case 'video/mp4':
      return FileType.MP4;
    case 'image/jpeg':
      return FileType.JPG;
    case 'image/png':
      return FileType.PNG;
    case 'application/pdf':
      return FileType.PDF;
    default:
      return FileType.UNKNOWN;
  }
}
