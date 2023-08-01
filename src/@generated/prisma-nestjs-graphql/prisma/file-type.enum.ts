import { registerEnumType } from '@nestjs/graphql';

export enum FileType {
    MP4 = "MP4",
    JPG = "JPG",
    PNG = "PNG",
    PDF = "PDF"
}


registerEnumType(FileType, { name: 'FileType', description: undefined })
