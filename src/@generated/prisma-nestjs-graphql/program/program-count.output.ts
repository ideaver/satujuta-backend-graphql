import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ProgramCount {

    @Field(() => Int, {nullable:false})
    Images?: number;

    @Field(() => Int, {nullable:false})
    participant?: number;
}
