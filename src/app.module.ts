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
  ],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
