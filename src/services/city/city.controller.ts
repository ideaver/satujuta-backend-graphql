import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CityService } from './city.service';
import {
  CityFindManyUser,
  CityFindManyUserArgs,
} from './dto/city-find-many-user.args';
import { City } from 'src/@generated';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';

@Injectable()
export class CityController {
  constructor(private readonly cityService: CityService) {}

  async createOne(cityCreateArgs: Prisma.CityCreateArgs) {
    return await this.cityService.createOne(cityCreateArgs);
  }

  async createMany(cityCreateManyArgs: Prisma.CityCreateManyArgs) {
    return await this.cityService.createMany(cityCreateManyArgs);
  }

  async findOne(cityFindUniqueArgs: Prisma.CityFindUniqueArgs) {
    return await this.cityService.findOne(cityFindUniqueArgs);
  }

  async findMany(cityFindManyArgs: Prisma.CityFindManyArgs): Promise<City[]> {
    return await this.cityService.findMany(
      replaceNullWithUndefined(cityFindManyArgs),
    );
  }

  async findFirst(cityFindFirstArgs: Prisma.CityFindFirstArgs) {
    return await this.cityService.findFirst(cityFindFirstArgs);
  }

  async updateOne(cityUpdateOneArgs: Prisma.CityUpdateArgs) {
    return await this.cityService.updateOne(cityUpdateOneArgs);
  }

  async updateMany(cityUpdateManyArgs: Prisma.CityUpdateManyArgs) {
    return await this.cityService.updateMany(cityUpdateManyArgs);
  }

  async delete(cityDeleteArgs: Prisma.CityDeleteArgs) {
    return await this.cityService.delete(cityDeleteArgs);
  }

  async deleteMany(cityDeleteManyArgs: Prisma.CityDeleteManyArgs) {
    return await this.cityService.deleteMany(cityDeleteManyArgs);
  }

  async aggregate(cityAggregateArgs: Prisma.CityAggregateArgs) {
    return await this.cityService.aggregate(cityAggregateArgs);
  }

  async count(cityCountArgs: Prisma.CityCountArgs) {
    return await this.cityService.count(cityCountArgs);
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
