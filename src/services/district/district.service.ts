import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { CreateOneDistrictArgs, District } from 'src/@generated';
import { DistrictFindManyArgs } from './dto/district-find-many.args';
import { DistrictFindUniqueArgs } from './dto/district-find-one.args';
import { DistrictUpdateOneArgs } from './dto/district-update-one.args';

@Injectable()
export class DistrictService {
  constructor(private prisma: PrismaService) {}

  // async createOne(
  //   districtCreateArgs: CreateOneDistrictArgs,
  // ): Promise<District | void> {
  //   return await this.prisma.district
  //     .create(districtCreateArgs)
  //     .then((district) => {
  //       return district;
  //     })
  //     .catch((err) => {
  //       throw new IGraphQLError({ code: 123456, err: err });
  //     });
  // }

  async findMany(districtFindManyArgs: DistrictFindManyArgs) {
    return this.prisma.district
      .findMany(districtFindManyArgs)
      .then((districts) => {
        return districts;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }

  async findOne(
    districtFindUniqueArgs: DistrictFindUniqueArgs,
  ): Promise<District | void> {
    return await this.prisma.district
      .findUnique(districtFindUniqueArgs)
      .then((district) => {
        return district;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }

  async update(
    districtUpdateOneArgs: DistrictUpdateOneArgs,
  ): Promise<District | void> {
    return this.prisma.district
      .update(districtUpdateOneArgs)
      .then((district) => {
        return district;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }

  async remove(districtId: number): Promise<boolean | void> {
    return await this.prisma.district
      .delete({
        where: { id: districtId },
      })
      .then(() => {
        return true;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }
}
