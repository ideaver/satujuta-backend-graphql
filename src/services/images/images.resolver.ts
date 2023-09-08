// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateImages,
  CreateManyImagesArgs,
  CreateOneImagesArgs,
  DeleteManyImagesArgs,
  DeleteOneImagesArgs,
  FindFirstImagesArgs,
  FindManyImagesArgs,
  FindUniqueImagesArgs,
  Images,
  ImagesAggregateArgs,
  UpdateManyImagesArgs,
  UpdateOneImagesArgs,
} from 'src/@generated';
import { ImagesController } from './images.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

interface ImagesSelect {
  select: Prisma.ImagesSelect;
}

@Resolver(() => Images)
export class ImagesResolver {
  constructor(private readonly imagesController: ImagesController) {}

  // @Mutation(() => Images, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async imagesCreateOne(
  //   @Args()
  //   imagesCreateArgs: CreateOneImagesArgs,
  //   @Relations() relations: ImagesSelect,
  // ): Promise<Images | void> {
  //   return await this.imagesController.createOne({
  //     ...imagesCreateArgs,
  //     select: relations.select,
  //   });
  // }

  // @Mutation(() => BatchPayload, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async imagesCreateMany(
  //   @Args()
  //   createManyImagesArgs: CreateManyImagesArgs,
  // ) {
  //   return await this.imagesController.createMany(createManyImagesArgs);
  // }

  @Query(() => Images, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  imagesFindOne(
    @Args()
    imagesFindUniqueArgs: FindUniqueImagesArgs,
    @Relations() relations: ImagesSelect,
  ): Promise<Images | void> {
    return this.imagesController.findOne({
      ...imagesFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [Images], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  imagesFindMany(
    @Args() imagesFindManyArgs: FindManyImagesArgs,
    @Relations() relations: ImagesSelect,
  ) {
    return this.imagesController.findMany({
      ...imagesFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => Images, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  imagesFindFirst(
    @Args()
    findFirstImagesArgs: FindFirstImagesArgs,
    @Relations() relations: ImagesSelect,
  ): Promise<Images | void> {
    return this.imagesController.findFirst({
      ...findFirstImagesArgs,
      select: relations.select,
    });
  }

  // @Mutation(() => Images, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async imagesUpdateOne(
  //   @Args() imagesUpdateOneArgs: UpdateOneImagesArgs,
  //   @Relations() relations: ImagesSelect,
  // ) {
  //   return this.imagesController.updateOne({
  //     ...replaceNullWithUndefined(imagesUpdateOneArgs),
  //     select: relations.select,
  //   });
  // }

  // @Mutation(() => Images, {
  //   nullable: true,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async imagesUpdateMany(@Args() updateManyImagesArgs: UpdateManyImagesArgs) {
  //   return this.imagesController.updateMany(updateManyImagesArgs);
  // }

  // @Mutation(() => Boolean, {
  //   nullable: false,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async imagesDelete(
  //   @Args() deleteOneImagesArgs: DeleteOneImagesArgs,
  //   @Relations() relations: ImagesSelect,
  // ) {
  //   return this.imagesController.delete({
  //     ...deleteOneImagesArgs,
  //     select: relations.select,
  //   });
  // }

  // @Mutation(() => Boolean, {
  //   nullable: false,
  //   description: 'Deskripsinya ada disini loh',
  // })
  // async imagesDeleteMany(@Args() deleteManyImagesArgs: DeleteManyImagesArgs) {
  //   return this.imagesController.deleteMany(deleteManyImagesArgs);
  // }

  @Query(() => AggregateImages, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  imagesAggregate(@Args() imagesAggregateArgs: ImagesAggregateArgs) {
    return this.imagesController.aggregate(imagesAggregateArgs);
  }

  @Query(() => Float, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  imagesCount(@Args() imagesCountAggregateInput: FindManyImagesArgs) {
    return this.imagesController.count(imagesCountAggregateInput);
  }
}
