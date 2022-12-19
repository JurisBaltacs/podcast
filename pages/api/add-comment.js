import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function addComment(req, res) {
  const comments = await prisma.comment.create({
    data: {
      name: req.body.name,
      body: req.body.body,
      episode_id: req.body.episode_id,
    },
  });
  res.status(200).json(comments);
}
