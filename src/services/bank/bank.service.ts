import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { Bank } from 'src/@generated';

@Injectable()
export class BankService {
  constructor(private prisma: PrismaService) {}
  // create(createCityInput: CreateCityInput) {
  //   return 'This action adds a new city';
  // }

  async findMany(): Promise<Bank[]> {
    return await this.prisma.bank.findMany();
  }
}
