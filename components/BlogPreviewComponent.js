import React from "react";
import Link from "next/link";

import BlogPosts from "../assets/BlogPosts";
// #TODO: Vai nevajag blog postus ievilkt centralizēti? Tagad BlogPreviewComponent un AboutFooter

const BlogPreviewComponent = () => {
  return (
    <div>
      <div className="font-black text-2xl md:mb-4 pl-4">NO BLOGA</div>
      {BlogPosts.slice(0, 3).map((post, title) => {
        return (
          <Link key={title} href={"blogpost/" + post.id}>
            <div className="group pl-4 mb-4">
              <div className="flex">
                <div className="max-w-[125px] rounded-md overflow-hidden transition-all duration-300 group-hover:brightness-75 cursor-pointer">
                  <img src={post.image} />
                </div>
                <div className="ml-4">
                  <div className="font-bold leading-tight text-white-900 lg:text-base text-sm line-clamp-3">
                    {post.title}
                  </div>
                  <div className="text-grey4 text-xs">
                    <div className="flex items-center">
                      <div className="flex text-orange1 font-bold text-base pb-0.5 mr-[-4px]">
                        • &nbsp;
                      </div>
                      {post.date}
                    </div>
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
