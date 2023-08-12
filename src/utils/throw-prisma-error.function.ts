import { GraphQLError } from 'graphql';

export function throwPrismaError(err: any) {
  throw new GraphQLError('Prisma nya error nih ' + err, {
    extensions: {
      code: 23525,
    },
  });
}
