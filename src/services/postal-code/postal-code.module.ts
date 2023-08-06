import { Module } from '@nestjs/common';
import { PostalCodeService } from './postal-code.service';
import { PostalCodeResolver } from './postal-code.resolver';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  providers: [PrismaService, PostalCodeResolver, PostalCodeService],
})
export class PostalCodeModule {}
