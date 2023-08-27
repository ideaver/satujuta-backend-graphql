import {
  Prisma,
  PrismaClient,
  Theme,
  UserRole,
  UserStatus,
  UserType,
} from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

export async function userCreateManySeed({ numberOfUsers }): Promise<void> {
  const usersToCreate: Prisma.UserCreateManyInput[] = [];

  for (let i = 0; i < numberOfUsers; i++) {
    usersToCreate.push({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      addressId: (
        await prisma.address.create({
          select: { id: true },
          data: {
            name: faker.address.streetAddress(),
            province: {
              connect: { id: faker.datatype.number({ min: 1, max: 34 }) },
            },
            city: {
              connect: { id: faker.datatype.number({ min: 1, max: 450 }) },
            },
            district: {
              connect: { id: faker.datatype.number({ min: 1, max: 6500 }) },
            },
            subdistrict: {
              connect: { id: faker.datatype.number({ min: 1, max: 80000 }) },
            },
          },
        })
      ).id,
      userRole: UserRole.MEMBER,
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
      avatarUrl: undefined,
      whatsappNumber: faker.lorem.words(5),
      whatsappVerifiedAt: undefined,
      password: faker.lorem.words(5),
      referralCode: faker.lorem.words(5),
      referredById: undefined,
      status: UserStatus.PENDING,
      schoolId: undefined,
      createdAt: new Date(),
      updatedAt: faker.datatype.datetime(),
      deletedAt: undefined,
      theme: Theme.LIGHT,
    });
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
