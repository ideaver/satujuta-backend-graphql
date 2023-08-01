import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileType } from '../prisma/file-type.enum';
import { Float } from '@nestjs/graphql';
import { HotelCreateNestedOneWithoutImagesInput } from '../hotel/hotel-create-nested-one-without-images.input';
import { ProgramCreateNestedOneWithoutImagesInput } from '../program/program-create-nested-one-without-images.input';
import { ProjectCreateNestedOneWithoutImagesInput } from '../project/project-create-nested-one-without-images.input';

@InputType()
export class ImagesCreateWithoutRewardImageInput {

    @Field(() => FileType, {nullable:false})
    fileType!: keyof typeof FileType;

    @Field(() => Float, {nullable:false})
    filesize!: number;

    @Field(() => String, {nullable:false})
    url!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => HotelCreateNestedOneWithoutImagesInput, {nullable:true})
    hotelImage?: HotelCreateNestedOneWithoutImagesInput;

    @Field(() => ProgramCreateNestedOneWithoutImagesInput, {nullable:true})
    programImage?: ProgramCreateNestedOneWithoutImagesInput;

    @Field(() => ProjectCreateNestedOneWithoutImagesInput, {nullable:true})
    projectImage?: ProjectCreateNestedOneWithoutImagesInput;
}
