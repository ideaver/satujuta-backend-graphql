import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class GetAllDisbursementArgs {
  @Field(() => Int, {
    nullable: true,
    description: 'The pagination of the result. Default value is 20.',
  })
  pagination?: number;

  @Field(() => Int, {
    nullable: true,
    description: 'The page number of the result to be viewed.',
  })
  page?: number;

  @Field(() => String, {
    nullable: true,
    description:
      'Sort the result by the attribute. Use the attribute name (e.g sort=id) to sort in ascending order or dash+attribute name (e.g sort=-id) to sort in descending order.',
  })
  sort?: string;
}
