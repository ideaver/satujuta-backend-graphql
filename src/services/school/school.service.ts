import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import {
  CreateOneSchoolArgs,
  FindManySchoolArgs,
  School,
} from 'src/@generated';
import { SchoolFindManyArgs } from './dto/school-find-many.args';
import { SchoolFindUniqueArgs } from './dto/school-find-one.args';
import { SchoolUpdateOneArgs } from './dto/school-update-one.args';

@Injectable()
export class SchoolService {
  constructor(private prisma: PrismaService) {}

  async createOne(
    schoolCreateArgs: CreateOneSchoolArgs,
  ): Promise<School | void> {
    return await this.prisma.school
      .create(schoolCreateArgs)
      .then((school) => {
        return school;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }

  async findMany(schoolFindManyArgs: SchoolFindManyArgs) {
    return this.prisma.school
      .findMany(schoolFindManyArgs)
      .then((schools) => {
        return schools;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }

  async findOne(
    schoolFindUniqueArgs: SchoolFindUniqueArgs,
  ): Promise<School | void> {
    return await this.prisma.school
      .findUnique(schoolFindUniqueArgs)
      .then((school) => {
        return school;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }

  async update(
    schoolUpdateOneArgs: SchoolUpdateOneArgs,
  ): Promise<School | void> {
    return this.prisma.school
      .update(schoolUpdateOneArgs)
      .then((school) => {
        return school;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }

  async remove(schoolId: number): Promise<boolean | void> {
    return await this.prisma.school
      .delete({
        where: { id: schoolId },
      })
      .then(() => {
        return true;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }

  async count(findManySchoolArgs: FindManySchoolArgs): Promise<number | void> {
    return await this.prisma.school
      .count(findManySchoolArgs)
      .then((count) => {
        return count;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }
}
