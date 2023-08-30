import { Resolver, Query, Mutation, Args, Int, Context } from '@nestjs/graphql';
import { AuthController } from './auth.controller';
import { User } from 'src/@generated';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import { LoginResponse } from './model/login-response.model';
import { LoginArgs } from './dto/login.args';
import { AuthGuard } from '@nestjs/passport';
import { UseGuards } from '@nestjs/common';
import { GplAuthGuard } from './gpl-auth.guard';

interface UserSelect {
  select: Prisma.UserSelect;
}

// () => Auth

@Resolver()
export class AuthResolver {
  constructor(private readonly authController: AuthController) {}

  @Mutation(() => LoginResponse, { nullable: true })
  @UseGuards(GplAuthGuard)
  authLogin(
    @Args('loginArgs') loginArgs: LoginArgs,
    @Context() context,
    @Relations() relations: UserSelect,
  ) {
    loginArgs.select = relations.select;
    return this.authController.login(loginArgs);
  }

  // @Mutation(() => Auth)
  // async resetPassword(@Args('email') email: string) {
  //   return await this.authController.resetPassword(email).then((res) => {
  //     //TODO: send email
  //     return res;
  //   });
  // }
}
