import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { throwPrismaError } from 'src/utils/throw-prisma-error.function';
import { CreateOneProgramCategoryArgs, ProgramCategory } from 'src/@generated';
import { ProgramCategoryFindManyArgs } from './dto/program-category-find-many.args';
import { ProgramCategoryFindUniqueArgs } from './dto/program-category-find-one.args';
import { ProgramCategoryUpdateOneArgs } from './dto/program-category-update-one.args';

@Injectable()
export class ProgramCategoryService {
  constructor(private prisma: PrismaService) {}

  async createOne(programCategoryCreateArgs: CreateOneProgramCategoryArgs): Promise<ProgramCategory | void> {

    return await this.prisma.programCategory
      .create(programCategoryCreateArgs)
      .then((programCategory) => {
        return programCategory;
      })
      .catch((err) => {
        throwPrismaError(err);
      });
  }

  async findMany(programCategoryFindManyArgs: ProgramCategoryFindManyArgs) {
    return this.prisma.programCategory
      .findMany(programCategoryFindManyArgs)
      .then((programCategorys) => {
        return programCategorys;
      })
      .catch((err) => {
        throwPrismaError(err);
      });
  }

  async findOne(programCategoryFindUniqueArgs: ProgramCategoryFindUniqueArgs): Promise<ProgramCategory | void> {
    return await this.prisma.programCategory
      .findUnique(programCategoryFindUniqueArgs)
      .then((programCategory) => {
        return programCategory;
      })
      .catch((err) => {
        throwPrismaError(err);
      });
  }

  async update(programCategoryUpdateOneArgs: ProgramCategoryUpdateOneArgs): Promise<ProgramCategory | void> {
    return this.prisma.programCategory
      .update(programCategoryUpdateOneArgs)
      .then((programCategory) => {
        return programCategory;
      })
      .catch((err) => {
        throwPrismaError(err);
      });
  }

  async remove(programCategoryId: number): Promise<boolean | void>{
    return await this.prisma.programCategory
      .delete({
        where: { id: programCategoryId },
      })
      .then(() => {
        return true;
      })
      .catch((err) => {
        throwPrismaError(err);
      });
  }
}
