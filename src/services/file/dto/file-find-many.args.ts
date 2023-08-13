import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { Int } from '@nestjs/graphql';
import {
  FileWhereInput,
  FileOrderByWithRelationInput,
  FileWhereUniqueInput,
  FileScalarFieldEnum,
} from 'src/@generated';

@InputType()
export class FileFindManyArgs {
  // @Field(() => FileSelect, { nullable: true })
  select?: Prisma.FileSelect;

  @Field(() => FileWhereInput, {nullable:true})
  @Type(() => FileWhereInput)
  where?: InstanceType<typeof FileWhereInput>;
  @Field(() => [FileOrderByWithRelationInput], {nullable:true})
  orderBy?: Array<FileOrderByWithRelationInput>;
  // @Field(() => FileWhereUniqueInput, {nullable:true})
  // cursor?: Prisma.AtLeast<FileWhereUniqueInput, 'id'>;
  @Field(() => Int, {nullable:true})
  take?: number;
  @Field(() => Int, {nullable:true})
  skip?: number;
  @Field(() => [FileScalarFieldEnum], {nullable:true})
  distinct?: Array<keyof typeof FileScalarFieldEnum>;
}
