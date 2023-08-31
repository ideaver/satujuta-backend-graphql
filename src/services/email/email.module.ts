import { Module } from '@nestjs/common';
import { EmailResolver } from './email.resolver';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { EmailProcessor } from 'src/queues/email.queue';
import { BullModule } from '@nestjs/bull';
import { join } from 'path';

@Module({
  providers: [EmailResolver, EmailProcessor],
  imports: [
    BullModule.registerQueue({
      name: 'email',
    }),
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com', // SMTP server hostname
        port: 587, // SMTP server port
        secure: false, // Use TLS
        auth: {
          user: process.env.EMAIL_USER, // Use environment variable for email
          pass: process.env.EMAIL_PASS, // Use environment variable for password
        },
      },
      defaults: {
        from: 'satujuta.app@gmail.com',
      },
      template: {
        dir: join(__dirname, 'templates'),
        adapter: new HandlebarsAdapter(),
      },
    }),
  ],
})
export class EmailModule {}
