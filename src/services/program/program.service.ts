import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { throwPrismaError } from 'src/utils/throw-prisma-error.function';
import { CreateOneProgramArgs, Program } from 'src/@generated';

@Injectable()
export class ProgramService {
  constructor(private prisma: PrismaService) {}

  async createOne(programCreateArgs: CreateOneProgramArgs): Promise<Program | void> {

    return await this.prisma.program
      .create(programCreateArgs)
      .then((program) => {
        console.log("program created "+program)
        return program;
      })
      .catch((err) => {
        throwPrismaError(err);
      });
  }

  // async findMany(programFindManyArgs: ProgramFindManyArgs) {
  //   return this.prisma.program
  //     .findMany(programFindManyArgs)
  //     .then((programs) => {
  //       return programs;
  //     })
  //     .catch((err) => {
  //       throwPrismaError(err);
  //     });
  // }

  // async findOne(programFindUniqueArgs: ProgramFindUniqueArgs): Promise<Program | void> {
  //   return await this.prisma.program
  //     .findUnique(programFindUniqueArgs)
  //     .then((program) => {
  //       return program;
  //     })
  //     .catch((err) => {
  //       throwPrismaError(err);
  //     });
  // }

  // async update(programUpdateOneArgs: ProgramUpdateOneArgs): Promise<Program | void> {
  //   return this.prisma.program
  //     .update(programUpdateOneArgs)
  //     .then((program) => {
  //       return program;
  //     })
  //     .catch((err) => {
  //       throwPrismaError(err);
  //     });
  // }

  // async remove(programId: string) {
  //   return await this.prisma.program
  //     .update({
  //       where: { id: programId },
  //       data: { deletedAt: new Date() },
  //       select: { id: true, firstName: true, deletedAt: true },
  //     })
  //     .then((program) => {
  //       return program;
  //     })
  //     .catch((err) => {
  //       throwPrismaError(err);
  //     });
  // }
}
