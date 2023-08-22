import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { throwPrismaError } from 'src/utils/throw-prisma-error.function';
import { CreateOneCityArgs, City } from 'src/@generated';
import { CityFindManyArgs } from './dto/city-find-many.args';
import { CityFindUniqueArgs } from './dto/city-find-one.args';
import { CityUpdateOneArgs } from './dto/city-update-one.args';

@Injectable()
export class CityService {
  constructor(private prisma: PrismaService) {}

  async createOne(cityCreateArgs: CreateOneCityArgs): Promise<City | void> {
    return await this.prisma.city
      .create(cityCreateArgs)
      .then((city) => {
        return city;
      })
      .catch((err) => {
        throwPrismaError(err);
      });
  }

  async findMany(cityFindManyArgs: CityFindManyArgs) {
    return this.prisma.city
      .findMany(cityFindManyArgs)
      .then((citys) => {
        return citys;
      })
      .catch((err) => {
        throwPrismaError(err);
      });
  }

  async findOne(cityFindUniqueArgs: CityFindUniqueArgs): Promise<City | void> {
    return await this.prisma.city
      .findUnique(cityFindUniqueArgs)
      .then((city) => {
        return city;
      })
      .catch((err) => {
        throwPrismaError(err);
      });
  }

  async update(cityUpdateOneArgs: CityUpdateOneArgs): Promise<City | void> {
    return this.prisma.city
      .update(cityUpdateOneArgs)
      .then((city) => {
        return city;
      })
      .catch((err) => {
        throwPrismaError(err);
      });
  }

  async remove(cityId: number): Promise<boolean | void> {
    return await this.prisma.city
      .delete({
        where: { id: cityId },
      })
      .then(() => {
        return true;
      })
      .catch((err) => {
        throwPrismaError(err);
      });
  }
}
