import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { populateProvinceCityDistricSubdistric } from 'prisma/seed-functions/address.seed';
import { ProgramController } from '../program/program.controller';
import { encryptUserPassword } from 'src/utils/bcrypt.function';
import { Item } from 'src/@generated';
import { ItemController } from '../item/item.controller';
import { UserRole } from '@prisma/client';
import { faker } from '@faker-js/faker';
import { generateRandomReferralCode } from 'src/utils/generate-random.function';

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
    const subdistrictsPromise = this.prisma.subdistrict.findMany();
    const userFindManyPromise = this.prisma.user.findMany();
    const itemsPromise = this.itemController.findMany({});

    const [subdistricts, userFindMany, items] = await Promise.all([
      subdistrictsPromise,
      userFindManyPromise,
      itemsPromise,
    ]);

    if (subdistricts.length <= 0) {
      await populateProvinceCityDistricSubdistric();
    }

    const createAdminPromise =
      userFindMany.length <= 0 ? this.createAdmin() : Promise.resolve();
    const createSuperUserPromise =
      userFindMany.length <= 0 ? this.createSuperUser() : Promise.resolve();
    const createItemPromise =
      items.length <= 0 ? this.createItem() : Promise.resolve();

    await Promise.all([
      createAdminPromise,
      createSuperUserPromise,
      createItemPromise,
    ]);
  }

  private async createItem() {
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

  async createSuperUser() {
    await this.prisma.user
      .create({
        data: {
          firstName: 'Super',
          lastName: 'User',
          email: 'superuser@satujuta.com',
          password: await encryptUserPassword('123456'),
          theme: 'LIGHT',
          userRole: 'SUPERUSER',
          userType: 'OTHER',
          whatsappNumber: '6289683743880',
          avatarUrl: faker.image.avatar(),
          referralCode: generateRandomReferralCode(),
          address: {
            create: {
              name: 'www.alvamind.com',
              subdistrict: {
                connect: {
                  id: 1,
                },
              },
            },
          },
        },
      })
      .then(() => {
        this.logger.log('Super User has been created');
      });
  }

  async createAdmin() {
    await this.prisma.user
      .create({
        data: {
          firstName: 'Admin',
          lastName: 'User',
          email: 'admin@satujuta.com',
          password: await encryptUserPassword('123456'),
          theme: 'LIGHT',
          userRole: 'ADMIN',
          userType: 'OTHER',
          whatsappNumber: '62839683743880',
          avatarUrl: faker.image.avatar(),
          referralCode: generateRandomReferralCode(),
          address: {
            create: {
              name: 'www.alvamind.com',
              subdistrict: {
                connect: {
                  id: 1,
                },
              },
            },
          },
        },
      })
      .then(() => {
        this.logger.log('Admin User has been created');
      });
  }
}
