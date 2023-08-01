import { registerEnumType } from '@nestjs/graphql';

export enum ImagesScalarFieldEnum {
    id = "id",
    fileType = "fileType",
    filesize = "filesize",
    url = "url",
    hotelImageId = "hotelImageId",
    programImageId = "programImageId",
    rewardImageId = "rewardImageId",
    projectImageId = "projectImageId",
    createdAt = "createdAt"
}


registerEnumType(ImagesScalarFieldEnum, { name: 'ImagesScalarFieldEnum', description: undefined })
