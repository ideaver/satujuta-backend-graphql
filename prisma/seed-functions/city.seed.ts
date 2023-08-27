import { PrismaClient, UserRole, UserStatus } from '@prisma/client';

const prisma = new PrismaClient();

export async function getTopCitiesWithMostUsers() {
  const topCities = await prisma.city.findMany({
    where: {
      districts: {
        some: {
          subdistricts: {
            some: {
              address: {
                some: {
                  user: {
                    userRole: UserRole.MEMBER,
                    status: { equals: UserStatus.PENDING },
                  },
                },
              },
            },
          },
        },
      },
    },
    select: {
      id: true,
      name: true,
      districts: {
        select: {
          subdistricts: {
            select: {
              address: {
                select: {
                  user: {
                    select: {
                      userRole: true,
                      status: true,
                    },
                    // where: {
                    //   userRole: UserRole.STUDENT,
                    //   status: { equals: 'ACTIVE' },
                    // },
                  },
                },
              },
            },
          },
        },
      },
    },
  });

  console.log(topCities.length);

  const citiesWithUserCounts = topCities
    .map((city) => {
      const userCount = city.districts.reduce((acc, district) => {
        return (
          acc +
          district.subdistricts.reduce((subAcc, subdistrict) => {
            const userAddresses = subdistrict.address.filter(
              (addr) =>
                addr.user !== null &&
                addr.user.userRole === UserRole.MEMBER &&
                addr.user.status === UserStatus.PENDING,
            );
            return subAcc + userAddresses.length;
          }, 0)
        );
      }, 0);

      return {
        cityId: city.id,
        cityName: city.name,
        userCount: userCount,
      };
    })
    .sort((a, b) => b.userCount - a.userCount) // Sort by student count in descending order
    .slice(0, 10); // Take the top 10 cities

  return citiesWithUserCounts;
}
