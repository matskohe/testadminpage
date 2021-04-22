import { PrismaClient, UserCreateInput } from "@prisma/client";

const prisma = new PrismaClient({ log: ["query"] });


async function main() {
  // Create a single new record
  const elsa = await prisma.testuser.create({
    data: {
      email: "elsa@prisma.io",
      name: "Elsa Prisma",
      content: "abcdefg",
    },
  });

  let users: UserCreateInput[] = [
    {
      email: "john@prisma.io",
      name: "john Prisma",
      content: "1234567890",
    },
    {
      email: "andrea@prisma.io",
      name: "andrea Prisma",
      content: "あいうえお",
    },
    {
      email: "connie@prisma.io",
      name: "connie Prisma",
      content: "!ﾀﾞﾌﾞﾙｸｵｰﾄ, ﾊｯｼｭﾀｸﾞ$",
    },
  ];

  await Promise.all(
    users.map(async (user) => {
      await prisma.testuser.create({
        data: user,
      });
    })
  );
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
