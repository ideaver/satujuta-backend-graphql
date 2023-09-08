import { CityService } from './city.service';
import { City } from 'src/@generated';
import { CityCreateArgs } from './dto/city-create-one.args';
import { CityFindManyArgs } from './dto/city-find-many.args';
import { CityFindUniqueArgs } from './dto/city-find-one.args';

import { Injectable } from '@nestjs/common';
import {
  CityFindManyUser,
  CityFindManyUserArgs,
} from './dto/city-find-many-user.args';

@Injectable()
export class CityController {
  constructor(private readonly cityService: CityService) {}

  async createOne(cityCreateArgs: CityCreateArgs): Promise<City | void> {
    return await this.cityService.createOne(cityCreateArgs);
  }

  findMany(cityFindManyArgs: CityFindManyArgs): Promise<City[]> {
    //handle graphql null value
    if (cityFindManyArgs.where?.OR?.[0]?.id?.equals === null) {
      cityFindManyArgs.where.OR[0].id = undefined;
    }

    //handle graphql null value
    if (cityFindManyArgs.where?.OR?.[1]?.name?.contains === null) {
      cityFindManyArgs.where.OR[1].name = undefined;
    }

    //handle graphql null value
    if (cityFindManyArgs.where?.OR?.[2]?.provinceId?.equals === null) {
      cityFindManyArgs.where.OR[2].provinceId = undefined;
    }

    return this.cityService.findMany(cityFindManyArgs);
  }

  findOne(cityFindUniqueArgs: CityFindUniqueArgs): Promise<City | void> {
    return this.cityService.findOne(cityFindUniqueArgs);
  }

  // async updateOne(cityUpdateOneArgs: CityUpdateOneArgs) {
  //   const { name, description, images } = cityUpdateOneArgs.data;

  //   if (name?.set === null) {
  //     cityUpdateOneArgs.data.name = undefined;
  //   }

  //   if (description?.set === null) {
  //     cityUpdateOneArgs.data.description = undefined;
  //   }

  //   if (images.delete?.[0]?.url.equals === null) {
  //     cityUpdateOneArgs.data.images.delete = undefined;
  //   }

  //   if (images.deleteMany?.[0]?.url.equals === null) {
  //     cityUpdateOneArgs.data.images.deleteMany = undefined;
  //   }

  //   if (images.createMany?.data?.[0]?.url === null) {
  //     cityUpdateOneArgs.data.images.createMany = undefined;
  //   }
  //   //check for new claim and check if user has enough point
  //   await this.isNewCityClaimEventAndIsUserPointEnough(cityUpdateOneArgs);
  //   return this.cityService.update(cityUpdateOneArgs);
  // }

  remove(cityId: number) {
    return this.cityService.remove(cityId);
  }
  async getTopCitiesWithMostUsers({
    userRole,
    status,
  }: CityFindManyUserArgs): Promise<CityFindManyUser[]> {
    const topCities = await this.findMany({
      where: {
        districts: {
          some: {
            subdistricts: {
              some: {
                address: {
                  some: {
                    user: {
                      is: {
                        userRole: { equals: userRole },
                        status: { equals: status },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      select: {
        id: true,
        name: true,
        districts: {
          select: {
            subdistricts: {
              select: {
                address: {
                  select: {
                    user: {
                      select: {
                        userRole: true,
                        status: true,
                      },
                      // where: {
                      //   userRole: UserRole.STUDENT,
                      //   status: { equals: 'ACTIVE' },
                      // },
                    },
                  },
                },
              },
            },
          },
        },
      },
    });

    const citiesWithUserCounts = topCities
      .map((city) => {
        const userCount = city.districts.reduce((acc, district) => {
          return (
            acc +
            district.subdistricts.reduce((subAcc, subdistrict) => {
              const userAddresses = subdistrict.address.filter(
                (addr) =>
                  addr.user !== null &&
                  addr.user.userRole === userRole &&
                  addr.user.status === status,
              );
              return subAcc + userAddresses.length;
            }, 0)
          );
        }, 0);

        return {
          cityId: city.id,
          cityName: city.name,
          userCount: userCount,
        };
      })
      .sort((a, b) => b.userCount - a.userCount) // Sort by student count in descending order
      .slice(0, 10); // Take the top 10 cities

    return citiesWithUserCounts;
  }
}
