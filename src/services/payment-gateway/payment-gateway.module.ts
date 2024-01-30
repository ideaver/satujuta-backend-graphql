import { Module } from '@nestjs/common';
import { PaymentGatewayService } from './payment-gateway.service';
import { PaymentGatewayResolver } from './payment-gateway.resolver';

@Module({
  exports: [PaymentGatewayService],
  providers: [PaymentGatewayResolver, PaymentGatewayService],
})
export class PaymentGatewayModule {}
