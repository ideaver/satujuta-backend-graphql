import { Injectable } from '@nestjs/common';
import { PaymentGatewayService } from './payment-gateway.service';
import { GetAllDisbursementArgs } from './dto/get-all-disbursement.args';

@Injectable()
export class PaymentGatewayController {
  constructor(private readonly paymentGatewayService: PaymentGatewayService) {}

  create(createPaymentGatewayInput) {
    return 'This action adds a new paymentGateway';
  }

  findAll() {
    return `This action returns all paymentGateway`;
  }

  async getAllDisbursement(getAllDisbursementArgs: GetAllDisbursementArgs) {
    return await this.paymentGatewayService.getAllDisbursement(
      getAllDisbursementArgs,
    );
  }

  update(id, updatePaymentGatewayInput) {
    return `This action updates a #${id} paymentGateway`;
  }

  remove(id) {
    return `This action removes a #${id} paymentGateway`;
  }
}
