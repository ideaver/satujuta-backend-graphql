import { PrismaClient, UserRole } from '@prisma/client';

const prisma = new PrismaClient();

export async function createItem() {
  console.log(
    await prisma.item.createMany({
      data: [
        {
          name: 'Paket PREMIUM SatuJuta Membership',
          description: 'Berlisensi PT. SatuJuta Kampung Inggris',
          price: 1000000,
          cost: 300000,
          userRole: UserRole.MEMBER,
        },
        {
          name: 'Registrasi Siswa',
          description: '',
          price: 1000000,
          cost: 300000,
          userRole: UserRole.STUDENT,
        },
      ],
    }),
  );
}
