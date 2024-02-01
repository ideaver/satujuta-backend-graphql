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
import { UpdateBillArgs } from './dto/update-bill.args';
import { GetAllPayment, GetPayment } from './entities/payment.entity';
import { GetAllPaymentArgs, GetPaymentArgs } from './dto/payment.args';

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
  ): Promise<BillEntity | void> {
    return await this.paymentGatewayService.createBill(createBillArgs);
  }

  @Mutation(() => BillEntity, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async updateBill(
    @Args('updateBillArgs') updateBillArgs: UpdateBillArgs,
  ): Promise<BillEntity | void> {
    return await this.paymentGatewayService.updateBill(updateBillArgs);
  }

  @Query(() => BillEntity, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async getBill(@Args('bill_id') bill_id: string): Promise<BillEntity | void> {
    return await this.paymentGatewayService.getBill(bill_id);
  }

  @Query(() => [BillEntity], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async getAllBill(): Promise<BillEntity[] | void> {
    return await this.paymentGatewayService.getAllBill();
  }

  @Query(() => GetPayment, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async getPayment(
    @Args('getPaymentArgs') getPaymentArgs: GetPaymentArgs,
  ): Promise<GetPayment | void> {
    return await this.paymentGatewayService.getPayment(getPaymentArgs);
  }

  @Query(() => GetAllPayment, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async getAllPayment(
    @Args('getAllPaymentArgs') getAllPaymentArgs: GetAllPaymentArgs,
  ): Promise<GetAllPayment | void> {
    return await this.paymentGatewayService.getAllPayment(getAllPaymentArgs);
  }
}
