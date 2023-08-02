import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { UserSelect } from '../model/user-select.input';
import { UserCreateInput } from 'src/@generated';

// @InputType()
// export class UserCreateInput {
//   @Field(() => String, { nullable: false })
//   @Validator.MinLength(2)
//   @Validator.MaxLength(20)
//   @Validator.IsAlpha()
//   @Validator.IsNotEmpty()
//   firstName!: string;

//   @Field(() => String, { nullable: true })
//   @Validator.MinLength(2)
//   @Validator.MaxLength(20)
//   @Validator.IsAlpha()
//   @Validator.IsNotEmpty()
//   lastName?: string;

//   @Field(() => String, { nullable: false })
//   @Validator.IsEmail()
//   email!: string;

//   @Field(() => UserRole, { nullable: false })
//   userRole!: keyof typeof UserRole;

//   @Field(() => UserType, { nullable: false })
//   userType!: keyof typeof UserType;

//   @Field(() => String, { nullable: true })
//   @Validator.IsUrl({ require_protocol: true })
//   avatarUrl?: string;

//   @Field(() => String, { nullable: false })
//   @Validator.IsNotEmpty()
//   whatsappNumber!: string;

//   @Field(() => String, { nullable: false })
//   @Validator.MinLength(6)
//   @Validator.MaxLength(15)
//   @Validator.IsAlphanumeric()
//   password!: string;

//   @Field(() => Theme, { nullable: true })
//   theme?: keyof typeof Theme;

//   @Field(() => AddressCreateNestedOneWithoutUserInput, { nullable: false })
//   address!: AddressCreateNestedOneWithoutUserInput;

//   @Field(() => UserCreateNestedOneWithoutReferredUsersInput, { nullable: true })
//   referredBy?: UserCreateNestedOneWithoutReferredUsersInput;
// }

@InputType()
export class UserCreateArgs {
  @Field(() => UserSelect, { nullable: true })
  select?: UserSelect | null;

  @Field(() => UserSelect, { nullable: true })
  include?: UserSelect | null;

  @Field(() => UserCreateInput, { nullable: false })
  @Type(() => UserCreateInput)
  data!: UserCreateInput;
}
