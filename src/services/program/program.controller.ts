import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ProgramService } from './program.service';

@Injectable()
export class ProgramController {
  constructor(private readonly programService: ProgramService) {}

  async createOne(programCreateArgs: Prisma.ProgramCreateArgs) {
    return await this.programService.createOne(programCreateArgs);
  }

  async createMany(programCreateManyArgs: Prisma.ProgramCreateManyArgs) {
    return await this.programService.createMany(programCreateManyArgs);
  }

  async findOne(programFindUniqueArgs: Prisma.ProgramFindUniqueArgs) {
    return await this.programService.findOne(programFindUniqueArgs);
  }

  async findMany(programFindManyArgs: Prisma.ProgramFindManyArgs) {
    return await this.programService.findMany(programFindManyArgs);
  }

  async findFirst(programFindFirstArgs: Prisma.ProgramFindFirstArgs) {
    return await this.programService.findFirst(programFindFirstArgs);
  }

  async updateOne(programUpdateOneArgs: Prisma.ProgramUpdateArgs) {
    return await this.programService.updateOne(programUpdateOneArgs);
  }

  async updateMany(programUpdateManyArgs: Prisma.ProgramUpdateManyArgs) {
    return await this.programService.updateMany(programUpdateManyArgs);
  }

  async delete(programDeleteArgs: Prisma.ProgramDeleteArgs) {
    return await this.programService.delete(programDeleteArgs);
  }

  async deleteMany(programDeleteManyArgs: Prisma.ProgramDeleteManyArgs) {
    return await this.programService.deleteMany(programDeleteManyArgs);
  }

  async aggregate(programAggregateArgs: Prisma.ProgramAggregateArgs) {
    return await this.programService.aggregate(programAggregateArgs);
  }

  async count(programCountArgs: Prisma.ProgramCountArgs) {
    return await this.programService.count(programCountArgs);
  }
}
