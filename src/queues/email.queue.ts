import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { Email } from 'src/services/email/email.model';

@Injectable()
@Processor('email')
export class EmailProcessor {
  constructor(private readonly mailerService: MailerService) {}

  @Process('reset-password')
  async sendResetPasswordEmail(job: Job<Email>) {
    const { data } = job;

    await this.mailerService.sendMail({
      ...data,
      subject: 'Reset password',
      template: 'reset-password',
      context: {
        user: data.user,
      },
    });
  }
}
