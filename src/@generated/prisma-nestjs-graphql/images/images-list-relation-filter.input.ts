import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImagesWhereInput } from './images-where.input';

@InputType()
export class ImagesListRelationFilter {

    @Field(() => ImagesWhereInput, {nullable:true})
    every?: ImagesWhereInput;

    @Field(() => ImagesWhereInput, {nullable:true})
    some?: ImagesWhereInput;

    @Field(() => ImagesWhereInput, {nullable:true})
    none?: ImagesWhereInput;
}
