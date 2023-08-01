import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ImagesMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    fileType?: true;

    @Field(() => Boolean, {nullable:true})
    filesize?: true;

    @Field(() => Boolean, {nullable:true})
    url?: true;

    @Field(() => Boolean, {nullable:true})
    hotelImageId?: true;

    @Field(() => Boolean, {nullable:true})
    programImageId?: true;

    @Field(() => Boolean, {nullable:true})
    rewardImageId?: true;

    @Field(() => Boolean, {nullable:true})
    projectImageId?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
}
