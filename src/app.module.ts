import { Module } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { join } from 'path';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AuthModule } from './services/auth/auth.module';
import { UserModule } from './services/user/user.module';
import { HotelModule } from './services/hotel/hotel.module';
import { CityModule } from './services/city/city.module';
import { DistrictModule } from './services/district/district';
import { PostalCodeModule } from './services/postal-code/postal-code.module';
import { BankModule } from './services/bank/bank.module';
import { ProgramModule } from './services/program/program.module';
import { ProgramCategoryModule } from './services/program-category/program-category.module';
import { RewardModule } from './services/reward/reward.module';
import { FileModule } from './services/file/file.module';
import { FaqModule } from './services/faq/faq.module';
import { ProjectModule } from './services/project/project.module';
import { ShippingModule } from './services/shipping/shipping.module';
import { ItemModule } from './services/item/item.module';
import { CheckInModule } from './services/check-in/check-in.module';
import { UserNotificationModule } from './services/user-notification/user-notification.module';
import { SessionModule } from './services/session/session.module';
import { PointTransactionModule } from './services/point-transaction/point-transaction.module';
import { TransactionModule } from './services/transaction/transaction.module';
import { AccountModule } from './services/account/account.module';
import { SchoolModule } from './services/school/school.module';
import { AddressModule } from './services/address/address.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.graphql'),
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    UserModule,
    HotelModule,
    AuthModule,
    CityModule,
    DistrictModule,
    PostalCodeModule,
    BankModule,
    ProgramModule,
    ProgramCategoryModule,
    RewardModule,
    FileModule,
    FaqModule,
    ProjectModule,
    ShippingModule,
    ItemModule,
    CheckInModule,
    UserNotificationModule,
    SessionModule,
    PointTransactionModule,
    TransactionModule,
    AccountModule,
    SchoolModule,
    AddressModule,
  ],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
