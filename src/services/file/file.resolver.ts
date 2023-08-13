import { Resolver, Query, Mutation, Args, Info } from '@nestjs/graphql';
import { FileService } from './file.service';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import { File } from 'src/@generated';
import { FileCreateArgs } from './dto/file-create-one.args';
import { FileFindManyArgs } from './dto/file-find-many.args';
import { FileFindUniqueArgs } from './dto/file-find-one.args';
import { FileUpdateOneArgs } from './dto/file-update-one.args';

interface FileSelect {
  select: Prisma.FileSelect;
}

@Resolver(() => File)
export class FileResolver {
  constructor(private readonly fileService: FileService) {}

  @Mutation(() => File, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async fileCreateOne(
    @Args('fileCreateArgs') fileCreateArgs: FileCreateArgs,
    @Relations() relations: FileSelect
  ): Promise<File | void> {
    fileCreateArgs.select = relations.select;
    return await this.fileService.createOne(fileCreateArgs);
  }

  @Query(() => [File], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  fileFindMany(
    @Args('fileFindManyArgs') fileFindManyArgs: FileFindManyArgs,
    @Relations() relations: FileSelect,
  ) {
    //Auto implement prisma select from graphql query info
    fileFindManyArgs.select = relations.select;
    return this.fileService.findMany(fileFindManyArgs);
  }

  @Query(() => File, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  fileFindOne(
    @Args('fileFindUniqueArgs')
    fileFindUniqueArgs: FileFindUniqueArgs,
    @Relations() relations: FileSelect,
  ) {
    //Auto implement prisma select from graphql query info
    fileFindUniqueArgs.select = relations.select;
    return this.fileService.findOne(fileFindUniqueArgs);
  }

  @Mutation(() => File, { description: 'Deskripsinya ada disini loh' })
  fileUpdateOne(
    @Args('fileUpdateOneArgs') fileUpdateOneArgs: FileUpdateOneArgs,
    @Relations() relations: FileSelect,
  ) {
    fileUpdateOneArgs.select = relations.select;
    return this.fileService.update(fileUpdateOneArgs);
  }

  @Mutation(() => Boolean, {
    nullable: true,
    description:
      'Datanya benar2 terhapus dari db',
  })
  fileRemove(@Args('fileId') fileId: number) {
    return this.fileService.remove(fileId);
  }
}
