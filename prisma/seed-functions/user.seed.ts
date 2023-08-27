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
