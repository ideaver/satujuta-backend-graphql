import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { HotelService } from './hotel.service';
import { HotelCreateArgs } from './dto/hotel-create-one.args';
import { HotelFindManyArgs } from './dto/hotel-find-many.args';
import { Hotel } from 'src/@generated';

@Resolver(() => Hotel)
export class HotelResolver {
  constructor(private readonly hotelService: HotelService) {}

  @Mutation(() => Hotel)
  hotelCreate(@Args('hotelCreateArgs') hotelCreateArgs: HotelCreateArgs) {
    return this.hotelService.createOne(hotelCreateArgs);
  }

  @Query(() => [Hotel], { nullable: true })
  hotelFindMany(
    @Args('hotelFindManyArgs') hotelFindManyArgs: HotelFindManyArgs,
  ) {
    return this.hotelService.findMany(hotelFindManyArgs);
  }

  @Query(() => Hotel, { name: 'hotel' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.hotelService.findOne(id);
  }

  // @Mutation(() => Hotel)
  // updateHotel(@Args('updateHotelInput') updateHotelInput: UpdateHotelInput) {
  //   return this.hotelService.update(updateHotelInput.id, updateHotelInput);
  // }

  @Mutation(() => Hotel)
  removeHotel(@Args('id', { type: () => Int }) id: number) {
    return this.hotelService.remove(id);
  }
}
