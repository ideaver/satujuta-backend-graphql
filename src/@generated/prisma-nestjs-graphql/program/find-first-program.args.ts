import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProgramWhereInput } from './program-where.input';
import { Type } from 'class-transformer';
import { ProgramOrderByWithRelationInput } from './program-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ProgramWhereUniqueInput } from './program-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ProgramScalarFieldEnum } from './program-scalar-field.enum';

@ArgsType()
export class FindFirstProgramArgs {

    @Field(() => ProgramWhereInput, {nullable:true})
    @Type(() => ProgramWhereInput)
    where?: ProgramWhereInput;

    @Field(() => [ProgramOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProgramOrderByWithRelationInput>;

    @Field(() => ProgramWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ProgramWhereUniqueInput, 'id' | 'createdById'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ProgramScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ProgramScalarFieldEnum>;
}
