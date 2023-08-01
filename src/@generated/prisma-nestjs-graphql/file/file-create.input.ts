import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileType } from '../prisma/file-type.enum';
import { Float } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { UserCreateNestedOneWithoutFilesCreatedInput } from '../user/user-create-nested-one-without-files-created.input';

@InputType()
export class FileCreateInput {

    @Field(() => FileType, {nullable:false})
    fileType!: keyof typeof FileType;

    @Field(() => Float, {nullable:false})
    filesize!: number;

    @Field(() => String, {nullable:false})
    @Validator.MinLength(2)
    @Validator.MaxLength(20)
    @Validator.IsNotEmpty()
    name!: string;

    @Field(() => String, {nullable:false})
    @Validator.MinLength(10)
    @Validator.IsNotEmpty()
    description!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsUrl({ require_protocol: true })
    url!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutFilesCreatedInput, {nullable:false})
    createdBy!: UserCreateNestedOneWithoutFilesCreatedInput;
}
