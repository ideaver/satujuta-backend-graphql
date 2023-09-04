import { HotelService } from '../hotel/hotel.service';
import { Hotel, ImagesCreateManyHotelImageInput } from 'src/@generated';
import { HotelCreateArgs } from '../hotel/dto/hotel-create-one.args';
import { HotelFindManyArgs } from '../hotel/dto/hotel-find-many.args';
import { HotelFindUniqueArgs } from '../hotel/dto/hotel-find-one.args';
import { HotelUpdateOneArgs } from '../hotel/dto/hotel-update-one.args';

import { Injectable } from '@nestjs/common';
// Ignore the import errors
// @ts-ignore
import { FileUpload } from 'graphql-upload';
import { UploaderService } from '../uploader/uploader.service';
import { RatioEnum } from '../uploader/enums/ratio.enum';
import { mimeTypeToEnum } from 'src/utils/mime-type-to-enum.function';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';

@Injectable()
export class HotelController {
  constructor(
    private readonly hotelService: HotelService,
    private readonly uploaderService: UploaderService,
  ) {}

  async createOne(
    files: FileUpload[],
    hotelCreateArgs: HotelCreateArgs,
  ): Promise<Hotel | void> {
    //upload images
    let arrayData: ImagesCreateManyHotelImageInput[] = [];
    await imageUploadToS3(files, hotelCreateArgs, arrayData);

    //create hotel
    return await this.hotelService.createOne(hotelCreateArgs).catch((err) => {
      //delete images if error
      for (const data of arrayData) {
        this.uploaderService.deleteFile(data.url);
      }
      throw new IGraphQLError({ code: 123456, err: err });
    });
  }

  findMany(hotelFindManyArgs: HotelFindManyArgs) {
    return this.hotelService.findMany(hotelFindManyArgs);
  }

  findOne(hotelFindUniqueArgs: HotelFindUniqueArgs): Promise<Hotel | void> {
    return this.hotelService.findOne(hotelFindUniqueArgs);
  }

  async updateOne(hotelUpdateOneArgs: HotelUpdateOneArgs) {
    const { name, description, quota, rating, address, images } =
      hotelUpdateOneArgs.data;

    if (name?.set === null) {
      hotelUpdateOneArgs.data.name = undefined;
    }

    if (description?.set === null) {
      hotelUpdateOneArgs.data.description = undefined;
    }

    if (quota?.set === null) {
      hotelUpdateOneArgs.data.quota = undefined;
    }

    if (rating?.set === null) {
      hotelUpdateOneArgs.data.rating = undefined;
    }

    if (address?.update?.data?.name?.set === null) {
      hotelUpdateOneArgs.data.address.update.data.name = undefined;
    }

    if (address?.update?.data?.subdistrict?.connect?.id === null) {
      hotelUpdateOneArgs.data.address.update.data.subdistrict = undefined;
    }

    if (address?.update?.where?.id?.equals === null) {
      hotelUpdateOneArgs.data.address = undefined;
    }

    if (images?.updateMany?.[0]?.where?.url?.in?.length === 0) {
      hotelUpdateOneArgs.data.images.updateMany = undefined;
    }

    if (images?.createMany?.data?.[0]?.url === null) {
      hotelUpdateOneArgs.data.images.createMany = undefined;
    }

    if (
      images?.updateMany?.[0]?.where?.url?.in?.length === 0 &&
      images?.createMany?.data?.[0]?.url === null
    ) {
      hotelUpdateOneArgs.data.images = undefined;
    }

    return this.hotelService.update(hotelUpdateOneArgs).then((hotel) => {
      return hotel;
    });
  }

  remove(hotelId: number) {
    return this.hotelService.remove(hotelId);
  }
}
async function imageUploadToS3(
  files: FileUpload[],
  hotelCreateArgs: HotelCreateArgs,
  arrayData: ImagesCreateManyHotelImageInput[],
) {
  for (const file of files) {
    const imageUrl = await this.uploaderService.uploadImage({
      userId: hotelCreateArgs.data.createdBy.connect.id,
      ratio: RatioEnum.SQUARE,
      file: await file,
    });

    const metadata = await this.uploaderService.getFileMetadata(imageUrl);
    arrayData.push({
      url: imageUrl,
      fileType: mimeTypeToEnum(metadata.mimeType),
      filesize: metadata.size,
    });
  }

  //add imageUrls to hotelCreateArgs
  hotelCreateArgs.data.images = { createMany: { data: arrayData } };
}
