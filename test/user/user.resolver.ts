// import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
// import { UserCreateArgs } from './dto/user-create-one.args';
// import { UserFindManyArgs } from './dto/user-find-many.args';
// import { UserFindUniqueArgs } from './dto/user-find-one.args';
// import { UserUpdateOneArgs } from './dto/user-update-one.args';
// // import { User } from 'src/model/user.model';
// import { Prisma } from '@prisma/client';
// import { Relations } from 'src/utils/relations.decorator';
// import { UserController } from './user.controller';
// import { UserTypePercentage } from './dto/user-type-percentage.output';
// import { User } from 'src/@generated';
// import {
//   UserCreatedByCustomPeriodArgs,
//   UserCreatedByCustomPeriodQuery,
// } from './dto/get-user-created-by-custom-period.args';
// // Ignore the import errors
// // @ts-ignore
// import { FileUpload, GraphQLUpload } from 'graphql-upload';

// interface UserSelect {
//   select: Prisma.UserSelect;
// }

// @Resolver(() => User)
// export class UserResolver {
//   constructor(private readonly userController: UserController) {}

//   @Mutation(() => User, {
//     nullable: true,
//     description: 'Deskripsinya ada disini loh',
//   })
//   async userCreateOne(
//     @Args({ name: 'file', type: () => GraphQLUpload, nullable: true })
//     file: FileUpload,
//     @Args('userCreateArgs') userCreateArgs: UserCreateArgs,
//     @Relations() relations: UserSelect,
//   ): Promise<User | void> {
//     //Auto implement prisma select from graphql query info
//     userCreateArgs.select = relations.select;

//     return await this.userController.createOne(file, userCreateArgs);
//   }

//   @Query(() => [User], {
//     nullable: true,
//     description: 'Deskripsinya ada disini loh',
//   })
//   userFindMany(
//     @Args('userFindManyArgs') userFindManyArgs: UserFindManyArgs,
//     @Relations() relations: UserSelect,
//   ) {
//     //Auto implement prisma select from graphql query info
//     userFindManyArgs.select = relations.select;
//     return this.userController.findMany(userFindManyArgs);
//   }

//   @Query(() => User, {
//     nullable: true,
//     description: 'Deskripsinya ada disini loh',
//   })
//   userFindOne(
//     @Args('userFindUniqueArgs')
//     userFindUniqueArgs: UserFindUniqueArgs,
//     @Relations() relations: UserSelect,
//   ) {
//     //Auto implement prisma select from graphql query info
//     userFindUniqueArgs.select = relations.select;
//     return this.userController.findOne(userFindUniqueArgs);
//   }

//   @Mutation(() => User, { description: 'Deskripsinya ada disini loh' })
//   userUpdateOne(
//     @Args('userUpdateOneArgs') userUpdateOneArgs: UserUpdateOneArgs,
//     @Relations() relations: UserSelect,
//   ) {
//     userUpdateOneArgs.select = relations.select;
//     return this.userController.updateOne(userUpdateOneArgs);
//   }

//   @Mutation(() => String, {
//     description: 'Dapat URL baru, gambar lama terhapus di storage',
//   })
//   userUpdateOneAvatarUrl(
//     @Args({ name: 'file', type: () => GraphQLUpload, nullable: false })
//     file: FileUpload,
//     @Args({ name: 'userId', type: () => String, nullable: false })
//     userId: string,
//   ) {
//     return this.userController.updateOneAvatarUrl(file, userId);
//   }

//   @Mutation(() => User, {
//     nullable: true,
//     description:
//       'Hanya berupa softdelete, artinya semua data tetap ada di database. field deleteAt pada entitas user akan terisi. select: { id: true, firstName: true, deletedAt: true }',
//   })
//   userRemove(@Args('userId') userId: string) {
//     return this.userController.remove(userId);
//   }

//   @Query(() => Int, {
//     nullable: false,
//     description: 'Deskripsinya ada disini loh',
//   })
//   userCount(
//     @Args('userFindManyArgs', { nullable: true })
//     userFindManyArgs: UserFindManyArgs,
//   ) {
//     return this.userController.count(userFindManyArgs);
//   }

//   @Query(() => [UserTypePercentage], {
//     nullable: false,
//     description: 'Deskripsinya ada disini loh',
//   })
//   countUserTypePercentage() {
//     return this.userController.countUserTypePercentage();
//   }

//   @Query(() => [UserCreatedByCustomPeriodQuery], {
//     nullable: false,
//     description: 'Deskripsinya ada disini loh',
//   })
//   getUserGrowthByCustomPeriod(
//     @Args('userCreatedByCustomPeriodArgs', { nullable: false })
//     userCreatedByCustomPeriodArgs: UserCreatedByCustomPeriodArgs,
//   ) {
//     return this.userController.getUserGrowthByCustomPeriod(
//       userCreatedByCustomPeriodArgs,
//     );
//   }
// }
