import { AuthService } from './auth.service';
import { CreateAuthInput } from './dto/create-auth.input';
import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { UserController } from '../user/user.controller';
import { LoginArgs } from './dto/login.args';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import * as bcrypt from 'bcrypt';
import { LoginResponse } from './model/login-response.model';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/@generated';

@Injectable()
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userController: UserController,
    private readonly jwtService: JwtService,
  ) {}

  async validate({ email, password }: LoginArgs): Promise<any> {
    //find user by email
    console.log('masuk validate');
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

  async login(user: User): Promise<LoginResponse> {
    console.log('masuk login');
    return {
      accessToken: this.jwtService.sign({
        id: user.id,
        email: user.email,
        userRole: user.userRole,
      }),
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
