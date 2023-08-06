import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class HotelSelect {
  @Field(() => Boolean, { nullable: true })
  id?: boolean;
  @Field(() => Boolean, { nullable: true })
  name?: boolean;
  @Field(() => Boolean, { nullable: true })
  addressId?: boolean;
  @Field(() => Boolean, { nullable: true })
  description?: boolean;
  @Field(() => Boolean, { nullable: true })
  rating?: boolean;
  @Field(() => Boolean, { nullable: true })
  startDate?: boolean;
  @Field(() => Boolean, { nullable: true })
  quota?: boolean;
  @Field(() => Boolean, { nullable: true })
  createdById?: boolean;
  @Field(() => Boolean, { nullable: true })
  createdAt?: boolean;
  @Field(() => Boolean, { nullable: true })
  updatedAt?: boolean;
  @Field(() => Boolean, { nullable: true })
  address?: boolean;
  @Field(() => Boolean, { nullable: true })
  images?: boolean;
  @Field(() => Boolean, { nullable: true })
  checkIns?: boolean;
  @Field(() => Boolean, { nullable: true })
  createdBy?: boolean;
  @Field(() => Boolean, { nullable: true })
  _count?: boolean;
}

// @InputType()
// export class HotelInclude {
//   @Field(() => Boolean, { nullable: true })
//   address?: boolean
//   @Field(() => Boolean, { nullable: true })
//   images?: boolean
//   @Field(() => Boolean, { nullable: true })
//   checkIns?: boolean
//   @Field(() => Boolean, { nullable: true })
//   createdBy?: boolean
//   @Field(() => Boolean, { nullable: true })
//   _count?: boolean
// }
