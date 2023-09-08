// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateFile,
  CreateManyFileArgs,
  CreateOneFileArgs,
  DeleteManyFileArgs,
  DeleteOneFileArgs,
  FindFirstFileArgs,
  FindManyFileArgs,
  FindUniqueFileArgs,
  File,
  FileAggregateArgs,
  UpdateManyFileArgs,
  UpdateOneFileArgs,
} from 'src/@generated';
import { FileController } from './file.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

interface FileSelect {
  select: Prisma.FileSelect;
}

@Resolver(() => File)
export class FileResolver {
  constructor(private readonly fileController: FileController) {}

  @Mutation(() => File, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async fileCreateOne(
    @Args()
    fileCreateArgs: CreateOneFileArgs,
    @Relations() relations: FileSelect,
  ): Promise<File | void> {
    return await this.fileController.createOne({
      ...fileCreateArgs,
      select: relations.select,
    });
  }

  @Mutation(() => BatchPayload, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async fileCreateMany(
    @Args()
    createManyFileArgs: CreateManyFileArgs,
  ) {
    return await this.fileController.createMany(createManyFileArgs);
  }

  @Query(() => File, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  fileFindOne(
    @Args()
    fileFindUniqueArgs: FindUniqueFileArgs,
    @Relations() relations: FileSelect,
  ): Promise<File | void> {
    return this.fileController.findOne({
      ...fileFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [File], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  fileFindMany(
    @Args() fileFindManyArgs: FindManyFileArgs,
    @Relations() relations: FileSelect,
  ) {
    return this.fileController.findMany({
      ...fileFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => File, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  fileFindFirst(
    @Args()
    findFirstFileArgs: FindFirstFileArgs,
    @Relations() relations: FileSelect,
  ): Promise<File | void> {
    return this.fileController.findFirst({
      ...findFirstFileArgs,
      select: relations.select,
    });
  }

  @Mutation(() => File, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async fileUpdateOne(
    @Args() fileUpdateOneArgs: UpdateOneFileArgs,
    @Relations() relations: FileSelect,
  ) {
    return this.fileController.updateOne({
      ...replaceNullWithUndefined(fileUpdateOneArgs),
      select: relations.select,
    });
  }

  @Mutation(() => File, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async fileUpdateMany(@Args() updateManyFileArgs: UpdateManyFileArgs) {
    return this.fileController.updateMany(updateManyFileArgs);
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async fileDelete(
    @Args() deleteOneFileArgs: DeleteOneFileArgs,
    @Relations() relations: FileSelect,
  ) {
    return this.fileController.delete({
      ...deleteOneFileArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async fileDeleteMany(@Args() deleteManyFileArgs: DeleteManyFileArgs) {
    return this.fileController.deleteMany(deleteManyFileArgs);
  }

  @Query(() => AggregateFile, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  fileAggregate(@Args() fileAggregateArgs: FileAggregateArgs) {
    return this.fileController.aggregate(fileAggregateArgs);
  }

  @Query(() => Float, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  fileCount(@Args() fileCountAggregateInput: FindManyFileArgs) {
    return this.fileController.count(fileCountAggregateInput);
  }
}
