import React, { useContext, useState, useEffect } from "react";
import Link from "next/link";

const BlogPreviewComponent = () => {
  const [blogPosts, setBlogPosts] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const blogPreviewPosts = blogPosts || [];

  useEffect(() => {
    fetch("/api/blog-posts")
      .then((res) => {
        if (!res.ok) {
          throw Error("Blog posts unavailable");
        }
        return res.json();
      })
      .then((blogPosts) => {
        setBlogPosts(blogPosts);
        setError(null);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
      });
  }, []);

  return (
    <div>
      <div className="font-black text-2xl md:mb-4 pl-4">NO BLOGA</div>
      {error && <div className=" pl-4">{error}</div>}
      {blogPreviewPosts.slice(0, 3).map((post, title) => {
        return (
          <Link key={title} href={"/blogpost/" + post.id}>
            <div className="group pl-4 mb-4">
              <div className="flex">
                <div className="rounded-md overflow-hidden transition-all duration-300 group-hover:brightness-75 cursor-pointer shrink-0">
                  <div className="mr-4">
                    <img
                      src={post.image}
                      className="w-[150px] block sm:hidden lg:block rounded-md"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold leading-tight text-white-900 lg:text-base text-sm line-clamp-3">
                    {post.title}
                  </div>
                  <div className="text-grey4 text-xs">
                    <div className="flex items-center">
                      <div className="flex text-orange1 font-bold text-base pb-0.5 mr-[-4px]">
                        • &nbsp;
                      </div>
                      {post.createdAt.replace(/(\T.*?\Z)/gi, "")}
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
