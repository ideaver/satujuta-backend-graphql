import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CityUpdateManyMutationInput } from './city-update-many-mutation.input';
import { Type } from 'class-transformer';
import { CityWhereInput } from './city-where.input';

@ArgsType()
export class UpdateManyCityArgs {

    @Field(() => CityUpdateManyMutationInput, {nullable:false})
    @Type(() => CityUpdateManyMutationInput)
    data!: CityUpdateManyMutationInput;

    @Field(() => CityWhereInput, {nullable:true})
    @Type(() => CityWhereInput)
    where?: CityWhereInput;
}
