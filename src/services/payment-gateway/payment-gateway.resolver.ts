import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PaymentGatewayService } from './payment-gateway.service';
import { GetAllDisbursementArgs } from './dto/get-all-disbursement.args';
import {
  Disbursement,
  GetAllDisbursement,
} from './entities/get-all-disbursement.entity';
import { CreateDisbursementArgs } from './dto/create-disbursement.args';
import { GetDisbursementById } from './dto/get-disbursement-by-id.args';
import { GetDisbursementByIdempotencyKey } from './dto/get-disbursement-by-idempotency-key.args';
import { GetBalance } from './entities/get-balance.entity';
import { GetBankInfo } from './entities/get-bank-info.entity';
import { IsMaintenance } from './entities/is-maintenance.entity';

@Resolver(() => Disbursement)
export class PaymentGatewayResolver {
  constructor(private readonly paymentGatewayService: PaymentGatewayService) {}

  @Mutation(() => Disbursement)
  async createDisbursement(
    @Args('createDisbursementArgs')
    createDisbursementArgs: CreateDisbursementArgs,
  ) {
    return await this.paymentGatewayService.createDisbursement(
      createDisbursementArgs,
    );
  }

  @Query(() => GetAllDisbursement, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async getAllDisbursement(
    @Args('getAllDisbursementArgs')
    getAllDisbursementArgs: GetAllDisbursementArgs,
  ) {
    return await this.paymentGatewayService.getAllDisbursement(
      getAllDisbursementArgs,
    );
  }

  @Query(() => Disbursement, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async getDisbursementById(
    @Args('getDisbursementById') getDisbursementById: GetDisbursementById,
  ) {
    return await this.paymentGatewayService.getDisbursementById(
      getDisbursementById,
    );
  }

  @Query(() => Disbursement, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async getDisbursementByIdempotencyKey(
    @Args('getDisbursementByIdempotencyKey')
    getDisbursementByIdempotencyKey: GetDisbursementByIdempotencyKey,
  ) {
    return await this.paymentGatewayService.getDisbursementByIdempotencyKey(
      getDisbursementByIdempotencyKey,
    );
  }

  @Query(() => GetBalance, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async getBalance() {
    return await this.paymentGatewayService.getBalance();
  }

  @Query(() => [GetBankInfo], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async getBankInfo() {
    return await this.paymentGatewayService.getBankInfo();
  }

  @Query(() => IsMaintenance, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async isMaintenance() {
    return await this.paymentGatewayService.isMaintenance();
  }
}
