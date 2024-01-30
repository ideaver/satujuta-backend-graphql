import { Injectable, Logger } from '@nestjs/common';
import { GetAllDisbursementArgs } from './dto/get-all-disbursement.args';
import axios from 'axios';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { CreateDisbursementArgs } from './dto/create-disbursement.args';
import { GetDisbursementById } from './dto/get-disbursement-by-id.args';
import { GetDisbursementByIdempotencyKey } from './dto/get-disbursement-by-idempotency-key.args';

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

  async getDisbursementById(getDisbursementById: GetDisbursementById) {
    this.logger.log(getDisbursementById);
    try {
      const { id } = getDisbursementById;

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
    getDisbursementByIdempotencyKey: GetDisbursementByIdempotencyKey,
  ) {
    this.logger.log(getDisbursementByIdempotencyKey);
    try {
      const { idempotency_key } = getDisbursementByIdempotencyKey;

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
}
