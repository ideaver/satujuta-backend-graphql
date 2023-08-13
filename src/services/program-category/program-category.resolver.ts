import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import { ProgramCategory } from 'src/@generated';
import { ProgramCategoryService } from './program-category.service';
import { ProgramCategoryCreateArgs } from './dto/program-category-create-one.args';
import { ProgramCategoryFindManyArgs } from './dto/program-category-find-many.args';
import { ProgramCategoryFindUniqueArgs } from './dto/program-category-find-one.args';
import { ProgramCategoryUpdateOneArgs } from './dto/program-category-update-one.args';
interface ProgramCategorySelect {
  select: Prisma.ProgramCategorySelect;
}

@Resolver(() => ProgramCategory)
export class ProgramCategoryResolver {
  constructor(private readonly programCategoryService: ProgramCategoryService) {}

  @Mutation(() => ProgramCategory, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async programCategoryCreateOne(
    @Args('programCategoryCreateArgs') programCategoryCreateArgs: ProgramCategoryCreateArgs,
    @Relations() relations: ProgramCategorySelect
  ): Promise<ProgramCategory | void> {
    programCategoryCreateArgs.select = relations.select;
    return await this.programCategoryService.createOne(programCategoryCreateArgs);
  }

  @Query(() => [ProgramCategory], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  programCategoryFindMany(
    @Args('programCategoryFindManyArgs') programCategoryFindManyArgs: ProgramCategoryFindManyArgs,
    @Relations() relations: ProgramCategorySelect,
  ) {
    //Auto implement prisma select from graphql query info
    programCategoryFindManyArgs.select = relations.select;
    return this.programCategoryService.findMany(programCategoryFindManyArgs);
  }

  @Query(() => ProgramCategory, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  programCategoryFindOne(
    @Args('programCategoryFindUniqueArgs')
    programCategoryFindUniqueArgs: ProgramCategoryFindUniqueArgs,
    @Relations() relations: ProgramCategorySelect,
  ) {
    //Auto implement prisma select from graphql query info
    programCategoryFindUniqueArgs.select = relations.select;
    return this.programCategoryService.findOne(programCategoryFindUniqueArgs);
  }

  @Mutation(() => ProgramCategory, { description: 'Deskripsinya ada disini loh' })
  programCategoryUpdateOne(
    @Args('programCategoryUpdateOneArgs') programCategoryUpdateOneArgs: ProgramCategoryUpdateOneArgs,
    @Relations() relations: ProgramCategorySelect,
  ) {
    programCategoryUpdateOneArgs.select = relations.select;
    return this.programCategoryService.update(programCategoryUpdateOneArgs);
  }

  @Mutation(() => Boolean, {
    nullable: true,
    description:
      'Datanya benar2 terhapus dari db',
  })
  programCategoryRemove(@Args('programCategoryId') programCategoryId: number) {
    return this.programCategoryService.remove(programCategoryId);
  }
}
