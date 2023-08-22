import { HotelService } from '../hotel/hotel.service';
import { Hotel } from 'src/@generated';
import { HotelCreateArgs } from '../hotel/dto/hotel-create-one.args';
import { HotelFindManyArgs } from '../hotel/dto/hotel-find-many.args';
import { HotelFindUniqueArgs } from '../hotel/dto/hotel-find-one.args';
import { HotelUpdateOneArgs } from '../hotel/dto/hotel-update-one.args';

import { Injectable } from '@nestjs/common';

@Injectable()
export class HotelController {
  constructor(private readonly hotelService: HotelService) {}

  async createOne(hotelCreateArgs: HotelCreateArgs): Promise<Hotel | void> {
    return await this.hotelService.createOne(hotelCreateArgs);
  }

  findMany(hotelFindManyArgs: HotelFindManyArgs) {
    return this.hotelService.findMany(hotelFindManyArgs);
  }

  findOne(hotelFindUniqueArgs: HotelFindUniqueArgs): Promise<Hotel | void> {
    return this.hotelService.findOne(hotelFindUniqueArgs);
  }

  async updateOne(hotelUpdateOneArgs: HotelUpdateOneArgs) {
    const { name, description, images } = hotelUpdateOneArgs.data;

    if (name?.set === null) {
      hotelUpdateOneArgs.data.name = undefined;
    }

    if (description?.set === null) {
      hotelUpdateOneArgs.data.description = undefined;
    }

    if (images.delete?.[0]?.url.equals === null) {
      hotelUpdateOneArgs.data.images.delete = undefined;
    }

    if (images.deleteMany?.[0]?.url.equals === null) {
      hotelUpdateOneArgs.data.images.deleteMany = undefined;
    }

    if (images.createMany?.data?.[0]?.url === null) {
      hotelUpdateOneArgs.data.images.createMany = undefined;
    }

    return this.hotelService.update(hotelUpdateOneArgs);
  }

  remove(hotelId: number) {
    return this.hotelService.remove(hotelId);
  }
}
