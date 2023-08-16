import {
  Account,
  AccountCategory,
  Prisma,
  PrismaClient,
  Transaction,
} from '@prisma/client';
import { CreateOneAccountArgs } from 'src/@generated';
import { fakeTransaction, fakeTransactionComplete } from './fake-data';
import { faker } from '@faker-js/faker';

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
  // await transactionCreateManySeed({ numberOfTransactions: 10 });
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
  numberOfTransactions,
}): Promise<void> {
  const transactionsToCreate: Prisma.TransactionCreateManyInput[] = [];

  for (let i = 0; i < numberOfTransactions; i++) {
    transactionsToCreate.push({
      ...fakeTransaction(),
      amount: generateRandomRupiah(),
      fromAccountId: 3,
      toAccountId: 2,
      createdAt: faker.date.past(),
    });
  }

  const transactionCreateManyArgs: Prisma.TransactionCreateManyArgs = {
    data: transactionsToCreate,
  };

  try {
    const createdTransactions = await prisma.transaction.createMany(
      transactionCreateManyArgs,
    );
    console.log('Transactions created: ' + JSON.stringify(createdTransactions));
  } catch (err) {
    console.error(err);
  }
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
