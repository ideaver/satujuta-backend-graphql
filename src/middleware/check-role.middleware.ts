import { ForbiddenException } from '@nestjs/common';
import { FieldMiddleware, MiddlewareContext, NextFn } from '@nestjs/graphql';
import { UserRole } from 'src/@generated';

export const checkRoleMiddleware: FieldMiddleware = async (
  ctx: MiddlewareContext,
  next: NextFn,
) => {
  const { info } = ctx;
  const { extensions } = info.parentType.getFields()[info.fieldName];

  const userRole = UserRole.MEMBER; // Replace this with the actual user's role in your application.

  console.log('extensions ' + extensions.role);
  console.log('userRole ' + userRole);
  if (userRole != extensions.role) {
    throw new ForbiddenException(
      `User does not have sufficient permissions to access "${info.fieldName}" field.`,
    );
  }

  return next();
};
