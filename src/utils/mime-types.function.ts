import * as mime from 'mime-types';

export function detectMimeTypeFromFilename(filename: string): string | null {
  const mimeType = mime.lookup(filename);
  return mimeType || null;
}
