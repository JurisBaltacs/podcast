import React from "react";
import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
// import BlogPosts from "../assets/BlogPosts";

const prisma = new PrismaClient();

export async function getStaticProps() {
  const blogPosts = await prisma.blogPost.findMany();
  return {
    props: { blogPosts: JSON.parse(JSON.stringify(blogPosts)) },
  };
}

const Blog = ({ blogPosts }) => {
  // console.log("blogPosts", blogPosts);
  return (
    <div className="w-[90%] md:w-[80%] mx-auto">
      {blogPosts.map((post, title) => {
        return (
          <div
            key={title}
            className="group mb-8 hover:shadow-xl rounded-none md:rounded-md transition-all duration-300 md:border-b-0 border-b-2 last-of-type:border-b-0 pb-4 md:pb-0"
          >
            <Link href={"/blogpost/" + post.id}>
              <div className="flex">
                <div className="min-w-[300px] rounded-l-md overflow-hidden transition-all duration-300 group-hover:brightness-75 cursor-pointer hidden md:block">
                  <img src={post.image} />
                </div>
                <div className="ml-4">
                  <div className="font-bold leading-tight text-gray-900 text-lg">
                    {post.title}
                  </div>
                  <div className="line-clamp-[8] pr-4 mt-2">
                    <ReactMarkdown>{post.body}</ReactMarkdown>
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
