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
      from: '',
    };
    console.log(email);
    const job = await this.emailQueue.add('reset-password', { data });
    // .then((job) => {
    //   return {
    //     message:
    //       'Password baru anda akan dikirimkan melalui email. Silahkan periksa inbox email anda dalam beberapa menit. ',
    //   };
    // })
    // .catch((err) => {
    //   console.log(err);
    //   throw new IGraphQLError({ code: 10006, err: err });
    // });

    console.log({ jobId: job });
    return job.toJSON();
  }
}
