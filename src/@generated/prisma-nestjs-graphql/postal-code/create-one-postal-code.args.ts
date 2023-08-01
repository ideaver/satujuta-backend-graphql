import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PostalCodeCreateInput } from './postal-code-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnePostalCodeArgs {

    @Field(() => PostalCodeCreateInput, {nullable:false})
    @Type(() => PostalCodeCreateInput)
    data!: PostalCodeCreateInput;
}
