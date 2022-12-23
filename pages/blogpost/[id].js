import React from "react";
import { PrismaClient } from "@prisma/client";
import ReactMarkdown from "react-markdown";
// import remarkGfm from "remark-gfm";

const prisma = new PrismaClient();

export async function getServerSideProps(context) {
  const { params } = context;

  const post = await prisma.BlogPost.findUnique({
    where: { id: Number(params.id) },
  });

  return {
    props: { post: JSON.parse(JSON.stringify(post)) },
  };
}

const BlogPost = ({ post }) => {
  return (
    <div className="w-[90%] md:w-[80%] mx-auto">
      <div className="font-bold leading-tight text-gray-900 text-lg">
        {post.title}
      </div>
      <div className="mt-4">
        <ReactMarkdown>{post.body}</ReactMarkdown>
      </div>
    </div>
  );
};

export default BlogPost;
