import { Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { IGraphQLError } from './custom-graphql-error';

@Catch()
export class IExceptionFilter extends BaseExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    if (exception instanceof IGraphQLError) {
      // Do not log custom GraphQL errors
      return;
    }

    if (exception instanceof HttpException) {
      // Call the parent class's catch method for HttpExceptions
      super.catch(exception, host);
      return;
    }
  }
}
