import { Resolver, Query, Mutation, Args, Int, Context } from '@nestjs/graphql';
import { AuthController } from './auth.controller';
import { User } from 'src/@generated';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import { LoginResponse } from './model/login-response.model';
import { LoginArgs } from './dto/login.args';
import { AuthGuard } from '@nestjs/passport';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from './gpl-auth.guard';

@Resolver()
export class AuthResolver {
  constructor(private readonly authController: AuthController) {}

  @Mutation(() => LoginResponse, { nullable: true })
  @UseGuards(GqlAuthGuard)
  authLogin(@Args('loginArgs') loginArgs: LoginArgs, @Context() context) {
    return this.authController.login(context.user);
  }

  // @Mutation(() => Auth)
  // async resetPassword(@Args('email') email: string) {
  //   return await this.authController.resetPassword(email).then((res) => {
  //     //TODO: send email
  //     return res;
  //   });
  // }
}
