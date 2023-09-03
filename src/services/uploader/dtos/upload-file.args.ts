import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IsNotEmpty, ValidatePromise } from 'class-validator';
// Ignore the import errors
// @ts-ignore
import { FileUpload, GraphQLUpload } from 'graphql-upload';

@InputType()
export abstract class UploadFileArgs {
  @Field(() => String, { nullable: false })
  @IsNotEmpty()
  userId: string;

  @Field(() => GraphQLUpload, { nullable: true })
  @ValidatePromise()
  @Type(() => FileUpload)
  file: FileUpload;
}
