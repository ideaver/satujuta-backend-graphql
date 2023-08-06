import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { PostalCode } from 'src/@generated';

@Injectable()
export class PostalCodeService {
  constructor(private prisma: PrismaService) {}
  // create(createCityInput: CreateCityInput) {
  //   return 'This action adds a new city';
  // }

  async findMany(): Promise<PostalCode[]> {
    return await this.prisma.postalCode.findMany();
  }
}
