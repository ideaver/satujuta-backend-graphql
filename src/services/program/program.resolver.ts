import { Resolver, Query, Mutation, Args, Info } from '@nestjs/graphql';
import { ProgramService } from './program.service';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import { Program } from 'src/@generated';
import { ProgramCreateArgs } from './dto/program-create-one.args';
import { ProgramFindManyArgs } from './dto/program-find-many.args';
import { ProgramFindUniqueArgs } from './dto/program-find-one.args';
import { ProgramUpdateOneArgs } from './dto/program-update-one.args';

interface ProgramSelect {
  select: Prisma.ProgramSelect;
}

@Resolver(() => Program)
export class ProgramResolver {
  constructor(private readonly programService: ProgramService) {}

  @Mutation(() => Program, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async programCreateOne(
    @Args('programCreateArgs') programCreateArgs: ProgramCreateArgs,
    @Relations() relations: ProgramSelect
  ): Promise<Program | void> {
    programCreateArgs.select = relations.select;
    return await this.programService.createOne(programCreateArgs);
  }

  @Query(() => [Program], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  programFindMany(
    @Args('programFindManyArgs') programFindManyArgs: ProgramFindManyArgs,
    @Relations() relations: ProgramSelect,
  ) {
    //Auto implement prisma select from graphql query info
    programFindManyArgs.select = relations.select;
    return this.programService.findMany(programFindManyArgs);
  }

  @Query(() => Program, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  programFindOne(
    @Args('programFindUniqueArgs')
    programFindUniqueArgs: ProgramFindUniqueArgs,
    @Relations() relations: ProgramSelect,
  ) {
    //Auto implement prisma select from graphql query info
    programFindUniqueArgs.select = relations.select;
    return this.programService.findOne(programFindUniqueArgs);
  }

  @Mutation(() => Program, { description: 'Deskripsinya ada disini loh' })
  programUpdateOne(
    @Args('programUpdateOneArgs') programUpdateOneArgs: ProgramUpdateOneArgs,
    @Relations() relations: ProgramSelect,
  ) {
    programUpdateOneArgs.select = relations.select;
    return this.programService.update(programUpdateOneArgs);
  }

  @Mutation(() => Boolean, {
    nullable: true,
    description:
      'Datanya benar2 terhapus dari db',
  })
  programRemove(@Args('programId') programId: number) {
    return this.programService.remove(programId);
  }
}
