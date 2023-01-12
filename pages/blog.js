import React from "react";
import { PrismaClient } from "@prisma/client";
import Link from "next/link";

const prisma = new PrismaClient();

export async function getStaticProps() {
  const blogPosts = await prisma.blogPost.findMany();
  return {
    props: { blogPosts: JSON.parse(JSON.stringify(blogPosts)) },
  };
}

const Blog = ({ blogPosts }) => {
  var striptags = require("striptags");

  return (
    <div className="w-[90%] md:w-[80%] mx-auto">
      {blogPosts.map((post, title) => {
        const postBody = striptags(post.body);
        console.log("postBody", postBody.slice(0, 10));
        return (
          <div
            key={title}
            className="group pb-6 mb-4 hover:shadow-xl rounded-none md:rounded-md transition-all duration-300 md:border-b-0 border-b-2 last-of-type:border-b-0 md:pb-0 "
          >
            <Link href={"/blogpost/" + post.id}>
              <div className="flex h-40 md:h-44">
                <div className="max-w-[300px] rounded-l-md overflow-hidden transition-all duration-300 group-hover:brightness-75 cursor-pointer hidden md:block">
                  <img src={post.image} />
                </div>
                <div className="ml-4">
                  <div className="font-bold leading-tight text-gray-900 text-2xl line-clamp-2">
                    {post.title}
                  </div>
                  <div className="pr-4 mt-2">
                    {postBody.slice(0, 150)}...
                  </div>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Blog;
