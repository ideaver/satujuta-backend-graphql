import { Injectable } from '@nestjs/common';
import { CreateAuthInput } from './dto/create-auth.input';
import { UpdateAuthInput } from './dto/update-auth.input';
import { PrismaService } from 'prisma/prisma.service';
import { generateRandomReferralCode } from 'src/utils/generate-random-referral-code';
import { GraphQLError } from 'graphql';
import { Auth } from './entities/auth.entity';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  login(createAuthInput: CreateAuthInput) {
    return 'This action adds a new auth';
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  async resetPassword(email: string): Promise<Auth> {
    return await this.prisma.user
      .update({
        data: { password: generateRandomReferralCode() },
        where: { email: email },
      })
      .then(() => {
        return { message: 'Password reset success. Sending Email' };
      })
      .catch((err) => {
        //Todo: handle prisma error code
        return new GraphQLError("Email doesn't exist", {
          extensions: {
            code: 23525,
          },
        });
      });
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
