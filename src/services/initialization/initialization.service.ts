import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { populateProvinceCityDistricSubdistric } from 'prisma/seed-functions/address.seed';
import { ProgramController } from '../program/program.controller';
import { encryptUserPassword } from 'src/utils/bcrypt.function';
import { Item } from 'src/@generated';
import { ItemController } from '../item/item.controller';
import { Prisma, UserRole } from '@prisma/client';
import { faker } from '@faker-js/faker';
import { generateRandomReferralCode } from 'src/utils/generate-random.function';
import { BankController } from '../bank/bank.controller';
import { PaymentGatewayService } from '../payment-gateway/payment-gateway.service';
import { RewardController } from '../reward/reward.controller';

// initialization.service.ts
@Injectable()
export class InitializationService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly programController: ProgramController,
    private readonly itemController: ItemController,
    private readonly bankController: BankController,
    private readonly paymentGatewayService: PaymentGatewayService,
    private readonly rewardController: RewardController,
  ) {}

  private readonly logger = new Logger(InitializationService.name);

  async initialize() {
    const subdistrictsPromise = this.prisma.subdistrict.findMany({ take: 1 });
    const userFindManyPromise = this.prisma.user.findMany({ take: 1 });
    const itemsPromise = this.itemController.findMany({ take: 1 });
    const bankPromise = this.bankController.findMany({ take: 1 });
    const rewardPromise = this.rewardController.findMany({ take: 1 });

    const [subdistricts, userFindMany, items, banks, rewards] =
      await Promise.all([
        subdistrictsPromise,
        userFindManyPromise,
        itemsPromise,
        bankPromise,
        rewardPromise,
      ]);

    if (banks.length <= 0) {
      const flipBanks = await this.paymentGatewayService.getBankInfo();
      const bankCreateManyInput: Prisma.BankCreateManyInput[] = [];

      for (const bank of flipBanks) {
        bankCreateManyInput.push({
          name: bank.name,
        });
      }

      await this.bankController
        .createMany({ skipDuplicates: true, data: bankCreateManyInput })
        .then((res) => {
          this.logger.log(res.count, ' Bank info seeded');
        });
    }

    if (subdistricts.length <= 0) {
      await populateProvinceCityDistricSubdistric();
    }

    if (rewards.length <= 0) {
      await this.rewardController.createOne({
        data: {
          name: 'Umroh',
          description: 'Berangkat Ke Tanah Suci',
          pointCost: 1000,
          images: {
            create: {
              url: 'https://bb71d2eac085c69b0.s3-jak01.storageraya.com/1675476533-195034/16783475083093-E61sfSUyAf6wXXyI8sOWaPfTwMJit19lfCflozed.jpg',
            },
          },
        },
      });

      await this.rewardController.createOne({
        data: {
          name: 'London',
          description: 'Berangkat Ke London',
          pointCost: 500,
          images: {
            create: {
              url: 'https://img.freepik.com/free-photo/big-ben-westminster-bridge-sunset-london-uk_268835-1395.jpg',
            },
          },
        },
      });
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
