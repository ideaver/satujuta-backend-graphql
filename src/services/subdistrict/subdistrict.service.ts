import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { CreateOneSubdistrictArgs, Subdistrict } from 'src/@generated';
import { SubdistrictFindManyArgs } from './dto/subdistrict-find-many.args';
import { SubdistrictFindUniqueArgs } from './dto/subdistrict-find-one.args';
import { SubdistrictUpdateOneArgs } from './dto/subdistrict-update-one.args';

@Injectable()
export class SubdistrictService {
  constructor(private prisma: PrismaService) {}

  // async createOne(
  //   subdistrictCreateArgs: CreateOneSubdistrictArgs,
  // ): Promise<Subdistrict | void> {
  //   return await this.prisma.subdistrict
  //     .create(subdistrictCreateArgs)
  //     .then((subdistrict) => {
  //       return subdistrict;
  //     })
  //     .catch((err) => {
  //       throw new IGraphQLError({ code: 123456, err: err });
  //     });
  // }

  async findMany(subdistrictFindManyArgs: SubdistrictFindManyArgs) {
    return this.prisma.subdistrict
      .findMany(subdistrictFindManyArgs)
      .then((subdistricts) => {
        return subdistricts;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }

  async findOne(
    subdistrictFindUniqueArgs: SubdistrictFindUniqueArgs,
  ): Promise<Subdistrict | void> {
    return await this.prisma.subdistrict
      .findUnique(subdistrictFindUniqueArgs)
      .then((subdistrict) => {
        return subdistrict;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }

  async update(
    subdistrictUpdateOneArgs: SubdistrictUpdateOneArgs,
  ): Promise<Subdistrict | void> {
    return this.prisma.subdistrict
      .update(subdistrictUpdateOneArgs)
      .then((subdistrict) => {
        return subdistrict;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }

  async remove(subdistrictId: number): Promise<boolean | void> {
    return await this.prisma.subdistrict
      .delete({
        where: { id: subdistrictId },
      })
      .then(() => {
        return true;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }
}
