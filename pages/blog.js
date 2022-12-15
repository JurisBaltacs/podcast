import React from "react";
import Link from "next/link";
import BlogPosts from "../assets/BlogPosts";

const Blog = () => {
  return (
    <div className="w-[90%] md:w-[80%] mx-auto">
      {BlogPosts.map((post, title) => {
        return (
          <div
            key={title}
            className="group mb-8 hover:shadow-xl rounded-md transition-all duration-300"
          >
            <Link href={"blogpost/" + post.id}>
              <div className="flex">
                <div className="min-w-[300px] rounded-l-md overflow-hidden transition-all duration-300 group-hover:brightness-75 cursor-pointer hidden md:block">
                  <img src={post.image} />
                </div>
                <div className="ml-4">
                  <div className="font-bold leading-tight text-gray-900 text-lg">
                    {post.title}
                  </div>
                  <div className="line-clamp-6 pr-4">{post.body}</div>
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
