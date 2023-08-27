import {
  Prisma,
  PrismaClient,
  Theme,
  UserRole,
  UserStatus,
  UserType,
} from '@prisma/client';
import { faker } from '@faker-js/faker';
import {
  UserCreatedByCustomPeriodArgs,
  UserCreatedByCustomPeriodQuery,
} from 'src/services/user/dto/get-user-created-by-custom-period.args';
import { getNextPeriodDate } from 'src/utils/get-next-period.function';

const prisma = new PrismaClient();

export enum Period {
  WEEKLY = 'weekly',
  MONTHLY = 'monthly',
  YEARLY = 'yearly',
}

export async function userCreateManySeed({ numberOfUsers }): Promise<void> {
  const usersToCreate: Prisma.UserCreateManyInput[] = [];

  for (let i = 0; i < numberOfUsers; i++) {
    const userRoleHelper = faker.helpers.arrayElement([
      UserRole.MEMBER,
      UserRole.STUDENT,
    ] as const);
    const schoolHelper = await prisma.school.create({
      select: { id: true },
      data: {
        name: faker.name.jobArea(),
        addressId: (
          await prisma.address.create({
            select: { id: true },
            data: {
              name: faker.address.streetAddress(),
              subdistrict: {
                connect: {
                  id: faker.datatype.number({ min: 2000, max: 80000 }),
                },
              },
            },
          })
        ).id,
      },
    });

    usersToCreate.push({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      addressId: (
        await prisma.address.create({
          select: { id: true },
          data: {
            name: faker.address.streetAddress(),
            subdistrict: {
              connect: { id: faker.datatype.number({ min: 1, max: 80000 }) },
            },
          },
        })
      ).id,
      userRole: userRoleHelper,
      userType: faker.helpers.arrayElement([
        UserType.PARENT,
        UserType.SCHOOL_HEAD,
        UserType.STUDENT,
        UserType.TEACHER,
        UserType.HOUSEWIFE,
        UserType.ENTREPRENEUR,
        UserType.WORKER,
        UserType.OTHER,
      ] as const),
      avatarUrl: faker.image.avatar(),
      whatsappNumber: faker.phone.number('628##########'),
      password: faker.lorem.word(5),
      referralCode: generateRandomReferralCode(),
      status: faker.helpers.arrayElement([
        UserStatus.PENDING,
        UserStatus.INACTIVE,
        UserStatus.PENDING,
      ] as const),
      schoolId:
        userRoleHelper === UserRole.STUDENT ? schoolHelper.id : undefined,
      createdAt: faker.date.past(5),
      theme: Theme.LIGHT,
    });

    //console log the iteration below
    console.log('User ' + i + ' pushed to array');
  }

  const userCreateManyArgs: Prisma.UserCreateManyArgs = {
    data: usersToCreate,
  };

  try {
    const createdUsers = await prisma.user.createMany(userCreateManyArgs);
    console.log('Users created: ' + JSON.stringify(createdUsers));
  } catch (err) {
    console.error(err);
  }
}

export async function conenctReferralCodeToReferralId() {
  const users = await prisma.user.findMany({
    select: { id: true, _count: { select: { referredUsers: true } } },
    orderBy: {
      referredUsers: { _count: 'desc' },
      // where: { referredUsers: { every: {re} } },
    },
  });

  console.log(users.length);

  if (users.length > 10) {
    for (let i = 0; i < users.length; i++) {
      await prisma.user.update({
        data: {
          referredUsers: {
            connect: {
              id: faker.helpers.arrayElement(users.map((user) => user.id)),
            },
          },
        },
        where: { id: users[i].id },
      });

      console.log('User ' + i + ' of ' + users.length + ' user connected');
    }

    conenctReferralCodeToReferralId();
  }
}

export function generateRandomReferralCode(): string {
  const codeLength = 5;
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let referralCode = '';

  // Generate the first part of the referral code using random characters
  for (let i = 0; i < codeLength - 1; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    referralCode += characters[randomIndex];
  }

  // Generate the second part of the referral code using the last digit of the current timestamp
  const timestampPart = Date.now().toString();
  referralCode += timestampPart[timestampPart.length - 1];

  return referralCode.toLowerCase();
}

// async function createSuperUser() {
//   await prisma.user.create({
//     data: {
//       firstName: 'Dikki',
//       lastName: 'Setiawan',
//       email: 'alvaminddigital@gmail.com',
//       password: '234325',
//       theme: 'LIGHT',
//       userRole: 'SUPERUSER',
//       userType: 'OTHER',
//       whatsappNumber: '6289683743880',
//       avatarUrl: faker.image.avatar(),
//       referralCode: generateRandomReferralCode(),
//       address: {
//         create: {
//           name: 'www.alvamind.com',
//           province: {
//             connect: {
//               id: 1,
//             },
//           },
//           city: {
//             connect: {
//               id: 1,
//             },
//           },
//           district: {
//             connect: {
//               id: 1,
//             },
//           },
//           subdistrict: {
//             connect: {
//               id: 1,
//             },
//           },
//         },
//       },
//     },
//   });
// }

// async function createAdmin() {
//   await prisma.user.create({
//     data: {
//       firstName: 'Sumarno',
//       lastName: 'Setiawan',
//       email: 'alvaminddigital@gmail.com',
//       password: '234325',
//       theme: 'LIGHT',
//       userRole: 'ADMIN',
//       userType: 'OTHER',
//       whatsappNumber: '62839683743880',
//       avatarUrl: faker.image.avatar(),
//       referralCode: generateRandomReferralCode(),
//       address: {
//         create: {
//           name: 'www.alvamind.com',
//           province: {
//             connect: {
//               id: 1,
//             },
//           },
//           city: {
//             connect: {
//               id: 1,
//             },
//           },
//           district: {
//             connect: {
//               id: 1,
//             },
//           },
//           subdistrict: {
//             connect: {
//               id: 1,
//             },
//           },
//         },
//       },
//     },
//   });
// }
