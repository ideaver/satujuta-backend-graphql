import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { UploaderService } from './uploader.service';
import { RatioEnum } from './enums/ratio.enum';
// Ignore the import errors
// @ts-ignore
import { FileUpload, GraphQLUpload } from 'graphql-upload';
import { UserController } from '../user/user.controller';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';

@Resolver()
export class UploaderResolver {
  constructor(
    private readonly uploaderService: UploaderService,
    private readonly userController: UserController,
  ) {}

  @Mutation(() => String, {
    nullable: true,
    description:
      'Header wajib ada apollo-require-preflight = true agar tidak CSRF error. File JPG akan dicompress',
  })
  async uploadSingleFile(
    @Args({ name: 'file', type: () => GraphQLUpload, nullable: true })
    file: FileUpload,
    @Args('userId', { type: () => String, nullable: false }) userId: string,
    @Args('ratioForImage', { type: () => RatioEnum, nullable: true })
    ratioForImage?: RatioEnum,
  ) {
    //validate user id
    await this.validateUserId(userId);

    return await this.uploaderService.uploadSingleFile({
      userId: userId,
      ratioForImage: ratioForImage ?? RatioEnum.SQUARE,
      file: file,
    });
  }

  @Mutation(() => [String], {
    nullable: true,
    description:
      'Header wajib ada apollo-require-preflight = true agar tidak CSRF error. File JPG akan dicompress',
  })
  async uploadMultiFile(
    @Args({ name: 'files', type: () => [GraphQLUpload], nullable: true })
    files: FileUpload[],
    @Args('userId', { type: () => String, nullable: false }) userId: string,
    @Args('ratioForImage', { type: () => RatioEnum, nullable: true })
    ratioForImage?: RatioEnum,
  ) {
    const uploadedFiles = await Promise.all(files);

    //validate user id
    await this.validateUserId(userId);

    return await this.uploaderService.uploadMultipleFiles({
      userId: userId,
      ratioForImage: ratioForImage ?? RatioEnum.SQUARE,
      files: uploadedFiles,
    });
  }

  @Query(() => String, {
    nullable: true,
    description:
      'Bersihkan file yang tidak terpakai di S3. Hanya untuk development',
  })
  async deleteOrphanedS3Objects() {
    try {
      return await this.uploaderService.deleteOrphanedS3Objects();
    } catch (error) {
      throw new IGraphQLError({ code: 170006 });
    }
  }

  private async validateUserId(userId: string) {
    if (
      !(await this.userController.findFirst({
        select: { id: true },
        where: { id: { equals: userId } },
        take: 1,
      }))
    ) {
      throw new IGraphQLError({ code: 10004 });
    }
  }
}
