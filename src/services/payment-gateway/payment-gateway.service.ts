import { Injectable, Logger } from '@nestjs/common';
import { GetAllDisbursementArgs } from './dto/get-all-disbursement.args';
import axios from 'axios';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { CreateDisbursementArgs } from './dto/create-disbursement.args';
import { GetDisbursementByIdArgs } from './dto/get-disbursement-by-id.args';
import { GetDisbursementByIdempotencyKeyArgs } from './dto/get-disbursement-by-idempotency-key.args';
import { BankAccountInquiryArgs } from './dto/bank-account-inquiry.args';
import { CreateBillArgs } from './dto/create-bill.args';
import { UpdateBillArgs } from './dto/update-bill.args';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';

@Injectable()
export class PaymentGatewayService {
  private base_url_v2 = 'https://bigflip.id/big_sandbox_api/v2';
  private base_url_v3 = 'https://bigflip.id/big_sandbox_api/v3';
  private apiKey =
    'JDJ5JDEzJDNZVjRSVHE3TkZBUy9INFMyZlVrSGVXVzNyOE5HL0NGVlNudjU2d3VaUVQ3VEtTNVd3aXRP';
  private password = 'bigflip123';

  private readonly logger = new Logger(PaymentGatewayService.name);

  async createDisbursement(createDisbursementArgs: CreateDisbursementArgs) {
    this.logger.log(createDisbursementArgs);

    try {
      const { account_number, bank_code, amount } = createDisbursementArgs;
      const idempotency_key = Math.random().toString(36).substring(2, 15);
      this.logger.log(idempotency_key);

      const response = await axios.post(
        `${this.base_url_v3}/disbursement`,
        {
          account_number,
          bank_code,
          amount,
        },
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'idempotency-key': idempotency_key,
          },
          auth: {
            username: `${this.apiKey}`,
            password: `${this.password}`,
          },
        },
      );

      this.logger.log(response.data);

