import {
  Account,
  AccountCategory,
  PointType,
  Prisma,
  PrismaClient,
  Transaction,
  TransactionStatus,
  TransactionType,
  User,
  UserRole,
} from '@prisma/client';
import { CreateOneAccountArgs } from 'src/@generated';
import {
  fakeBank,
  fakeFaq,
  fakeTransaction,
  fakeTransactionComplete,
  fakePointTransaction,
} from './fake-data';
import { faker } from '@faker-js/faker';
import { AccountBalanceByCustomPeriodQuery } from 'src/services/account/dto/get-account-balance-by-custom-period.args';

import { join } from 'node:path';
import {
  conenctReferralCodeToReferralId,
  userCreateManySeed,
} from './seed-functions/user.seed';
import { getTopCitiesWithMostUsers } from './seed-functions/city.seed';

const prisma = new PrismaClient();

export enum Period {
  WEEKLY = 'weekly',
  MONTHLY = 'monthly',
  YEARLY = 'yearly',
}

async function main() {
  console.log('Start seeding ...');

  const topCitiesWithStudents = await getTopCitiesWithMostUsers();
  console.log('Top cities with most student users:', topCitiesWithStudents);

  // await prisma.user.deleteMany({
  //   where: {
  //     userRole: { not: { equals: UserRole.SUPERUSER } },
  //     accounts: { none: {} },
  //   },
  // });

  // getUserGrowthByCustomPeriod({
  //   period: Period.YEARLY,
  //   start: new Date('2017-01-01'),
  //   end: new Date('2023-12-31'),
  //   where: { userRole: { equals: UserRole.STUDENT } },
  // });

  // await userCreateManySeed({ numberOfUsers: 100 });

  // conenctReferralCodeToReferralId();

  // console.log(await prisma.pointTransaction.deleteMany());
  // await pointTransactionCreateManySeed({ numberOfPointTransaction: 500 });

  // const query = Prisma.sql`
  // WITH LatestBalances AS (
  //   SELECT
  //     userId,
  //     MAX(createdAt) AS latestTransactionDate
  //   FROM PointTransaction
  //   GROUP BY userId
  // )

  // SELECT
  //   pointGroup,
  //   COALESCE(userCount, 0) AS userCount,
  //   (COALESCE(userCount, 0) * 100.0 / NULLIF((SELECT COUNT(*) FROM User), 0)) AS percentage
  // FROM (
  //   SELECT
  //     CASE
  //       WHEN currentBalance <= 0 THEN '0 point'
  //       WHEN currentBalance > 0 AND currentBalance <= 30 THEN '>0<=30 points'
  //       WHEN currentBalance > 30 AND currentBalance <= 50 THEN '>30<=50 points'
  //       WHEN currentBalance > 50 AND currentBalance <= 100 THEN '>50<=100 points'
  //       WHEN currentBalance > 100 AND currentBalance <= 1000 THEN '>100<=1000 points'
  //       ELSE '>1000 points'
  //     END AS pointGroup,
  //     COUNT(*) AS userCount
  //   FROM User
  //   LEFT JOIN LatestBalances ON User.id = LatestBalances.userId
  //   LEFT JOIN PointTransaction ON User.id = PointTransaction.userId AND LatestBalances.latestTransactionDate = PointTransaction.createdAt
  //   GROUP BY pointGroup
  // ) AS grouped
  // ORDER BY pointGroup;

  //   `;

  // const result = await prisma.$queryRaw(query);
  // console.log(result);

  //   await seedBank();
  // await prisma.transaction.deleteMany();
  // await transactionCreateManySeed({ numberOfTransactions: 500 });
  // await bankCreateManySeed({ numberOfBanks: 5 });

  // const accountId = 2; // Replace with the actual account ID
  // const year = 2023; // Replace with the desired year

  // await getMonthlyAccountBalance(accountId, year);

  // const accountId = 1; // Replace with the actual account ID
  // const startDate = new Date('2022-01-01'); // Replace with the desired start date
  // const endDate = new Date('2023-12-31'); // Replace with the desired end date
  // const period = Period.MONTHLY; // Choose the desired period option

  // const accountBalances = await getAccountBalancesWithOptions(
  //   accountId,
  //   startDate,
  //   endDate,
  //   period,
  // );
  // console.log(accountBalances);

  // const totalBalance = await getAccountTotalBalance(accountId);
  // await faqCreateManyInput();

  // console.log(await prisma.invoice.deleteMany());
  // await populateProvinceCityDistricSubdistric();
  // await createItem();

  // await createSuperUser();
  // await createAdmin();

  console.log('Seeding finished.');
}

