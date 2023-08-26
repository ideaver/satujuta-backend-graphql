import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { CreateOneCheckInArgs, CheckIn } from 'src/@generated';
import { CheckInFindManyArgs } from './dto/check-in-find-many.args';
import { CheckInFindUniqueArgs } from './dto/check-in-find-one.args';
import { CheckInUpdateOneArgs } from './dto/check-in-update-one.args';

@Injectable()
export class CheckInService {
  constructor(private prisma: PrismaService) {}

  async createOne(
    checkInCreateArgs: CreateOneCheckInArgs,
  ): Promise<CheckIn | void> {
    return await this.prisma.checkIn
      .create(checkInCreateArgs)
      .then((checkIn) => {
        return checkIn;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }

  async findMany(checkInFindManyArgs: CheckInFindManyArgs) {
    return this.prisma.checkIn
      .findMany(checkInFindManyArgs)
      .then((checkIns) => {
        return checkIns;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }

  async findOne(
    checkInFindUniqueArgs: CheckInFindUniqueArgs,
  ): Promise<CheckIn | void> {
    return await this.prisma.checkIn
      .findUnique(checkInFindUniqueArgs)
      .then((checkIn) => {
        return checkIn;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }

  async update(
    checkInUpdateOneArgs: CheckInUpdateOneArgs,
  ): Promise<CheckIn | void> {
    return this.prisma.checkIn
      .update(checkInUpdateOneArgs)
      .then((checkIn) => {
        return checkIn;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }

  async remove(checkInId: number): Promise<boolean | void> {
    return await this.prisma.checkIn
      .delete({
        where: { id: checkInId },
      })
      .then(() => {
        return true;
      })
      .catch((err) => {
        throw new IGraphQLError({ code: 123456, err: err });
      });
  }
}
