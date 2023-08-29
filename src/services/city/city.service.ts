import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { CreateOneCityArgs, City } from 'src/@generated';
import { CityFindManyArgs } from './dto/city-find-many.args';
import { CityFindUniqueArgs } from './dto/city-find-one.args';
import { CityUpdateOneArgs } from './dto/city-update-one.args';
import { Prisma } from '@prisma/client';

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
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }

  async findMany(cityFindManyArgs: Prisma.CityFindManyArgs) {
    return this.prisma.city
      .findMany(cityFindManyArgs)
      .then((citys) => {
        return citys;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }

  async findOne(cityFindUniqueArgs: CityFindUniqueArgs): Promise<City | void> {
    return await this.prisma.city
      .findUnique(cityFindUniqueArgs)
      .then((city) => {
        return city;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }

  async update(cityUpdateOneArgs: CityUpdateOneArgs): Promise<City | void> {
    return this.prisma.city
      .update(cityUpdateOneArgs)
      .then((city) => {
        return city;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
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
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }
}
