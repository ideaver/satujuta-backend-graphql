import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { populateProvinceCityDistricSubdistric } from 'prisma/seed-functions/address.seed';
import { ProgramController } from '../program/program.controller';
import { encryptUserPassword } from 'src/utils/bcrypt.function';

// initialization.service.ts
@Injectable()
export class InitializationService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly programController: ProgramController,
  ) {}

  private readonly logger = new Logger(InitializationService.name);

  async initialize() {
    const subdistricts = await this.prisma.subdistrict.findMany();

    if (subdistricts.length <= 0) {
      await populateProvinceCityDistricSubdistric();
    }
  }
}
