import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';

@Injectable()
export class ReplaceNullWithUndefinedInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const gqlContext = GqlExecutionContext.create(context);
    const args = gqlContext.getArgs();

    // Transform request data before passing it to the resolver
    const transformedArgs = this.transformRequestData(args);

    // Create a new execution context with the modified arguments
    const modifiedContext = GqlExecutionContext.create(context);
    modifiedContext.getArgs = () => transformedArgs;

    // Override the current execution context with the modified one
    Object.assign(context, modifiedContext);

    // Call the next handler in the chain
    return next.handle();
  }

  private transformRequestData(data: any): any {
    // Apply your transformation logic here
    return replaceNullWithUndefined(data);
  }
}
