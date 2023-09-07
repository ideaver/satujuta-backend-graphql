import { Resolver, Mutation, Args } from '@nestjs/graphql';

import { UploadFileArgs } from './dtos/upload-file.args';
import { UploaderService } from './uploader.service';
import { RatioEnum } from './enums/ratio.enum';
// Ignore the import errors
// @ts-ignore
import { FileUpload, GraphQLUpload } from 'graphql-upload';
import { detectMimeTypeFromFilename } from 'src/utils/mime-types.function';

@Resolver()
export class UploaderResolver {
  constructor(private readonly uploaderService: UploaderService) {}

  @Mutation(() => String, {
    description:
      'Header wajib ada apollo-require-preflight = true agar tidak CSRF error',
  })
  async uploadSingleImage(
    @Args({ name: 'file', type: () => GraphQLUpload }) file: FileUpload,
    @Args('userId', { type: () => String }) userId: string,
  ) {
    
    return await this.uploaderService.uploadSingleImage({
      userId: userId,
      ratio: RatioEnum.SQUARE,
      file: file,
    });
  }

  @Mutation(() => [String], {
    description:
      'Header wajib ada apollo-require-preflight = true agar tidak CSRF error',
  })
  async uploadMultiImage(
    @Args({ name: 'files', type: () => [GraphQLUpload] }) files: FileUpload[],
    @Args('userId', { type: () => String }) userId: string,
  ) {
    const uploadedFiles = await Promise.all(files);
    return await this.uploaderService.uploadMultipleImages({
      userId: userId,
      ratio: RatioEnum.SQUARE,
      files: uploadedFiles,
    });
  }


}
