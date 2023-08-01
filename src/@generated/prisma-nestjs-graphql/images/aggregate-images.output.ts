import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ImagesCountAggregate } from './images-count-aggregate.output';
import { ImagesAvgAggregate } from './images-avg-aggregate.output';
import { ImagesSumAggregate } from './images-sum-aggregate.output';
import { ImagesMinAggregate } from './images-min-aggregate.output';
import { ImagesMaxAggregate } from './images-max-aggregate.output';

@ObjectType()
export class AggregateImages {

    @Field(() => ImagesCountAggregate, {nullable:true})
    _count?: ImagesCountAggregate;

    @Field(() => ImagesAvgAggregate, {nullable:true})
    _avg?: ImagesAvgAggregate;

    @Field(() => ImagesSumAggregate, {nullable:true})
    _sum?: ImagesSumAggregate;

    @Field(() => ImagesMinAggregate, {nullable:true})
    _min?: ImagesMinAggregate;

    @Field(() => ImagesMaxAggregate, {nullable:true})
    _max?: ImagesMaxAggregate;
}