main()
  .catch((error) => {
    console.error(error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

// async function faqCreateManyInput() {
//   const numberOfFaq = 20;
//   const faqsToCreate: Prisma.FaqCreateManyInput[] = [];
//   for (let i = 0; i < numberOfFaq; i++) {
//     faqsToCreate.push(fakeFaq());
//   }
//   const query = await prisma.faq.createMany({ data: faqsToCreate });

//   console.log(query);
// }

// async function getAccountTotalBalance(accountId: number) {
//   const transactions = await prisma.transaction.findMany({
//     where: {
//       OR: [
//         { fromAccountId: accountId, status: TransactionStatus.COMPLETED },
//         { toAccountId: accountId, status: TransactionStatus.COMPLETED },
//       ],
//     },
//     select: {
//       amount: true,
//       fromAccountId: true,
//       toAccountId: true,
//     },
//   });

//   let totalBalance = 0;

//   for (const transaction of transactions) {
//     if (transaction.fromAccountId === accountId) {
//       totalBalance -= transaction.amount;
//     } else if (transaction.toAccountId === accountId) {
//       totalBalance += transaction.amount;
//     }
//   }

//   return totalBalance;
// }

// async function getAccountBalancesWithOptions(
//   accountId: number,
//   start: Date,
//   end: Date,
//   period: Period,
// ) {
//   const balances: AccountBalanceByCustomPeriodQuery[] = [];

//   let currentDate = new Date(start);

//   while (currentDate <= end) {
//     const transactions = await getTransactions(
//       accountId,
//       currentDate,
//       getNextPeriodDate(currentDate, period),
//     );

//     const formattedDate = currentDate.toLocaleDateString();

//     const monthlyBalance = calculateMonthlyBalance(transactions, accountId);

//     balances.push({
//       period: formattedDate,
//       totalBalance: monthlyBalance,
//     });

//     currentDate = getNextPeriodDate(currentDate, period);
//   }

//   return balances;
// }

// function calculateMonthlyBalance(
//   transactions: Transaction[],
//   accountId: number,
// ): number {
//   let monthlyBalance = 0;

//   for (const transaction of transactions) {
//     if (transaction.fromAccountId === accountId) {
//       monthlyBalance -= transaction.amount;
//     } else if (transaction.toAccountId === accountId) {
//       monthlyBalance += transaction.amount;
//     }
//   }

//   return monthlyBalance;
// }

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
      id: true,
      amount: true,
      proofUrl: true,
      status: true,
      transactionCategory: true,
      fromAccountId: true,
      toAccountId: true,
      createdAt: true,
      installmentId: true,
      invoiceId: true,
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
function generateRandomRupiah(): number {
  const minAmount = 1000; // Minimum amount in Rupiah (e.g., Rp 1,000)
  const maxAmount = 10000000; // Maximum amount in Rupiah (e.g., Rp 10,000,000)

  // Generate a random number within the specified range
  const randomAmount = Math.random() * (maxAmount - minAmount) + minAmount;

  // Round the random amount to two decimal places
  const roundedAmount = Math.round(randomAmount * 100) / 100;

  return roundedAmount;
}

async function transactionCreateManySeed({
  numberOfTransactions,
}): Promise<void> {
  const transactionsToCreate: Prisma.TransactionCreateManyInput[] = [];

  for (let i = 0; i < numberOfTransactions; i++) {
    transactionsToCreate.push({
      ...fakeTransaction(),
      amount: generateRandomRupiah(),
      fromAccountId: faker.datatype.number({ min: 1, max: 9 }),
      toAccountId: faker.datatype.number({ min: 1, max: 9 }),
      createdAt: faker.date.past(),
      uniqueCode: faker.datatype.number({ min: 100, max: 700 }),
      proofUrl: faker.image.imageUrl(),
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

// async function bankCreateManySeed({ numberOfBanks }): Promise<void> {
//   const banksToCreate: Prisma.BankCreateManyInput[] = [];

//   for (let i = 0; i < numberOfBanks; i++) {
//     banksToCreate.push({
//       name: faker.finance.accountName(),
//       accountNumber: faker.datatype.number({
//         min: 1000000000,
//         max: 9999999999,
//       }),
//       logoUrl: faker.image.imageUrl(),
//       accountId:
//     });
//   }

//   const bankCreateManyArgs: Prisma.BankCreateManyArgs = {
//     data: banksToCreate,
//   };

//   try {
//     const createdBanks = await prisma.bank.createMany(bankCreateManyArgs);
//     console.log('Banks created: ' + JSON.stringify(createdBanks));
//   } catch (err) {
//     console.error(err);
//   }
// }

async function pointTransactionCreateManySeed({
  numberOfPointTransaction,
}: {
  numberOfPointTransaction: number;
}): Promise<void> {
  const pointTransactionToCreate: Prisma.PointTransactionCreateManyInput[] = [];

  const users: User[] = await prisma.user.findMany();

  // for (const user of users) {
  //   const res = await prisma.pointTransaction.create({
  //     data: {
  //       currentBalance: 1,
  //       amount: 1,
  //       User: { connect: { id: user.id } },
  //       pointType: 'REFERRING',
  //       transactionType: 'CREDIT',
  //     },
  //   });
  // }

  for (let i = 0; i < numberOfPointTransaction; i++) {
    const userIndex = i % users.length;
    const referOrRedeem = faker.helpers.arrayElement([
      PointType.REFERRING,
      PointType.REDEEMING,
    ] as const);
    const debitOrCredit =
      referOrRedeem === PointType.REFERRING
        ? TransactionType.CREDIT
        : TransactionType.DEBIT;
    const amount = faker.datatype.number({ min: 1, max: 500 });
    const amountDebitCredit =
      debitOrCredit === TransactionType.CREDIT ? amount : -amount;

    const res = await prisma.pointTransaction
      .findFirst({
        where: {
          User: {
            id: users[userIndex].id,
          },
        },
        orderBy: [{ id: 'desc' }],
        take: 1,
      })
      .then((res) => (res ? res.currentBalance : 0));

    await prisma.pointTransaction.create({
      data: {
        pointType: referOrRedeem,
        userId: users[userIndex].id,
        transactionType: debitOrCredit,
        amount: amountDebitCredit,
        currentBalance: res + amountDebitCredit,
      },
    });

    console.log('Iteration: ' + i);
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
