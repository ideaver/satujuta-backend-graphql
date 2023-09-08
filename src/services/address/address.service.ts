import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class AddressService {
  constructor(private prisma: PrismaService) {}

  async createOne(addressCreateArgs: Prisma.AddressCreateArgs) {
    try {
      return await this.prisma.address.create(addressCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(addressCreateManyArgs: Prisma.AddressCreateManyArgs) {
    try {
      return await this.prisma.address.createMany(addressCreateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(addressFindUniqueArgs: Prisma.AddressFindUniqueArgs) {
    try {
      return await this.prisma.address.findUnique(addressFindUniqueArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(addressFindManyArgs: Prisma.AddressFindManyArgs) {
    try {
      return await this.prisma.address.findMany(addressFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(addressFindFirstArgs: Prisma.AddressFindFirstArgs) {
    try {
      return await this.prisma.address.findFirst(addressFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(addressUpdateOneArgs: Prisma.AddressUpdateArgs) {
    try {
      return await this.prisma.address.update(addressUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(addressUpdateManyArgs: Prisma.AddressUpdateManyArgs) {
    try {
      return await this.prisma.address.updateMany(addressUpdateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(addressDeleteArgs: Prisma.AddressDeleteArgs) {
    try {
      await this.prisma.address.delete(addressDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(addressDeleteManyArgs: Prisma.AddressDeleteManyArgs) {
    try {
      await this.prisma.address.deleteMany(addressDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(addressAggregateArgs: Prisma.AddressAggregateArgs) {
    try {
      return await this.prisma.address.aggregate(addressAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(addressCountArgs: Prisma.AddressCountArgs) {
    try {
      return await this.prisma.address.count(addressCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}
