import { Module } from '@nestjs/common';
import { PaymentGatewayService } from './payment-gateway.service';
import { PaymentGatewayResolver } from './payment-gateway.resolver';
import { PaymentGatewayController } from './payment-gateway.controller';

@Module({
  exports: [PaymentGatewayController],
  providers: [
    PaymentGatewayResolver,
    PaymentGatewayService,
    PaymentGatewayController,
  ],
})
export class PaymentGatewayModule {}
