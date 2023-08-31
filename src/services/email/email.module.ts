import { Module } from '@nestjs/common';
import { EmailResolver } from './email.resolver';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { EmailProcessor } from 'src/queues/email.queue';
import { BullModule } from '@nestjs/bull';
import { join } from 'path';
import { UserModule } from '../user/user.module';

@Module({
  providers: [EmailResolver, EmailProcessor],
  imports: [
    UserModule,
    BullModule.registerQueue({
      name: 'email',
    }),
    MailerModule.forRoot({
      transport: {
        host: 'smtp-relay.brevo.com', // SMTP server hostname
        port: 587, // SMTP server port
        secure: false, // Use TLS
        auth: {
          user: 'satujuta.app@gmail.com', // Use environment variable for email
          pass: 'TEAU4avd76JMQRKc', // Use environment variable for password
        },
      },
      defaults: {
        from: 'satujuta.app@gmail.com',
      },
      template: {
        dir: join(__dirname, 'templates'),
        adapter: new HandlebarsAdapter(),
        // options: {
        //   strict: true,
        // },
      },
    }),
  ],
})
export class EmailModule {}
