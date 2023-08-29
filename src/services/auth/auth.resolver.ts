import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AuthController } from './auth.controller';
import { Auth } from './entities/auth.entity';
import { User } from 'src/@generated';
import { AuthValidateArgs } from './dto/auth-validate.args';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';

interface UserSelect {
  select: Prisma.UserSelect;
}

@Resolver(() => Auth)
export class AuthResolver {
  constructor(private readonly authController: AuthController) {}

  @Query(() => User, { nullable: true })
  authValidate(
    @Args('authValidateArgs') authValidateArgs: AuthValidateArgs,
    @Relations() relations: UserSelect,
  ) {
    authValidateArgs.select = relations.select;
    return this.authController.validate(authValidateArgs);
  }

  @Mutation(() => Auth)
  async resetPassword(@Args('email') email: string) {
    return await this.authController.resetPassword(email).then((res) => {
      //TODO: send email
      return res;
    });
  }
}
