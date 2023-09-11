import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ProgramCategoryService } from './program-category.service';

@Injectable()
export class ProgramCategoryController {
  constructor(
    private readonly programCategoryService: ProgramCategoryService,
  ) {}

  async createOne(programCategoryCreateArgs: Prisma.ProgramCategoryCreateArgs) {
    return await this.programCategoryService.createOne(
      programCategoryCreateArgs,
    );
  }

  async createMany(
    programCategoryCreateManyArgs: Prisma.ProgramCategoryCreateManyArgs,
  ) {
    return await this.programCategoryService.createMany(
      programCategoryCreateManyArgs,
    );
  }

  async findOne(
    programCategoryFindUniqueArgs: Prisma.ProgramCategoryFindUniqueArgs,
  ) {
    return await this.programCategoryService.findOne(
      programCategoryFindUniqueArgs,
    );
  }

  async findMany(
    programCategoryFindManyArgs: Prisma.ProgramCategoryFindManyArgs,
  ) {
    return await this.programCategoryService.findMany(
      programCategoryFindManyArgs,
    );
  }

  async findFirst(
    programCategoryFindFirstArgs: Prisma.ProgramCategoryFindFirstArgs,
  ) {
    return await this.programCategoryService.findFirst(
      programCategoryFindFirstArgs,
    );
  }

  async updateOne(
    programCategoryUpdateOneArgs: Prisma.ProgramCategoryUpdateArgs,
  ) {
    return await this.programCategoryService.updateOne(
      programCategoryUpdateOneArgs,
    );
  }

  async updateMany(
    programCategoryUpdateManyArgs: Prisma.ProgramCategoryUpdateManyArgs,
  ) {
    return await this.programCategoryService.updateMany(
      programCategoryUpdateManyArgs,
    );
  }

  async delete(programCategoryDeleteArgs: Prisma.ProgramCategoryDeleteArgs) {
    return await this.programCategoryService.delete(programCategoryDeleteArgs);
  }

  async deleteMany(
    programCategoryDeleteManyArgs: Prisma.ProgramCategoryDeleteManyArgs,
  ) {
    return await this.programCategoryService.deleteMany(
      programCategoryDeleteManyArgs,
    );
  }

  async aggregate(
    programCategoryAggregateArgs: Prisma.ProgramCategoryAggregateArgs,
  ) {
    return await this.programCategoryService.aggregate(
      programCategoryAggregateArgs,
    );
  }

  async count(programCategoryCountArgs: Prisma.ProgramCategoryCountArgs) {
    return await this.programCategoryService.count(programCategoryCountArgs);
  }
}
