import { CityService } from './city.service';
import { City } from 'src/@generated';
import { CityCreateArgs } from './dto/city-create-one.args';
import { CityFindManyArgs } from './dto/city-find-many.args';
import { CityFindUniqueArgs } from './dto/city-find-one.args';

import { Injectable } from '@nestjs/common';

@Injectable()
export class CityController {
  constructor(private readonly cityService: CityService) {}

  async createOne(cityCreateArgs: CityCreateArgs): Promise<City | void> {
    return await this.cityService.createOne(cityCreateArgs);
  }

  findMany(cityFindManyArgs: CityFindManyArgs) {
    //handle graphql null value
    if (cityFindManyArgs.where?.OR?.[0]?.id?.equals === null) {
      cityFindManyArgs.where.OR[0].id = undefined;
    }

    //handle graphql null value
    if (cityFindManyArgs.where?.OR?.[1]?.name?.contains === null) {
      cityFindManyArgs.where.OR[1].name = undefined;
    }

    //handle graphql null value
    if (cityFindManyArgs.where?.OR?.[2]?.provinceId?.equals === null) {
      cityFindManyArgs.where.OR[2].provinceId = undefined;
    }

    return this.cityService.findMany(cityFindManyArgs);
  }

  findOne(cityFindUniqueArgs: CityFindUniqueArgs): Promise<City | void> {
    return this.cityService.findOne(cityFindUniqueArgs);
  }

  // async updateOne(cityUpdateOneArgs: CityUpdateOneArgs) {
  //   const { name, description, images } = cityUpdateOneArgs.data;

  //   if (name?.set === null) {
  //     cityUpdateOneArgs.data.name = undefined;
  //   }

  //   if (description?.set === null) {
  //     cityUpdateOneArgs.data.description = undefined;
  //   }

  //   if (images.delete?.[0]?.url.equals === null) {
  //     cityUpdateOneArgs.data.images.delete = undefined;
  //   }

  //   if (images.deleteMany?.[0]?.url.equals === null) {
  //     cityUpdateOneArgs.data.images.deleteMany = undefined;
  //   }

  //   if (images.createMany?.data?.[0]?.url === null) {
  //     cityUpdateOneArgs.data.images.createMany = undefined;
  //   }
  //   //check for new claim and check if user has enough point
  //   await this.isNewCityClaimEventAndIsUserPointEnough(cityUpdateOneArgs);
  //   return this.cityService.update(cityUpdateOneArgs);
  // }

  remove(cityId: number) {
    return this.cityService.remove(cityId);
  }
}