      return response.data;
    } catch (error) {
      this.logger.log(error);
      if (error.response && error.response.data) {
        const errMessage = error.response.data.errors
          .map((err) => err.message)
          .join(', ');
        const originalCode = error.response.data.errors[0].code;
        const newCode = Number(`7${originalCode}`);

        throw new IGraphQLError({
          code: newCode,
          err: errMessage,
        });
      } else {
        throw new IGraphQLError({
          code: 7999,
        });
      }
    }
  }

  async getAllDisbursement(getAllDisbursementArgs: GetAllDisbursementArgs) {
    this.logger.log(getAllDisbursementArgs);
    try {
      const { pagination, page, sort } = getAllDisbursementArgs;

      const params = `pagination=${pagination ? pagination : 20}&page=${
        page ? page : 1
      }&sort=${sort ? sort : 'id'}`;
      const response = await axios.get(
        `${this.base_url_v3}/disbursement?${params}`,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          auth: {
            username: `${this.apiKey}`,
            password: `${this.password}`,
          },
        },
      );

      this.logger.log(response.data);

      return response.data;
    } catch (error) {
      this.logger.log(error);
      if (error.response && error.response.data) {
        const errMessage = error.response.data.errors
          .map((err) => err.message)
          .join(', ');
        const originalCode = error.response.data.errors[0].code;
        const newCode = Number(`7${originalCode}`);

        throw new IGraphQLError({
          code: newCode,
          err: errMessage,
        });
      } else {
        throw new IGraphQLError({
          code: 7999,
        });
      }
    }
  }

  async getDisbursementById(getDisbursementByIdArgs: GetDisbursementByIdArgs) {
    this.logger.log(getDisbursementByIdArgs);
    try {
      const { id } = getDisbursementByIdArgs;

      const response = await axios.get(
        `${this.base_url_v3}/get-disbursement?id=${id}`,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          auth: {
            username: `${this.apiKey}`,
            password: `${this.password}`,
          },
        },
      );

      this.logger.log(response.data);

      return response.data;
    } catch (error) {
      this.logger.log(error);
      if (error.response && error.response.data) {
        const errMessage = error.response.data.errors
          .map((err) => err.message)
          .join(', ');
        const originalCode = error.response.data.errors[0].code;
        const newCode = Number(`7${originalCode}`);

        throw new IGraphQLError({
          code: newCode,
          err: errMessage,
        });
      } else {
        throw new IGraphQLError({
          code: 7999,
        });
      }
    }
  }

  async getDisbursementByIdempotencyKey(
    getDisbursementByIdempotencyKeyArgs: GetDisbursementByIdempotencyKeyArgs,
  ) {
    this.logger.log(getDisbursementByIdempotencyKeyArgs);
    try {
      const { idempotency_key } = getDisbursementByIdempotencyKeyArgs;

      const response = await axios.get(
        `${this.base_url_v3}/get-disbursement?idempotency-key=${idempotency_key}`,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          auth: {
            username: `${this.apiKey}`,
            password: `${this.password}`,
          },
        },
      );

      this.logger.log(response.data);

      return response.data;
    } catch (error) {
      this.logger.log(error);
      if (error.response && error.response.data) {
        const errMessage = error.response.data.errors
          .map((err) => err.message)
          .join(', ');
        const originalCode = error.response.data.errors[0].code;
        const newCode = Number(`7${originalCode}`);

        throw new IGraphQLError({
          code: newCode,
          err: errMessage,
        });
      } else {
        throw new IGraphQLError({
          code: 7999,
        });
      }
    }
  }

  async getBalance() {
    try {
      const response = await axios.get(`${this.base_url_v2}/general/balance`, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        auth: {
          username: `${this.apiKey}`,
          password: `${this.password}`,
        },
      });

      this.logger.log(response.data);

      return response.data;
    } catch (error) {
      this.logger.log(error);
      if (error.response && error.response.data) {
        const errMessage = error.response.data.errors
          .map((err) => err.message)
          .join(', ');
        const originalCode = error.response.data.errors[0].code;
        const newCode = Number(`7${originalCode}`);

        throw new IGraphQLError({
          code: newCode,
          err: errMessage,
        });
      } else {
        throw new IGraphQLError({
          code: 7999,
        });
      }
    }
  }

  async getBankInfo() {
    try {
      const response = await axios.get(`${this.base_url_v2}/general/banks`, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        auth: {
          username: `${this.apiKey}`,
          password: `${this.password}`,
        },
      });

      this.logger.log(response.data);

      return response.data;
    } catch (error) {
      this.logger.log(error);
      if (error.response && error.response.data) {
        const errMessage = error.response.data.errors
          .map((err) => err.message)
          .join(', ');
        const originalCode = error.response.data.errors[0].code;
        const newCode = Number(`7${originalCode}`);

        throw new IGraphQLError({
          code: newCode,
          err: errMessage,
        });
      } else {
        throw new IGraphQLError({
          code: 7999,
        });
      }
    }
  }

  async isMaintenance() {
    try {
      const response = await axios.get(
        `${this.base_url_v2}/general/maintenance`,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          auth: {
            username: `${this.apiKey}`,
            password: `${this.password}`,
          },
        },
      );

      this.logger.log(response.data);

      return response.data;
    } catch (error) {
      this.logger.log(error);
      if (error.response && error.response.data) {
        const errMessage = error.response.data.errors
          .map((err) => err.message)
          .join(', ');
        const originalCode = error.response.data.errors[0].code;
        const newCode = Number(`7${originalCode}`);

        throw new IGraphQLError({
          code: newCode,
          err: errMessage,
        });
      } else {
        throw new IGraphQLError({
          code: 7999,
        });
      }
    }
  }

  async bankAccountInquiry(bankAccountInquiryArgs: BankAccountInquiryArgs) {
    this.logger.log(bankAccountInquiryArgs);
    try {
      const { account_number, bank_code, inquiry_key } = bankAccountInquiryArgs;

      const response = await axios.post(
        `${this.base_url_v2}/disbursement/bank-account-inquiry`,
        {
          account_number,
          bank_code,
          inquiry_key,
        },
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          auth: {
            username: `${this.apiKey}`,
            password: `${this.password}`,
          },
        },
      );

      this.logger.log(response.data);

      return response.data;
    } catch (error) {
      this.logger.log(error);
      if (error.response && error.response.data) {
        const errMessage = error.response.data.errors
          .map((err) => err.message)
          .join(', ');
        const originalCode = error.response.data.errors[0].code;
        const newCode = Number(`7${originalCode}`);

        throw new IGraphQLError({
          code: newCode,
          err: errMessage,
        });
      } else {
        throw new IGraphQLError({
          code: 7999,
        });
      }
    }
  }

  async createBill(createBillArgs: CreateBillArgs) {
    this.logger.log(createBillArgs);
    try {
      const response = await axios.post(
        `${this.base_url_v2}/pwf/bill`,
        {
          ...createBillArgs,
        },
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          auth: {
            username: `${this.apiKey}`,
            password: `${this.password}`,
          },
        },
      );

      this.logger.log(response.data);

      return response.data;
    } catch (error) {
      this.logger.log(error);
      if (error.response && error.response.data) {
        const originalCode = error.response.data.errors[0].code;
        const newCode = Number(`7${originalCode}`);

        throw new IGraphQLError({
          code: newCode,
        });
      } else {
        throw new IGraphQLError({
          code: 7999,
        });
      }
    }
  }

  async updateBill(updateBillArgs: UpdateBillArgs) {
    try {
      const { bill_id, ...sliceUpdateBillArgs } = updateBillArgs;

      this.logger.log(sliceUpdateBillArgs);

      const response = await axios.put(
        `${this.base_url_v2}/pwf/${bill_id}/bill`,
        {
          ...sliceUpdateBillArgs,
        },
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          auth: {
            username: `${this.apiKey}`,
            password: `${this.password}`,
          },
        },
      );

      this.logger.log(response.data);

      return response.data;
    } catch (error) {
      if (error.response && error.response.data) {
        const originalCode = error.response.data.errors[0].code;
        const newCode = Number(`7${originalCode}`);

        console.log(newCode);

        throw new IGraphQLError({
          code: newCode,
        });
      } else {
        throw new IGraphQLError({
          code: 7999,
        });
      }
    }
  }
}
