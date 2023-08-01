import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ImagesWhereInput } from './images-where.input';
import { Type } from 'class-transformer';
import { ImagesOrderByWithRelationInput } from './images-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ImagesWhereUniqueInput } from './images-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ImagesScalarFieldEnum } from './images-scalar-field.enum';

@ArgsType()
export class FindFirstImagesOrThrowArgs {

    @Field(() => ImagesWhereInput, {nullable:true})
    @Type(() => ImagesWhereInput)
    where?: ImagesWhereInput;

    @Field(() => [ImagesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ImagesOrderByWithRelationInput>;

    @Field(() => ImagesWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ImagesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ImagesScalarFieldEnum>;
}
