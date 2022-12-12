import React from "react";
import Link from "next/link";

import BlogPosts from "../assets/BlogPosts";
// #TODO: Vai nevajag blog postus ievilkt centralizēti? Tagad BlogPreviewComponent un AboutFooter

const BlogPreviewComponent = () => {
  return (
    <div>
      <div className="font-black text-2xl mb-4 pl-4">NO BLOGA</div>
      {BlogPosts.slice(0, 3).map((post, title) => {
        return (
          <Link href={"blogpost/" + post.id}>
            <div key={title} className="pl-4 mb-4">
              <div className="flex">
                <div className="max-w-[125px] rounded-md overflow-hidden transition-all duration-300 hover:brightness-75 cursor-pointer">
                  <img src={post.image} />
                </div>
                <div className="ml-4">
                  <div className="font-bold leading-tight text-white-900 lg:text-base text-sm">
                    {post.title}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default BlogPreviewComponent;
