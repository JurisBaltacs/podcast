import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req, res) {
  const episodes = await prisma.episode.findMany();
  res.status(200).json(episodes);
}
