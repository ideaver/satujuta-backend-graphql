import { AuthService } from './auth.service';
import { CreateAuthInput } from './dto/create-auth.input';
import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { UserController } from '../user/user.controller';
import { LoginArgs } from './dto/login.args';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import * as bcrypt from 'bcrypt';
import { LoginResponse } from './model/login-response.model';

@Injectable()
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userController: UserController,
  ) {}

  async validate({ email, password }: LoginArgs): Promise<any> {
    //find user by email
    const user = await this.userController.findOne({
      where: {
        email: email,
      },
    });

    if (user) {
      //if found, compare password
      const passwordValid = await bcrypt.compare(password, user.password);

      if (passwordValid) {
        return user;
      } else {
        throw new IGraphQLError({ code: 10005 });
      }
    } else {
      //if user not found
      throw new IGraphQLError({ code: 10004 });
    }
  }

  async login(loginArgs: LoginArgs): Promise<LoginResponse> {
    const user = await this.userController.findFirst({
      take: 1,
      where: { email: { equals: loginArgs.email } },
    });

    return {
      accessToken: 'jwt',
      user,
    };
  }

  // async resetPassword(email: string) {
  //   return await this.authService.resetPassword(email).then((res) => {
  //     //TODO: send email
  //     return res;
  //   });
  // }
}
