import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PostalCodeCreateManyInput } from './postal-code-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyPostalCodeArgs {

    @Field(() => [PostalCodeCreateManyInput], {nullable:false})
    @Type(() => PostalCodeCreateManyInput)
    data!: Array<PostalCodeCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
