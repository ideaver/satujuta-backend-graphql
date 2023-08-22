import { Resolver, Query, Mutation, Args, Info } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import { Subdistrict } from 'src/@generated';
import { SubdistrictCreateArgs } from './dto/subdistrict-create-one.args';
import { SubdistrictFindManyArgs } from './dto/subdistrict-find-many.args';
import { SubdistrictFindUniqueArgs } from './dto/subdistrict-find-one.args';
import { SubdistrictUpdateOneArgs } from './dto/subdistrict-update-one.args';
import { SubdistrictController } from './subdistrict.controller';
import { Logger } from '@nestjs/common';

interface SubdistrictSelect {
  select: Prisma.SubdistrictSelect;
}

@Resolver(() => Subdistrict)
export class SubdistrictResolver {
  constructor(private readonly subdistrictController: SubdistrictController) {}
  private readonly logger = new Logger(SubdistrictResolver.name);
  // @Mutation(() => Subdistrict, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async subdistrictCreateOne(
  //   @Args('subdistrictCreateArgs') subdistrictCreateArgs: SubdistrictCreateArgs,
  //   @Relations() relations: SubdistrictSelect,
  // ): Promise<Subdistrict | void> {
  //   subdistrictCreateArgs.select = relations.select;
  //   return await this.subdistrictController.createOne(subdistrictCreateArgs);
  // }

  @Query(() => [Subdistrict], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  subdistrictFindMany(
    @Args('subdistrictFindManyArgs')
    subdistrictFindManyArgs: SubdistrictFindManyArgs,
    @Relations() relations: SubdistrictSelect,
  ) {
    //Auto implement prisma select from graphql query info
    subdistrictFindManyArgs.select = relations.select;
    return this.subdistrictController.findMany(subdistrictFindManyArgs);
  }

  @Query(() => Subdistrict, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  subdistrictFindOne(
    @Args('subdistrictFindUniqueArgs')
    subdistrictFindUniqueArgs: SubdistrictFindUniqueArgs,
    @Relations() relations: SubdistrictSelect,
  ): Promise<Subdistrict | void> {
    //Auto implement prisma select from graphql query info
    subdistrictFindUniqueArgs.select = relations.select;
    return this.subdistrictController.findOne(subdistrictFindUniqueArgs);
  }

  // @Mutation(() => Subdistrict, {
  //   description:
  //     'Deskripsinya ada disini loh, Jika tentang mutasi klaim subdistrict, backend akan cek apakah saldo point user cukup untuk claim',
  // })
  // async subdistrictUpdateOne(
  //   @Args('subdistrictUpdateOneArgs') subdistrictUpdateOneArgs: SubdistrictUpdateOneArgs,
  //   @Relations() relations: SubdistrictSelect,
  // ) {
  //   //Auto implement prisma select from graphql query info
  //   subdistrictUpdateOneArgs.select = relations.select;

  //   return this.subdistrictController.updateOne(subdistrictUpdateOneArgs);
  // }

  // @Mutation(() => Boolean, {
  //   nullable: true,
  //   description: 'Datanya benar2 terhapus dari db',
  // })
  // subdistrictRemove(@Args('subdistrictId') subdistrictId: number) {
  //   return this.subdistrictController.remove(subdistrictId);
  // }
}
