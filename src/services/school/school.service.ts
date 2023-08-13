import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { throwPrismaError } from 'src/utils/throw-prisma-error.function';
import { CreateOneSchoolArgs, School } from 'src/@generated';
import { SchoolFindManyArgs } from './dto/school-find-many.args';
import { SchoolFindUniqueArgs } from './dto/school-find-one.args';
import { SchoolUpdateOneArgs } from './dto/school-update-one.args';

@Injectable()
export class SchoolService {
  constructor(private prisma: PrismaService) {}

  async createOne(schoolCreateArgs: CreateOneSchoolArgs): Promise<School | void> {

    return await this.prisma.school
      .create(schoolCreateArgs)
      .then((school) => {
        return school;
      })
      .catch((err) => {
        throwPrismaError(err);
      });
  }

  async findMany(schoolFindManyArgs: SchoolFindManyArgs) {
    return this.prisma.school
      .findMany(schoolFindManyArgs)
      .then((schools) => {
        return schools;
      })
      .catch((err) => {
        throwPrismaError(err);
      });
  }

  async findOne(schoolFindUniqueArgs: SchoolFindUniqueArgs): Promise<School | void> {
    return await this.prisma.school
      .findUnique(schoolFindUniqueArgs)
      .then((school) => {
        return school;
      })
      .catch((err) => {
        throwPrismaError(err);
      });
  }

  async update(schoolUpdateOneArgs: SchoolUpdateOneArgs): Promise<School | void> {
    return this.prisma.school
      .update(schoolUpdateOneArgs)
      .then((school) => {
        return school;
      })
      .catch((err) => {
        throwPrismaError(err);
      });
  }

  async remove(schoolId: number): Promise<boolean | void>{
    return await this.prisma.school
      .delete({
        where: { id: schoolId },
      })
      .then(() => {
        return true;
      })
      .catch((err) => {
        throwPrismaError(err);
      });
  }
}
