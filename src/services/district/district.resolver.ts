import { Resolver, Query, Mutation, Args, Info } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import { District } from 'src/@generated';
import { DistrictCreateArgs } from './dto/district-create-one.args';
import { DistrictFindManyArgs } from './dto/district-find-many.args';
import { DistrictFindUniqueArgs } from './dto/district-find-one.args';
import { DistrictUpdateOneArgs } from './dto/district-update-one.args';
import { DistrictController } from './district.controller';
import { Logger } from '@nestjs/common';

interface DistrictSelect {
  select: Prisma.DistrictSelect;
}

@Resolver(() => District)
export class DistrictResolver {
  constructor(private readonly districtController: DistrictController) {}
  private readonly logger = new Logger(DistrictResolver.name);
  // @Mutation(() => District, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async districtCreateOne(
  //   @Args('districtCreateArgs') districtCreateArgs: DistrictCreateArgs,
  //   @Relations() relations: DistrictSelect,
  // ): Promise<District | void> {
  //   districtCreateArgs.select = relations.select;
  //   return await this.districtController.createOne(districtCreateArgs);
  // }

  @Query(() => [District], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  districtFindMany(
    @Args('districtFindManyArgs') districtFindManyArgs: DistrictFindManyArgs,
    @Relations() relations: DistrictSelect,
  ) {
    //Auto implement prisma select from graphql query info
    districtFindManyArgs.select = relations.select;
    return this.districtController.findMany(districtFindManyArgs);
  }

  @Query(() => District, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  districtFindOne(
    @Args('districtFindUniqueArgs')
    districtFindUniqueArgs: DistrictFindUniqueArgs,
    @Relations() relations: DistrictSelect,
  ): Promise<District | void> {
    //Auto implement prisma select from graphql query info
    districtFindUniqueArgs.select = relations.select;
    return this.districtController.findOne(districtFindUniqueArgs);
  }

  // @Mutation(() => District, {
  //   description:
  //     'Deskripsinya ada disini loh, Jika tentang mutasi klaim district, backend akan cek apakah saldo point user cukup untuk claim',
  // })
  // async districtUpdateOne(
  //   @Args('districtUpdateOneArgs') districtUpdateOneArgs: DistrictUpdateOneArgs,
  //   @Relations() relations: DistrictSelect,
  // ) {
  //   //Auto implement prisma select from graphql query info
  //   districtUpdateOneArgs.select = relations.select;

  //   return this.districtController.updateOne(districtUpdateOneArgs);
  // }

  // @Mutation(() => Boolean, {
  //   nullable: true,
  //   description: 'Datanya benar2 terhapus dari db',
  // })
  // districtRemove(@Args('districtId') districtId: number) {
  //   return this.districtController.remove(districtId);
  // }
}
