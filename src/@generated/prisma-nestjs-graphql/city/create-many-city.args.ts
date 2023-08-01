import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CityCreateManyInput } from './city-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyCityArgs {

    @Field(() => [CityCreateManyInput], {nullable:false})
    @Type(() => CityCreateManyInput)
    data!: Array<CityCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
