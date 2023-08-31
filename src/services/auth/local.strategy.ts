import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthController } from './auth.controller';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authController: AuthController) {
    super({
      usernameField: 'email', // Use the field name from your LoginArgs class
      passwordField: 'password', // Use the field name from your LoginArgs class
    });
  }

  async validate(email: string, password: string): Promise<any> {
    const user = await this.authController.validate({ email, password });
    // if (!user) {
    //   console.log('pengguna tidak valid');
    //   // throw new UnauthorizedException();
    // }

    return user;
  }
}
