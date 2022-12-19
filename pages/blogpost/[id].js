import React, { useEffect } from "react";
import { PrismaClient } from "@prisma/client";
import BlogPosts from "../../assets/BlogPosts";

const prisma = new PrismaClient();

export async function getServerSideProps(context) {
  const { params } = context;
  const post = BlogPosts.find((post) => post.id === params.id);

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
      <div>{post.body.props.children}</div>
    </div>
  );
};

export default BlogPost;
