import {
  Account,
  AccountCategory,
  Prisma,
  PrismaClient,
  Transaction,
  TransactionStatus,
} from '@prisma/client';
import { CreateOneAccountArgs } from 'src/@generated';
import { fakeTransaction, fakeTransactionComplete } from './fake-data';
import { faker } from '@faker-js/faker';
import { AccountBalanceByCustomPeriodQuery as AccountBalanceByCustomPeriodQuery } from 'src/services/transaction/dto/get-account-balance-by-custom-period.args';

const prisma = new PrismaClient();

enum Period {
  WEEKLY = 'weekly',
  MONTHLY = 'monthly',
  YEARLY = 'yearly',
}

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

  // const accountId = 2; // Replace with the actual account ID
  // const year = 2023; // Replace with the desired year

  // await getMonthlyAccountBalance(accountId, year);

  const accountId = 3; // Replace with the actual account ID
  const startDate = new Date('2022-01-01'); // Replace with the desired start date
  const endDate = new Date('2023-12-31'); // Replace with the desired end date
  const period = Period.MONTHLY; // Choose the desired period option

  const accountBalances = await getAccountBalancesWithOptions(
    accountId,
    startDate,
    endDate,
    period,
  );
  console.log(accountBalances);
}

async function getAccountBalancesWithOptions(
  accountId: number,
  start: Date,
  end: Date,
  period: Period,
) {
  const balances: AccountBalanceByCustomPeriodQuery[] = [];

  let currentDate = new Date(start);

  while (currentDate <= end) {
    const transactions = await getTransactions(
      accountId,
      currentDate,
      getNextPeriodDate(currentDate, period),
    );

    const formattedDate = currentDate.toLocaleDateString();

    const monthlyBalance = transactions.reduce((balance, transaction) => {
      if (transaction.fromAccountId === accountId) {
        balance -= transaction.amount;
      } else if (transaction.toAccountId === accountId) {
        balance += transaction.amount;
      }
      return balance;
    }, 0);

    balances.push({
      period: formattedDate,
      total_balance: monthlyBalance,
    });

    currentDate = getNextPeriodDate(currentDate, period);
  }

  return balances;
}

async function getTransactions(
  accountId: number,
  startDate: Date,
  endDate: Date,
) {
  return prisma.transaction.findMany({
    where: {
      OR: [
        {
          fromAccountId: accountId,
          createdAt: { gte: startDate, lt: endDate },
          status: TransactionStatus.COMPLETED,
        },
        {
          toAccountId: accountId,
          createdAt: { gte: startDate, lt: endDate },
          status: TransactionStatus.COMPLETED,
        },
      ],
    },
    select: {
      amount: true,
      fromAccountId: true,
      toAccountId: true,
      createdAt: true,
    },
  });
}

function getNextPeriodDate(currentDate: Date, period: Period): Date {
  const nextDate = new Date(currentDate);

  if (period === Period.WEEKLY) {
    nextDate.setDate(currentDate.getDate() + 7);
  } else if (period === Period.MONTHLY) {
    nextDate.setMonth(currentDate.getMonth() + 1);
  } else if (period === Period.YEARLY) {
    nextDate.setFullYear(currentDate.getFullYear() + 1);
  }

  return nextDate;
}

// async function getMonthlyAccountBalance(accountId: number, year: number) {
//   const balances: AccountMonthlyBalanceQuery[] = [];

//   for (let month = 1; month <= 12; month++) {
//     const startDate = new Date(year, month - 1, 1);
//     const endDate = new Date(year, month, 0);

//     const transactions = await prisma.transaction.findMany({
//       where: {
//         OR: [
//           {
//             fromAccountId: accountId,
//             createdAt: { gte: startDate, lt: endDate },
//           },
//           {
//             toAccountId: accountId,
//             createdAt: { gte: startDate, lt: endDate },
//           },
//         ],
//       },
//       select: {
//         amount: true,
//         fromAccountId: true,
//         toAccountId: true,
//       },
//     });

//     const monthlyBalance = transactions.reduce((balance, transaction) => {
//       if (transaction.fromAccountId === accountId) {
//         balance -= transaction.amount;
//       } else if (transaction.toAccountId === accountId) {
//         balance += transaction.amount;
//       }
//       return balance;
//     }, 0);

//     const monthName = new Date(year, month - 1).toLocaleString('default', {
//       month: 'long',
//     });

//     balances.push({
//       month: `${monthName} ${year}`,
//       total_balance: monthlyBalance,
//     });
//   }
//   console.log(balances);
//   return balances;
// }

main()
  .catch((error) => {
    console.error(error);
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
