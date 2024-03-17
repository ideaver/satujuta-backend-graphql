// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateSchool,
  CreateManySchoolArgs,
  CreateOneSchoolArgs,
  DeleteManySchoolArgs,
  DeleteOneSchoolArgs,
  FindFirstSchoolArgs,
  FindManySchoolArgs,
  FindUniqueSchoolArgs,
  School,
  SchoolAggregateArgs,
  UpdateManySchoolArgs,
  UpdateOneSchoolArgs,
} from 'src/@generated';
import { SchoolController } from './school.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';
import { Top10SchoolWithStudents } from './dtos/top-10-school-with-students.output';

interface SchoolSelect {
  select: Prisma.SchoolSelect;
}

@Resolver(() => School)
export class SchoolResolver {
  constructor(private readonly schoolController: SchoolController) {}

  @Mutation(() => School, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async schoolCreateOne(
    @Args()
    schoolCreateArgs: CreateOneSchoolArgs,
    @Relations() relations: SchoolSelect,
  ): Promise<School | void> {
    return await this.schoolController.createOne({
      ...schoolCreateArgs,
      select: relations.select,
    });
  }

  @Mutation(() => BatchPayload, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async schoolCreateMany(
    @Args()
    createManySchoolArgs: CreateManySchoolArgs,
  ) {
    return await this.schoolController.createMany(createManySchoolArgs);
  }

  @Query(() => School, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  schoolFindOne(
    @Args()
    schoolFindUniqueArgs: FindUniqueSchoolArgs,
    @Relations() relations: SchoolSelect,
  ): Promise<School | void> {
    return this.schoolController.findOne({
      ...schoolFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [School], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  schoolFindMany(
    @Args() schoolFindManyArgs: FindManySchoolArgs,
    @Relations() relations: SchoolSelect,
  ) {
    return this.schoolController.findMany({
      ...schoolFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => School, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  schoolFindFirst(
    @Args()
    findFirstSchoolArgs: FindFirstSchoolArgs,
    @Relations() relations: SchoolSelect,
  ): Promise<School | void> {
    return this.schoolController.findFirst({
      ...findFirstSchoolArgs,
      select: relations.select,
    });
  }

  @Mutation(() => School, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async schoolUpdateOne(
    @Args() schoolUpdateOneArgs: UpdateOneSchoolArgs,
    @Relations() relations: SchoolSelect,
  ) {
    return this.schoolController.updateOne({
      ...replaceNullWithUndefined(schoolUpdateOneArgs),
      select: relations.select,
    });
  }

  @Mutation(() => School, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async schoolUpdateMany(@Args() updateManySchoolArgs: UpdateManySchoolArgs) {
    return this.schoolController.updateMany(updateManySchoolArgs);
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async schoolDelete(
    @Args() deleteOneSchoolArgs: DeleteOneSchoolArgs,
    @Relations() relations: SchoolSelect,
  ) {
    return this.schoolController.delete({
      ...deleteOneSchoolArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async schoolDeleteMany(@Args() deleteManySchoolArgs: DeleteManySchoolArgs) {
    return this.schoolController.deleteMany(deleteManySchoolArgs);
  }

  @Query(() => AggregateSchool, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  schoolAggregate(@Args() schoolAggregateArgs: SchoolAggregateArgs) {
    return this.schoolController.aggregate(schoolAggregateArgs);
  }

  @Query(() => Float, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  schoolCount(@Args() schoolCountAggregateInput: FindManySchoolArgs) {
    return this.schoolController.count(schoolCountAggregateInput);
  }

  @Query(() => [Top10SchoolWithStudents], {
    nullable: false,
    description: 'yang student berbayar saja yang dihitung',
  })
  countTop10SchoolsWithMostStudents() {
    return this.schoolController.countTop10SchoolsWithMostStudents();
  }

  @Query(() => [Top10SchoolWithStudents], {
    nullable: false,
    description: 'yang student berbayar saja yang dihitung',
  })
  countTop10SchoolsWithLeastStudents() {
    return this.schoolController.countTop10SchoolsWithLeastStudents();
  }
}
