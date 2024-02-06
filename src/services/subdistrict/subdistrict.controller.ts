import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { SubdistrictService } from './subdistrict.service';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';

@Injectable()
export class SubdistrictController {
  constructor(private readonly subdistrictService: SubdistrictService) {}

  async createOne(subdistrictCreateArgs: Prisma.SubdistrictCreateArgs) {
    return await this.subdistrictService.createOne(subdistrictCreateArgs);
  }

  async createMany(
    subdistrictCreateManyArgs: Prisma.SubdistrictCreateManyArgs,
  ) {
    return await this.subdistrictService.createMany(subdistrictCreateManyArgs);
  }

  async findOne(subdistrictFindUniqueArgs: Prisma.SubdistrictFindUniqueArgs) {
    return await this.subdistrictService.findOne(subdistrictFindUniqueArgs);
  }

  async findMany(subdistrictFindManyArgs: Prisma.SubdistrictFindManyArgs) {
    return await this.subdistrictService.findMany(
      replaceNullWithUndefined(subdistrictFindManyArgs),
    );
  }

  async findFirst(subdistrictFindFirstArgs: Prisma.SubdistrictFindFirstArgs) {
    return await this.subdistrictService.findFirst(subdistrictFindFirstArgs);
  }

  async updateOne(subdistrictUpdateOneArgs: Prisma.SubdistrictUpdateArgs) {
    return await this.subdistrictService.updateOne(subdistrictUpdateOneArgs);
  }

  async updateMany(
    subdistrictUpdateManyArgs: Prisma.SubdistrictUpdateManyArgs,
  ) {
    return await this.subdistrictService.updateMany(subdistrictUpdateManyArgs);
  }

  async delete(subdistrictDeleteArgs: Prisma.SubdistrictDeleteArgs) {
    return await this.subdistrictService.delete(subdistrictDeleteArgs);
  }

  async deleteMany(
    subdistrictDeleteManyArgs: Prisma.SubdistrictDeleteManyArgs,
  ) {
    return await this.subdistrictService.deleteMany(subdistrictDeleteManyArgs);
  }

  async aggregate(subdistrictAggregateArgs: Prisma.SubdistrictAggregateArgs) {
    return await this.subdistrictService.aggregate(subdistrictAggregateArgs);
  }

  async count(subdistrictCountArgs: Prisma.SubdistrictCountArgs) {
    return await this.subdistrictService.count(subdistrictCountArgs);
  }
}
