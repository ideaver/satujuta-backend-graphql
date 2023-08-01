import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CityCreateInput } from './city-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneCityArgs {

    @Field(() => CityCreateInput, {nullable:false})
    @Type(() => CityCreateInput)
    data!: CityCreateInput;
}
