import { Injectable } from '@nestjs/common';
import { Prisma, UserRole, UserStatus } from '@prisma/client';
import { SchoolService } from './school.service';
import { Top10SchoolWithStudents } from './dtos/top-10-school-with-students.output';
import { School } from 'src/@generated';

@Injectable()
export class SchoolController {
  constructor(private readonly schoolService: SchoolService) {}

  async createOne(schoolCreateArgs: Prisma.SchoolCreateArgs) {
    return await this.schoolService.createOne(schoolCreateArgs);
  }

  async createMany(schoolCreateManyArgs: Prisma.SchoolCreateManyArgs) {
    return await this.schoolService.createMany(schoolCreateManyArgs);
  }

  async findOne(schoolFindUniqueArgs: Prisma.SchoolFindUniqueArgs) {
    return await this.schoolService.findOne(schoolFindUniqueArgs);
  }

  async findMany(schoolFindManyArgs: Prisma.SchoolFindManyArgs) {
    return await this.schoolService.findMany(schoolFindManyArgs);
  }

  async findFirst(schoolFindFirstArgs: Prisma.SchoolFindFirstArgs) {
    return await this.schoolService.findFirst(schoolFindFirstArgs);
  }

  async updateOne(schoolUpdateOneArgs: Prisma.SchoolUpdateArgs) {
    return await this.schoolService.updateOne(schoolUpdateOneArgs);
  }

  async updateMany(schoolUpdateManyArgs: Prisma.SchoolUpdateManyArgs) {
    return await this.schoolService.updateMany(schoolUpdateManyArgs);
  }

  async delete(schoolDeleteArgs: Prisma.SchoolDeleteArgs) {
    return await this.schoolService.delete(schoolDeleteArgs);
  }

  async deleteMany(schoolDeleteManyArgs: Prisma.SchoolDeleteManyArgs) {
    return await this.schoolService.deleteMany(schoolDeleteManyArgs);
  }

  async aggregate(schoolAggregateArgs: Prisma.SchoolAggregateArgs) {
    return await this.schoolService.aggregate(schoolAggregateArgs);
  }

  async count(schoolCountArgs: Prisma.SchoolCountArgs) {
    return await this.schoolService.count(schoolCountArgs);
  }

  async countTop10SchoolsWithMostStudents(): Promise<
    Top10SchoolWithStudents[]
  > {
    const schoolsWithStudentCount = await this.findMany({
      select: {
        id: true,
        name: true,
        students: {
          where: {
            userRole: { equals: UserRole.STUDENT },
            status: { equals: UserStatus.ACTIVE },
          },
          select: {
            _count: true,
          },
        },
      },
      orderBy: {
        students: {
          _count: 'desc',
        },
      },
      take: 10,
    });

    const formattedSchoolsWithStudents = schoolsWithStudentCount
      .map((school: School) => ({
        schoolId: school.id,
        schoolName: school.name,
        userCount: school.students.length,
      }))
      .filter((school) => school.userCount > 0);

    return formattedSchoolsWithStudents;
  }

  async countTop10SchoolsWithLeastStudents(): Promise<
    Top10SchoolWithStudents[]
  > {
    const schoolsWithStudentCount = await this.findMany({
      select: {
        id: true,
        name: true,
        students: {
          where: {
            userRole: { equals: UserRole.STUDENT },
            status: { equals: UserStatus.ACTIVE },
          },
          select: {
            _count: true,
          },
        },
      },
      orderBy: {
        students: {
          _count: 'asc',
        },
      },
      take: 10,
    });

    const formattedSchoolsWithStudents = schoolsWithStudentCount
      .map((school: School) => ({
        schoolId: school.id,
        schoolName: school.name,
        userCount: school.students.length,
      }))
      .filter((school) => school.userCount > 0);

    return formattedSchoolsWithStudents;
  }
}
