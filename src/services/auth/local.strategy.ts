import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { LoginArgs } from './dto/login.args';
import { AuthController } from './auth.controller';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authController: AuthController) {
    super();
  }

  async validate(loginArgs: LoginArgs): Promise<any> {
    console.log('masuk lokal strategi', loginArgs);
    const user = await this.authController.validate(loginArgs);
    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
