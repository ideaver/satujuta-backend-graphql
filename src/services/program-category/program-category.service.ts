import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { CreateOneProgramCategoryArgs, ProgramCategory } from 'src/@generated';
import { ProgramCategoryFindManyArgs } from './dto/program-category-find-many.args';
import { ProgramCategoryFindUniqueArgs } from './dto/program-category-find-one.args';
import { ProgramCategoryUpdateOneArgs } from './dto/program-category-update-one.args';

@Injectable()
export class ProgramCategoryService {
  constructor(private prisma: PrismaService) {}

  async createOne(
    programCategoryCreateArgs: CreateOneProgramCategoryArgs,
  ): Promise<ProgramCategory | void> {
    return await this.prisma.programCategory
      .create(programCategoryCreateArgs)
      .then((programCategory) => {
        return programCategory;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }

  async findMany(programCategoryFindManyArgs: ProgramCategoryFindManyArgs) {
    return this.prisma.programCategory
      .findMany(programCategoryFindManyArgs)
      .then((programCategorys) => {
        return programCategorys;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }

  async findOne(
    programCategoryFindUniqueArgs: ProgramCategoryFindUniqueArgs,
  ): Promise<ProgramCategory | void> {
    return await this.prisma.programCategory
      .findUnique(programCategoryFindUniqueArgs)
      .then((programCategory) => {
        return programCategory;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }

  async update(
    programCategoryUpdateOneArgs: ProgramCategoryUpdateOneArgs,
  ): Promise<ProgramCategory | void> {
    return this.prisma.programCategory
      .update(programCategoryUpdateOneArgs)
      .then((programCategory) => {
        return programCategory;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }

  async remove(programCategoryId: number): Promise<boolean | void> {
    return await this.prisma.programCategory
      .delete({
        where: { id: programCategoryId },
      })
      .then(() => {
        return true;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }
}
