import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CityUpdateInput } from './city-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { CityWhereUniqueInput } from './city-where-unique.input';

@ArgsType()
export class UpdateOneCityArgs {

    @Field(() => CityUpdateInput, {nullable:false})
    @Type(() => CityUpdateInput)
    data!: CityUpdateInput;

    @Field(() => CityWhereUniqueInput, {nullable:false})
    @Type(() => CityWhereUniqueInput)
    where!: Prisma.AtLeast<CityWhereUniqueInput, 'id'>;
}
