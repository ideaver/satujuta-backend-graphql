import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PaymentGatewayService } from './payment-gateway.service';
import { GetAllDisbursementArgs } from './dto/get-all-disbursement.args';
import { GetAllDisbursement } from './entities/get-all-disbursement.entity';
import { CreateDisbursementArgs } from './dto/create-disbursement.args';
import { GetDisbursementByIdArgs } from './dto/get-disbursement-by-id.args';
import { GetDisbursementByIdempotencyKeyArgs } from './dto/get-disbursement-by-idempotency-key.args';
import { GetBalance } from './entities/get-balance.entity';
import { GetBankInfo } from './entities/get-bank-info.entity';
import { IsMaintenance } from './entities/is-maintenance.entity';
import { BankAccountInquiry } from './entities/bank-account-inquiry.entity';
import { BankAccountInquiryArgs } from './dto/bank-account-inquiry.args';
import { Disbursement } from 'src/@generated';
import { CreateBillArgs } from './dto/create-bill.args';
import { BillEntity } from './entities/create-bill.entity';

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
    @Args('getDisbursementByIdArgs')
    getDisbursementByIdArgs: GetDisbursementByIdArgs,
  ) {
    return await this.paymentGatewayService.getDisbursementById(
      getDisbursementByIdArgs,
    );
  }

  @Query(() => Disbursement, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async getDisbursementByIdempotencyKey(
    @Args('getDisbursementByIdempotencyKeyArgs')
    getDisbursementByIdempotencyKeyArgs: GetDisbursementByIdempotencyKeyArgs,
  ) {
    return await this.paymentGatewayService.getDisbursementByIdempotencyKey(
      getDisbursementByIdempotencyKeyArgs,
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

  @Query(() => BankAccountInquiry, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async bankAccountInquiry(
    @Args('bankAccountInquiryArgs')
    bankAccountInquiryArgs: BankAccountInquiryArgs,
  ) {
    return await this.paymentGatewayService.bankAccountInquiry(
      bankAccountInquiryArgs,
    );
  }

  @Mutation(() => BillEntity, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async createBill(
    @Args('createBillArgs') createBillArgs: CreateBillArgs,
  ): Promise<CreateBillArgs | void> {
    return await this.paymentGatewayService.createBill(createBillArgs);
  }
}
