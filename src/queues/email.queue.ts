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
    console.log('data', job.data.to);

    const { data } = job;

    try {
      await this.mailerService.sendMail({
        ...data,
        template: 'reset-password',
      });

      console.log('sendResetPasswordEmail: Email sent successfully');
    } catch (error) {
      console.error('sendResetPasswordEmail: Error sending email:', error);
      // You can handle the error here, maybe mark the job as failed or take appropriate action.
    }
  }
}
