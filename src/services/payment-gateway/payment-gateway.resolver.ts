import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PaymentGatewayService } from './payment-gateway.service';
import { GetAllDisbursementArgs } from './dto/get-all-disbursement.args';
import {
  Disbursement,
  GetAllDisbursement,
} from './entities/get-all-disbursement.entity';
import { CreateDisbursementArgs } from './dto/create-disbursement.args';
import { GetDisbursementById } from './dto/get-disbursement-by-id.args';
import { GetDisbursementByIdempotencyKey } from './dto/get-disbursement-by-idempotency-key.args';

@Resolver(() => Disbursement)
export class PaymentGatewayResolver {
  constructor(private readonly paymentGatewayService: PaymentGatewayService) {}

  @Mutation(() => Disbursement)
  createDisbursement(
    @Args('createDisbursementArgs')
    createDisbursementArgs: CreateDisbursementArgs,
  ) {
    return this.paymentGatewayService.createDisbursement(
      createDisbursementArgs,
    );
  }

  @Query(() => GetAllDisbursement, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  getAllDisbursement(
    @Args('getAllDisbursementArgs')
    getAllDisbursementArgs: GetAllDisbursementArgs,
  ) {
    return this.paymentGatewayService.getAllDisbursement(
      getAllDisbursementArgs,
    );
  }

  @Query(() => Disbursement, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  getDisbursementById(
    @Args('getDisbursementById') getDisbursementById: GetDisbursementById,
  ) {
    return this.paymentGatewayService.getDisbursementById(getDisbursementById);
  }

  @Query(() => Disbursement, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  getDisbursementByIdempotencyKey(
    @Args('getDisbursementByIdempotencyKey')
    getDisbursementByIdempotencyKey: GetDisbursementByIdempotencyKey,
  ) {
    return this.paymentGatewayService.getDisbursementByIdempotencyKey(
      getDisbursementByIdempotencyKey,
    );
  }
}
