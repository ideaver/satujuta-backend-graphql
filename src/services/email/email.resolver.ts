import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';

import { Injectable } from '@nestjs/common';
import { Email } from './email.model';
import { UserController } from '../user/user.controller';
import { generateRandomReferralCode } from 'src/utils/generate-random.function';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';

@Resolver()
@Injectable()
export class EmailResolver {
  constructor(
    @InjectQueue('email') private readonly emailQueue: Queue,
    private readonly userController: UserController,
  ) {}

  @Mutation(() => String)
  async authPasswordReset(@Args('email') email: string) {
    //check if email exist
    const isUserExist = await this.userController.findOne({
      where: { email: email },
    });

    if (!isUserExist) {
      throw new IGraphQLError({ code: 10004 });
    }

    const newUserPassword = await this.userController.updateOne({
      select: { password: true },
      where: { email: email },
      data: { password: { set: generateRandomReferralCode() } },
    });

    if (newUserPassword) {
      const data: Email = {
        to: email,
        subject: 'Password Baru Anda: ' + newUserPassword.password,
        text:
          'Silahkan login ulang menggunakan password Baru anda : ' +
          newUserPassword.password,
        from: 'satujuta.app@gmail.com',
      };
      await this.emailQueue.add('reset-password', data);
    }

    return (
      'Password baru anda akan dikirimkan ke email ' +
      email +
      ' . Silahkan periksa inbox email anda dalam beberapa menit. '
    );
  }
}
