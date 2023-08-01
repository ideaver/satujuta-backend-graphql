import { Injectable } from '@nestjs/common';
import { UserCreateInput } from './dto/user-create.input';
import { UpdateUserInput } from './dto/update-user.input';
import { PrismaService } from 'prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { AccountCategory } from 'src/@generated/prisma-nestjs-graphql/prisma/account-category.enum';
import { User } from 'src/@generated/prisma-nestjs-graphql/user/user.model';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(userCreateInput: UserCreateInput): Promise<User | void> {
    //     await  this.prisma.city.create({data:{name:"Jakarta"}}).then((city) => {console.log('city created ' + city)});
    // await this.prisma.district.create({data:{name:"Jakarta Selatan"}}).then((district) => {console.log('district created ' + district)});
    // await this.prisma.postalCode.create({data:{code:456547}}).then((postalCode) => {console.log('postalCode created ' + postalCode)});
    // await this.prisma.bank.create({
    //   data: {
    //     name: 'BCA',
    //     accountNumber: 2572653525,
    //     logoUrl: 'https://www.google.com/jfdggfpg',
    //     account: {
    //       create: {
    //         name: 'BCA Bank Account',
    //         accountCategory: AccountCategory.PLATFORM,
    //         user: { connect: { id: '92853b58-f8fe-45a1-a41b-83c9eb812ea8' } },
    //       },
    //     },
    //   },
    // }).then((bank) => {console.log('bank created ' + bank)});
    console.log('user userCreateInput ' + JSON.stringify(userCreateInput));
    return await this.prisma.user
      .create({ data: userCreateInput, include: { address: true } })
      .then((user) => {
        console.log('user created ' + JSON.stringify(user));
        return user;
      });
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
