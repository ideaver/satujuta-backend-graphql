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
import { GetAllPaymentArgs, GetPaymentArgs } from './dto/payment.args';
import { GetBankInfo } from './entities/get-bank-info.entity';

@Injectable()
export class PaymentGatewayService {
  private base_url_v2 = 'https://bigflip.id/big_sandbox_api/v2';
  private base_url_v3 = 'https://bigflip.id/big_sandbox_api/v3';
  private apiKey =
    'JDJ5JDEzJDAuTGtBaEVxckwubWw4S3RzTHBjYU9LdThpTU43L1NQSmJ0eGs0cnhDVktKelBpd3ZxYkVD';
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

  async getBankInfo(): Promise<GetBankInfo[]> {
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

  async getBill(bill_id: string) {
    try {
      const response = await axios.get(
        `${this.base_url_v2}/pwf/${bill_id}/bill`,
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

  async getAllBill() {
    try {
      const response = await axios.get(`${this.base_url_v2}/pwf/bill`, {
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

  async getPayment(getPaymentArgs: GetPaymentArgs) {
    try {
      const {
        bill_id,
        pagination,
        page,
        sort_by,
        sort_type,
        start_date,
        end_date,
      } = getPaymentArgs;

      let params = '';
      if (pagination) params += `pagination=${pagination}&`;
      if (page) params += `page=${page}&`;
      if (sort_by) params += `sort_by=${sort_by}&`;
      if (sort_type) params += `sort_type=${sort_type}&`;
      if (start_date) params += `start_date=${start_date}&`;
      if (end_date) params += `end_date=${end_date}&`;

      // Remove the last trailing '&'
      params = params.slice(0, -1);

      const response = await axios.get(
        `${this.base_url_v2}/pwf/${bill_id}/payment?${params}`,
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

  async getAllPayment(getAllPaymentArgs: GetAllPaymentArgs) {
    try {
      const {
        pagination,
        page,
        sort_by,
        sort_type,
        start_date,
        end_date,
        reference_id,
      } = getAllPaymentArgs;

      let params = '';
      if (pagination) params += `pagination=${pagination}&`;
      if (page) params += `page=${page}&`;
      if (sort_by) params += `sort_by=${sort_by}&`;
      if (sort_type) params += `sort_type=${sort_type}&`;
      if (start_date) params += `start_date=${start_date}&`;
      if (end_date) params += `end_date=${end_date}&`;
      if (reference_id) params += `reference_id=${reference_id}&`;

      // Remove the last trailing '&'
      params = params.slice(0, -1);

      const response = await axios.get(
        `${this.base_url_v2}/pwf/payment?${params}`,
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
