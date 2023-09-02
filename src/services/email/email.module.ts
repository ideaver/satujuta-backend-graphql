import { Module } from '@nestjs/common';
import { EmailResolver } from './email.resolver';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { EmailProcessor } from 'src/queues/email.queue';
import { BullModule } from '@nestjs/bull';
import { join } from 'path';
import { UserModule } from '../user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  providers: [EmailResolver, EmailProcessor],
  imports: [
    UserModule,
    BullModule.registerQueue({
      name: 'email',
    }),
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        transport: {
          host: configService.get<string>('MAIL_HOST'),
          port: configService.get<number>('MAIL_PORT'),
          secure: false,
          auth: {
            user: configService.get<string>('MAIL_USERNAME'),
            pass: configService.get<string>('MAIL_PASSWORD'),
          },
        },
        defaults: {
          from: configService.get<string>('MAIL_USERNAME'),
        },
        template: {
          dir: join(__dirname, 'templates'),
          adapter: new HandlebarsAdapter(),
          // options: {
          //   strict: true,
          // },
        },
      }),
      inject: [ConfigService],
    }),
  ],
})
export class EmailModule {}
