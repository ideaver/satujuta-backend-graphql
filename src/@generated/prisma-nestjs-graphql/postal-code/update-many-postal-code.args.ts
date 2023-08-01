import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PostalCodeUpdateManyMutationInput } from './postal-code-update-many-mutation.input';
import { Type } from 'class-transformer';
import { PostalCodeWhereInput } from './postal-code-where.input';

@ArgsType()
export class UpdateManyPostalCodeArgs {

    @Field(() => PostalCodeUpdateManyMutationInput, {nullable:false})
    @Type(() => PostalCodeUpdateManyMutationInput)
    data!: PostalCodeUpdateManyMutationInput;

    @Field(() => PostalCodeWhereInput, {nullable:true})
    @Type(() => PostalCodeWhereInput)
    where?: PostalCodeWhereInput;
}
