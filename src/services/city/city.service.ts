import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { City } from 'src/@generated';

@Injectable()
export class CityService {
  constructor(private prisma: PrismaService) {}
  // create(createCityInput: CreateCityInput) {
  //   return 'This action adds a new city';
  // }

  async findMany(cityNameSearch: string): Promise<City[]> {
    return await this.prisma.city.findMany({
      where: { name: { contains: cityNameSearch } },
    });
  }
}
