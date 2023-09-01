import { GraphQLError } from 'graphql';
import { errorCodes } from './error-codes';
import { Prisma } from '@prisma/client';
import { extractNumbers } from '../extract-numbers.function';

interface CustomGraphQLErrorOptions {
  err?: any;
  code?: number;
}

export class IGraphQLError extends GraphQLError {
  constructor({ err, code }: CustomGraphQLErrorOptions = {}) {
    // Determine the error code based on the 'err' parameter or use the provided 'code'
    let errorCode = err?.extensions?.code || code || 0; // Default to 0 if not provided

    // If the error is a Prisma error, extract the error code from the error message
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      errorCode = extractNumbers(err.code);
    }

    // Determine the error message based on the error code
    const message = errorCodes[errorCode] || 'An unknown error occurred';

    // Call the base class constructor to create the error object
    super(message, undefined, undefined, undefined, undefined, undefined, {
      code: errorCode,
      error: err?.toString(),
    });
  }
}
