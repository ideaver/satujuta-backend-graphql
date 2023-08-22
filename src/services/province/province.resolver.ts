import { Resolver, Query, Mutation, Args, Info } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import { Province } from 'src/@generated';
import { ProvinceCreateArgs } from './dto/province-create-one.args';
import { ProvinceFindManyArgs } from './dto/province-find-many.args';
import { ProvinceFindUniqueArgs } from './dto/province-find-one.args';
import { ProvinceUpdateOneArgs } from './dto/province-update-one.args';
import { ProvinceController } from './province.controller';
import { Logger } from '@nestjs/common';

interface ProvinceSelect {
  select: Prisma.ProvinceSelect;
}

@Resolver(() => Province)
export class ProvinceResolver {
  constructor(private readonly provinceController: ProvinceController) {}
  private readonly logger = new Logger(ProvinceResolver.name);
  // @Mutation(() => Province, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async provinceCreateOne(
  //   @Args('provinceCreateArgs') provinceCreateArgs: ProvinceCreateArgs,
  //   @Relations() relations: ProvinceSelect,
  // ): Promise<Province | void> {
  //   provinceCreateArgs.select = relations.select;
  //   return await this.provinceController.createOne(provinceCreateArgs);
  // }

  @Query(() => [Province], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  provinceFindMany(
    @Args('provinceFindManyArgs') provinceFindManyArgs: ProvinceFindManyArgs,
    @Relations() relations: ProvinceSelect,
  ) {
    //Auto implement prisma select from graphql query info
    provinceFindManyArgs.select = relations.select;
    return this.provinceController.findMany(provinceFindManyArgs);
  }

  @Query(() => Province, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  provinceFindOne(
    @Args('provinceFindUniqueArgs')
    provinceFindUniqueArgs: ProvinceFindUniqueArgs,
    @Relations() relations: ProvinceSelect,
  ): Promise<Province | void> {
    //Auto implement prisma select from graphql query info
    provinceFindUniqueArgs.select = relations.select;
    return this.provinceController.findOne(provinceFindUniqueArgs);
  }

  // @Mutation(() => Province, {
  //   description:
  //     'Deskripsinya ada disini loh, Jika tentang mutasi klaim province, backend akan cek apakah saldo point user cukup untuk claim',
  // })
  // async provinceUpdateOne(
  //   @Args('provinceUpdateOneArgs') provinceUpdateOneArgs: ProvinceUpdateOneArgs,
  //   @Relations() relations: ProvinceSelect,
  // ) {
  //   //Auto implement prisma select from graphql query info
  //   provinceUpdateOneArgs.select = relations.select;

  //   return this.provinceController.updateOne(provinceUpdateOneArgs);
  // }

  // @Mutation(() => Boolean, {
  //   nullable: true,
  //   description: 'Datanya benar2 terhapus dari db',
  // })
  // provinceRemove(@Args('provinceId') provinceId: number) {
  //   return this.provinceController.remove(provinceId);
  // }
}
