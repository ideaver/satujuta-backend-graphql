import {
  Account,
  AccountCategory,
  Prisma,
  PrismaClient,
  Transaction,
} from '@prisma/client';
import { CreateOneAccountArgs } from 'src/@generated';
import { fakeTransaction, fakeTransactionComplete } from './fake-data';

const prisma = new PrismaClient();

async function main() {
  console.log('Start seeding ...');

  // await prisma.city.create({ data: { name: 'Surabaya' } }).then((city) => {
  //   console.log('city created ' + city);
  // });
  // await prisma.district
  //   .create({ data: { name: 'Surabaya Selatan' } })
  //   .then((district) => {
  //     console.log('district created ' + district);
  //   });
  // await prisma.postalCode
  //   .create({ data: { code: 4553247 } })
  //   .then((postalCode) => {
  //     console.log('postalCode created ' + postalCode);
  //   });

  //   await seedBank();
  await transactionCreateManySeed({
    userId: '119204a6-ba42-451e-9416-ea2c6bd1288f',
  });
}

main()
  .catch(async (e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

async function transactionCreateManySeed({
  userId,
}): Promise<Transaction | void> {
  const transactionCreateManyArgs: Prisma.TransactionCreateManyArgs = {
    data: [
      {
        amount: generateRandomRupiah(),
        status: 'COMPLETED',
        transactionCategory: 'COMISSION_BONUS',
        fromAccountId: 1,
        toAccountId: 2,
        createdAt: new Date(),
      },
    ],
  };

  return await prisma.transaction
    .createMany(transactionCreateManyArgs)
    .then((transaction) => {
      console.log('transaction created ' + JSON.stringify(transaction));
    })
    .catch((err) => {
      console.log(err);
    });
}

async function accountCreateOneSeed(
  accountCreateArgs: CreateOneAccountArgs,
): Promise<Account | void> {
  return await this.prisma.account
    .create(accountCreateArgs)
    .then((account) => {
      return account;
    })
    .catch((err) => {
      console.log(err);
    });
}

async function bankCreateOneSeed() {
  await this.prisma.bank
    .create({
      data: {
        name: 'BCA',
        accountNumber: 2572653525,
        logoUrl: 'https://www.google.com/jfdggfpg',
        account: {
          create: {
            name: 'BCA Bank Account',
            accountCategory: AccountCategory.PLATFORM,
            user: { connect: { id: '5bfa338c-dd73-4435-b9b9-701ad364a355' } },
          },
        },
      },
    })
    .then((bank) => {
      console.log('bank created ' + bank);
    });
}

function generateRandomRupiah(): number {
  const minAmount = 1000; // Minimum amount in Rupiah (e.g., Rp 1,000)
  const maxAmount = 10000000; // Maximum amount in Rupiah (e.g., Rp 10,000,000)

  // Generate a random number within the specified range
  const randomAmount = Math.random() * (maxAmount - minAmount) + minAmount;

  // Round the random amount to two decimal places
  const roundedAmount = Math.round(randomAmount * 100) / 100;

  return roundedAmount;
}
