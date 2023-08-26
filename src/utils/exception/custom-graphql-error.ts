import { GraphQLError } from 'graphql';
import { errorCodes } from './error-codes';

interface CustomGraphQLErrorOptions {
  err?: any;
  code?: number;
}

export class IGraphQLError extends GraphQLError {
  constructor({ err, code }: CustomGraphQLErrorOptions = {}) {
    // Determine the error code based on the 'err' parameter or use the provided 'code'
    const errorCode = err?.extensions?.code || code || 0; // Default to 0 if not provided

    // Determine the error message based on the error code
    const message = errorCodes[errorCode] || 'An unknown error occurred';

    // Call the base class constructor to create the error object
    super(message, undefined, undefined, undefined, undefined, undefined, {
      code: errorCode,
      error: err.toString(),
    });
  }
}
