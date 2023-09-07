import { FileType } from '@prisma/client';

export const MAX_FILE_SIZES: Record<string, number> = {
  [FileType.UNKNOWN]: 1024 * 1024, // 1MB for UNKNOWN files (you can adjust as needed)
  [FileType.MP4]: 100 * 1024 * 1024, // 50MB for MP4 files (adjust as needed)
  [FileType.JPG]: 10 * 1024 * 1024, // 10MB for JPG files (adjust as needed)
  [FileType.PNG]: 10 * 1024 * 1024, // 10MB for PNG files (adjust as needed)
  [FileType.PDF]: 30 * 1024 * 1024, // 20MB for PDF files (adjust as needed)
};
