import { HotelService } from '../hotel/hotel.service';
import { Hotel, ImagesCreateManyHotelImageInput } from 'src/@generated';
import { Injectable } from '@nestjs/common';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';
import { UploaderService } from '../uploader/uploader.service';

@Injectable()
export class HotelController {
  constructor(
    private readonly hotelService: HotelService,
    private readonly uploaderService: UploaderService,
  ) {}

  async createOne(
    hotelCreateArgs: Prisma.HotelCreateArgs,
  ): Promise<Hotel | void> {
    try {
      //create hotel
      return await this.hotelService.createOne(hotelCreateArgs);
    } catch (error) {
      //delete images if error
      if (hotelCreateArgs?.data?.images?.createMany?.data) {
        const images = hotelCreateArgs.data.images.createMany
          .data as ImagesCreateManyHotelImageInput[];
        this.uploaderService.deleteManyFile(images.map((image) => image.url));
      }

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

  async updateOne(hotelUpdateOneArgs: Prisma.HotelUpdateArgs) {
    try {
      //update hotel
      const update = await this.hotelService.updateOne(hotelUpdateOneArgs);

      //delete images on storage
      const isDelete = hotelUpdateOneArgs?.data?.images
        .deleteMany as Prisma.ImagesScalarWhereInput[];
      //delete images on storage
      if (isDelete) {
        const deletePromises = isDelete.map(async (res) => {
          const getUrl = res.url as Prisma.StringFilter;
          return this.uploaderService.deleteOneFile(getUrl.equals);
        });

        //wait for all delete promises
        await Promise.all(deletePromises);
      }

      return update;
    } catch (error) {
      //delete images if error
      let images: string[] = [];
      const isCreate = hotelUpdateOneArgs?.data?.images?.createMany
        ?.data as Prisma.ImagesCreateManyHotelImageInput[];
      const isUpdate = hotelUpdateOneArgs?.data?.images
        ?.updateMany as Prisma.ImagesUpdateManyWithWhereWithoutHotelImageInput[];

      if (isCreate) {
        images = isCreate.map((image) => image.url);
      }

      if (isUpdate) {
        const updatePromises = isUpdate.map(async (res) => {
          const getUrl = res.data
            .url as Prisma.StringFieldUpdateOperationsInput;
          return this.uploaderService.deleteOneFile(getUrl.set);
        });

        await Promise.all(updatePromises);
      }

      throw new IGraphQLError({ code: 123456, err: error });
    }
  }

  async updateMany(hotelUpdateManyArgs: Prisma.HotelUpdateManyArgs) {
    return await this.hotelService.updateMany(hotelUpdateManyArgs);
  }

  async delete(hotelDeleteArgs: Prisma.HotelDeleteArgs) {
    //get images to delete
    const query = await this.hotelService.delete(hotelDeleteArgs);
    const deletePromises = isDelete.map(async (res) => {
      const getUrl = res.url as Prisma.StringFilter;
      return this.uploaderService.deleteOneFile(getUrl.equals);
    });

    //wait for all delete promises
    await Promise.all(deletePromises);
    return query;
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
}
