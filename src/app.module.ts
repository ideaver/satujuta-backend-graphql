import { Module } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { join } from 'path';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AuthModule } from './services/auth/auth.module';
import { UserModule } from './services/user/user.module';
import { HotelModule } from './services/hotel/hotel.module';
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
import { OrderModule } from './services/order/order.module';
import { InvoiceModule } from './services/invoice/invoice.module';
import { ProvinceModule } from './services/province/province.module';
import { CityModule } from './services/city/city.module';
import { DistrictModule } from './services/district/district.module';
import { SubdistrictModule } from './services/subdistrict/subdistrict.module';
import { CartModule } from './services/cart/cart.module';
import { RewardClaimModule } from './services/reward-claim/reward-claim.module';
import { WithdrawalRequestModule } from './services/withdrawal-request/withdrawal-request.module';

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
    OrderModule,
    InvoiceModule,
    ProvinceModule,
    CityModule,
    DistrictModule,
    SubdistrictModule,
    CartModule,
    RewardClaimModule,
    WithdrawalRequestModule,
  ],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
