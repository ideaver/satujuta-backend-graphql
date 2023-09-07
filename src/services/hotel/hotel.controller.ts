import { HotelService } from '../hotel/hotel.service';
import { Hotel, ImagesCreateManyHotelImageInput } from 'src/@generated';
import { Injectable } from '@nestjs/common';

import { RatioEnum } from '../uploader/enums/ratio.enum';
import { mimeTypeToEnum } from 'src/utils/mime-type-to-enum.function';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class HotelController {
  constructor(
    private readonly hotelService: HotelService,
  ) {}

  async createOne(
    hotelCreateArgs: Prisma.HotelCreateArgs,
  ): Promise<Hotel | void> {
  
    try {
    
      //create hotel
      return await this.hotelService.createOne(hotelCreateArgs);
    } catch (error) {
      
      //delete images if error


      throw new IGraphQLError({ code: 123456, err: error });
    }
  }

  async createMany(hotelCreateManyArgs: Prisma.HotelCreateManyArgs) {
    return await this.hotelService.createMany(hotelCreateManyArgs);
  }

  async findOne(
    hotelFindUniqueArgs: Prisma.HotelFindUniqueArgs,
  ): Promise<Hotel | void> {
    return await this.hotelService.findOne(hotelFindUniqueArgs);
  }

  async findMany(hotelFindManyArgs: Prisma.HotelFindManyArgs) {
    return await this.hotelService.findMany(hotelFindManyArgs);
  }

  async findFirst(hotelFindFirstArgs: Prisma.HotelFindFirstArgs) {
    return await this.hotelService.findFirst(hotelFindFirstArgs);
  }

  async updateOne(
    hotelUpdateOneArgs: Prisma.HotelUpdateArgs,
  ) {


    try {

      await this.hotelService.updateOne(hotelUpdateOneArgs);
    } catch (error) {
      //delete images if error


      throw new IGraphQLError({ code: 123456, err: error });
    }
  }

  async updateMany(hotelUpdateManyArgs: Prisma.HotelUpdateManyArgs) {
    return await this.hotelService.updateMany(hotelUpdateManyArgs);
  }

  async delete(hotelDeleteArgs: Prisma.HotelDeleteArgs) {
    return await this.hotelService.delete(hotelDeleteArgs);
  }

  async deleteMany(hotelDeleteManyArgs: Prisma.HotelDeleteManyArgs) {
    return await this.hotelService.deleteMany(hotelDeleteManyArgs);
  }

  async aggregate(hotelAggregateArgs: Prisma.HotelAggregateArgs) {
    return await this.hotelService.aggregate(hotelAggregateArgs);
  }

  async count(hotelCountArgs: Prisma.HotelCountArgs) {
    return await this.hotelService.count(hotelCountArgs);
  }

  private async uploadImages(
    hotelCreateArgs,
    files: FileUpload[],
    arrayData: ImagesCreateManyHotelImageInput[],
  ) {
    const imageUrls = await this.uploaderService.uploadMultipleImages({
      userId: hotelCreateArgs.data.createdBy.connect.id,
      ratio: RatioEnum.SQUARE,
      files: files,
    });

    //extract imageUrls
    for (const imageUrl of imageUrls) {
      const metadata = await this.uploaderService.getFileMetadata(imageUrl);
      arrayData.push({
        url: imageUrl,
        fileType: mimeTypeToEnum(metadata.mimeType),
        filesize: metadata.size, //TODO: fix fileSize naming
      });
    }
  }

  private async deleteManyImages(arrayData: ImagesCreateManyHotelImageInput[]) {
    await Promise.all(
      arrayData.map(async (data) => {
        await this.uploaderService.deleteFile(data.url);
      }),
    );
  }
}
