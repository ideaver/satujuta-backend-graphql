import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { populateProvinceCityDistricSubdistric } from 'prisma/seed-functions/address.seed';
import { ProgramController } from '../program/program.controller';
import { encryptUserPassword } from 'src/utils/bcrypt.function';
import { Item } from 'src/@generated';
import { ItemController } from '../item/item.controller';
import { UserRole } from '@prisma/client';

// initialization.service.ts
@Injectable()
export class InitializationService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly programController: ProgramController,
    private readonly itemController: ItemController,
  ) {}

  private readonly logger = new Logger(InitializationService.name);

  async initialize() {
    const subdistricts = await this.prisma.subdistrict.findMany();

    if (subdistricts.length <= 0) {
      await populateProvinceCityDistricSubdistric();
    }

    const items: Item[] | void = await this.itemController.findMany({});

    if (items.length <= 0) {
      await this.prisma.item
        .createMany({
          data: [
            {
              name: 'Paket PREMIUM SatuJuta Membership',
              description: 'Berlisensi PT. SatuJuta Kampung Inggris',
              price: 1000000,
              cost: 300000,
              userRole: UserRole.MEMBER,
            },
            {
              name: 'Registrasi Siswa',
              description: '',
              price: 1000000,
              cost: 300000,
              userRole: UserRole.STUDENT,
            },
          ],
        })
        .then(() => {
          this.logger.log('Item data has been created');
        });
    }
  }
}
