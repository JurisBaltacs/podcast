const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  await prisma.episode.createMany({
    data,
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

// Taken from: https://www.prisma.io/docs/guides/database/seed-database
