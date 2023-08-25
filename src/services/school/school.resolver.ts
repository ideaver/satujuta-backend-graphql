import { Resolver, Query, Mutation, Args, Info, Int } from '@nestjs/graphql';
import { SchoolService } from './school.service';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import { School } from 'src/@generated';
import { SchoolCreateArgs } from './dto/school-create-one.args';
import { SchoolFindManyArgs } from './dto/school-find-many.args';
import { SchoolFindUniqueArgs } from './dto/school-find-one.args';
import { SchoolUpdateOneArgs } from './dto/school-update-one.args';

interface SchoolSelect {
  select: Prisma.SchoolSelect;
}

@Resolver(() => School)
export class SchoolResolver {
  constructor(private readonly schoolService: SchoolService) {}

  @Mutation(() => School, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async schoolCreateOne(
    @Args('schoolCreateArgs') schoolCreateArgs: SchoolCreateArgs,
    @Relations() relations: SchoolSelect,
  ): Promise<School | void> {
    schoolCreateArgs.select = relations.select;
    return await this.schoolService.createOne(schoolCreateArgs);
  }

  @Query(() => [School], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  schoolFindMany(
    @Args('schoolFindManyArgs') schoolFindManyArgs: SchoolFindManyArgs,
    @Relations() relations: SchoolSelect,
  ) {
    //Auto implement prisma select from graphql query info
    schoolFindManyArgs.select = relations.select;
    return this.schoolService.findMany(schoolFindManyArgs);
  }

  @Query(() => School, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  schoolFindOne(
    @Args('schoolFindUniqueArgs')
    schoolFindUniqueArgs: SchoolFindUniqueArgs,
    @Relations() relations: SchoolSelect,
  ) {
    //Auto implement prisma select from graphql query info
    schoolFindUniqueArgs.select = relations.select;
    return this.schoolService.findOne(schoolFindUniqueArgs);
  }

  @Mutation(() => School, { description: 'Deskripsinya ada disini loh' })
  schoolUpdateOne(
    @Args('schoolUpdateOneArgs') schoolUpdateOneArgs: SchoolUpdateOneArgs,
    @Relations() relations: SchoolSelect,
  ) {
    schoolUpdateOneArgs.select = relations.select;
    return this.schoolService.update(schoolUpdateOneArgs);
  }

  @Mutation(() => Boolean, {
    nullable: true,
    description: 'Datanya benar2 terhapus dari db',
  })
  schoolRemove(@Args('schoolId') schoolId: number) {
    return this.schoolService.remove(schoolId);
  }

  @Query(() => Int, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  schoolCount(
    @Args('schoolFindManyArgs', { nullable: true })
    schoolFindManyArgs: SchoolFindManyArgs,
  ) {
    return this.schoolService.count(schoolFindManyArgs);
  }
}
