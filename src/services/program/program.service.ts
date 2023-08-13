import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { throwPrismaError } from 'src/utils/throw-prisma-error.function';
import { CreateOneProgramArgs, Program } from 'src/@generated';
import { ProgramFindManyArgs } from './dto/program-find-many.args';
import { ProgramFindUniqueArgs } from './dto/program-find-one.args';
import { ProgramUpdateOneArgs } from './dto/program-update-one.args';

@Injectable()
export class ProgramService {
  constructor(private prisma: PrismaService) {}

  async createOne(programCreateArgs: CreateOneProgramArgs): Promise<Program | void> {

    return await this.prisma.program
      .create(programCreateArgs)
      .then((program) => {
        return program;
      })
      .catch((err) => {
        throwPrismaError(err);
      });
  }

  async findMany(programFindManyArgs: ProgramFindManyArgs) {
    return this.prisma.program
      .findMany(programFindManyArgs)
      .then((programs) => {
        return programs;
      })
      .catch((err) => {
        throwPrismaError(err);
      });
  }

  async findOne(programFindUniqueArgs: ProgramFindUniqueArgs): Promise<Program | void> {
    return await this.prisma.program
      .findUnique(programFindUniqueArgs)
      .then((program) => {
        return program;
      })
      .catch((err) => {
        throwPrismaError(err);
      });
  }

  async update(programUpdateOneArgs: ProgramUpdateOneArgs): Promise<Program | void> {
    return this.prisma.program
      .update(programUpdateOneArgs)
      .then((program) => {
        return program;
      })
      .catch((err) => {
        throwPrismaError(err);
      });
  }

  async remove(programId: number): Promise<boolean | void>{
    return await this.prisma.program
      .delete({
        where: { id: programId },
      })
      .then(() => {
        return true;
      })
      .catch((err) => {
        throwPrismaError(err);
      });
  }
}
