import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DistrictCreateManyInput } from './district-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyDistrictArgs {

    @Field(() => [DistrictCreateManyInput], {nullable:false})
    @Type(() => DistrictCreateManyInput)
    data!: Array<DistrictCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
