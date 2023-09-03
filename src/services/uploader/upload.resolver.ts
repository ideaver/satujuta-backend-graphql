import { Resolver, Mutation, Args } from '@nestjs/graphql';
// Ignore the import errors
// @ts-ignore
import { FileUpload, GraphQLUpload } from 'graphql-upload';

@Resolver()
export class UploaderResolver {
  @Mutation(() => String)
  async uploadFile(
    @Args({ name: 'file', type: () => GraphQLUpload }) file: FileUpload,
  ): Promise<string> {
    const { createReadStream, filename } = await file;
    console.log('uploadFile called');
    // Handle file upload logic here
    // Use createReadStream to access the file content
    // Handle storage, processing, and return the result
    return `File '${filename}' uploaded successfully!`;
  }
}
