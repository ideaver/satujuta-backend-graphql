import { Resolver, Query, Mutation, Args, Info } from '@nestjs/graphql';
import { FaqService } from './faq.service';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import { Faq } from 'src/@generated';
import { FaqCreateArgs } from './dto/faq-create-one.args';
import { FaqFindManyArgs } from './dto/faq-find-many.args';
import { FaqFindUniqueArgs } from './dto/faq-find-one.args';
import { FaqUpdateOneArgs } from './dto/faq-update-one.args';

interface FaqSelect {
  select: Prisma.FaqSelect;
}

@Resolver(() => Faq)
export class FaqResolver {
  constructor(private readonly faqService: FaqService) {}

  @Mutation(() => Faq, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async faqCreateOne(
    @Args('faqCreateArgs') faqCreateArgs: FaqCreateArgs,
    @Relations() relations: FaqSelect,
  ): Promise<Faq | void> {
    faqCreateArgs.select = relations.select;
    return await this.faqService.createOne(faqCreateArgs);
  }

  @Query(() => [Faq], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  faqFindMany(
    @Args('faqFindManyArgs') faqFindManyArgs: FaqFindManyArgs,
    @Relations() relations: FaqSelect,
  ) {
    //Auto implement prisma select from graphql query info
    faqFindManyArgs.select = relations.select;
    return this.faqService.findMany(faqFindManyArgs);
  }

  @Query(() => Faq, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  faqFindOne(
    @Args('faqFindUniqueArgs')
    faqFindUniqueArgs: FaqFindUniqueArgs,
    @Relations() relations: FaqSelect,
  ) {
    //Auto implement prisma select from graphql query info
    faqFindUniqueArgs.select = relations.select;
    return this.faqService.findOne(faqFindUniqueArgs);
  }

  @Mutation(() => Faq, { description: 'Deskripsinya ada disini loh' })
  faqUpdateOne(
    @Args('faqUpdateOneArgs') faqUpdateOneArgs: FaqUpdateOneArgs,
    @Relations() relations: FaqSelect,
  ) {
    faqUpdateOneArgs.select = relations.select;

    //Handle null value
    if (faqUpdateOneArgs.data.name.set === null) {
      faqUpdateOneArgs.data.name = undefined;
    }

    //Handle null value
    if (faqUpdateOneArgs.data.description.set === null) {
      faqUpdateOneArgs.data.description = undefined;
    }

    //Handle null value
    if (faqUpdateOneArgs.data.type.set === null) {
      faqUpdateOneArgs.data.type = undefined;
    }

    console.log(JSON.stringify(faqUpdateOneArgs));

    return this.faqService.update(faqUpdateOneArgs);
  }

  @Mutation(() => Boolean, {
    nullable: true,
    description: 'Datanya benar2 terhapus dari db',
  })
  faqRemove(@Args('faqId') faqId: number) {
    return this.faqService.remove(faqId);
  }
}
