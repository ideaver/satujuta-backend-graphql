import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { District } from 'src/@generated';

@Injectable()
export class DistrictService {
  constructor(private prisma: PrismaService) {}
  // create(createCityInput: CreateCityInput) {
  //   return 'This action adds a new city';
  // }

  async findMany(districtNameSearch: string): Promise<District[]> {
    return await this.prisma.district.findMany({
      where: { name: { contains: districtNameSearch } },
    });
  }
}
