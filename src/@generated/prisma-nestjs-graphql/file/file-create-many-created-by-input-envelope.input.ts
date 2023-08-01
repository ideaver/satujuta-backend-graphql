import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileCreateManyCreatedByInput } from './file-create-many-created-by.input';
import { Type } from 'class-transformer';

@InputType()
export class FileCreateManyCreatedByInputEnvelope {

    @Field(() => [FileCreateManyCreatedByInput], {nullable:false})
    @Type(() => FileCreateManyCreatedByInput)
    data!: Array<FileCreateManyCreatedByInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
