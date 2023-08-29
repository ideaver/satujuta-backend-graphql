import { AuthService } from './auth.service';
import { Auth } from './entities/auth.entity';
import { CreateAuthInput } from './dto/create-auth.input';
import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { UserController } from '../user/user.controller';
import { AuthValidateArgs } from './dto/auth-validate.args';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userController: UserController,
  ) {}

  async validate(authValidateArgs: AuthValidateArgs) {
    //find user by email
    const user = await this.userController.findFirst({
      take: 1,
      where: {
        email: { equals: authValidateArgs.email },
      },
    });

    if (user) {
      //if found, compare password
      const passwordValid = await bcrypt.compare(
        authValidateArgs.password,
        user.password,
      );

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

  async resetPassword(email: string) {
    return await this.authService.resetPassword(email).then((res) => {
      //TODO: send email
      return res;
    });
  }
}
