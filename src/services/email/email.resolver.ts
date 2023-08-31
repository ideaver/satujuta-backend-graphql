import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Injectable } from '@nestjs/common';
import { Email } from './email.model';

@Resolver()
@Injectable()
export class EmailResolver {
  constructor(@InjectQueue('email') private readonly emailQueue: Queue) {}

  @Mutation(() => String)
  async authPasswordReset(@Args('email') email: string) {
    const data: Email = {
      to: email,
      subject: 'Permintaan Reset Password',
      text: 'Reset Password',
      from: 'satujuta.app@gmail.com',
    };
    await this.emailQueue.add('reset-password', data);

    return (
      'Password baru anda akan dikirimkan ke email ' +
      email +
      ' . Silahkan periksa inbox email anda dalam beberapa menit. '
    );
  }
}
