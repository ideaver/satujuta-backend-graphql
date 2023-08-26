import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { CreateOneProvinceArgs, Province } from 'src/@generated';
import { ProvinceFindManyArgs } from './dto/province-find-many.args';
import { ProvinceFindUniqueArgs } from './dto/province-find-one.args';
import { ProvinceUpdateOneArgs } from './dto/province-update-one.args';

@Injectable()
export class ProvinceService {
  constructor(private prisma: PrismaService) {}

  async createOne(
    provinceCreateArgs: CreateOneProvinceArgs,
  ): Promise<Province | void> {
    return await this.prisma.province
      .create(provinceCreateArgs)
      .then((province) => {
        return province;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }

  async findMany(provinceFindManyArgs: ProvinceFindManyArgs) {
    return this.prisma.province
      .findMany(provinceFindManyArgs)
      .then((provinces) => {
        return provinces;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }

  async findOne(
    provinceFindUniqueArgs: ProvinceFindUniqueArgs,
  ): Promise<Province | void> {
    return await this.prisma.province
      .findUnique(provinceFindUniqueArgs)
      .then((province) => {
        return province;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }

  async update(
    provinceUpdateOneArgs: ProvinceUpdateOneArgs,
  ): Promise<Province | void> {
    return this.prisma.province
      .update(provinceUpdateOneArgs)
      .then((province) => {
        return province;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }

  async remove(provinceId: number): Promise<boolean | void> {
    return await this.prisma.province
      .delete({
        where: { id: provinceId },
      })
      .then(() => {
        return true;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }
}
