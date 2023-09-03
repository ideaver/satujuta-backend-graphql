import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { createWriteStream } from 'fs';
// Ignore the import errors
// @ts-ignore
import { FileUpload, GraphQLUpload } from 'graphql-upload';

@Resolver()
export class UploaderResolver {
  @Mutation(() => String, {
    description:
      'Header wajib ada apollo-require-preflight = true agar tidak CSRF error',
  })
  async uploadSingle(
    @Args({ name: 'file', type: () => GraphQLUpload })
    { createReadStream, filename }: FileUpload,
  ) {
    return filename + 'is uploaded';
  }
}
