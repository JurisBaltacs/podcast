import React, { useState, useEffect } from "react";
import Link from "next/link";
import blogPostSchema from "../schemas/blogPostSchema";
import { ValidationError } from "yup";

const BlogPreviewComponent = () => {
  const [blogPosts, setBlogPosts] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const blogPreviewPosts = blogPosts || [];

  async function fetchBlogPosts() {
    try {
      const response = await fetch("/api/blog-posts");
      const json = await response.json();
      // Validate API response according to the schema defined in blogPostSchema.js
      await blogPostSchema.validate(...json);
      setBlogPosts(json);
      setLoading(false);
    } catch (error) {
      if (error instanceof ValidationError) {
        console.log(
          "Blog post API response failed validadtion. Expected fields are: body: string().required().min(3), createdAt: date().required(), id: number().required().integer().min(1), image: string().required().min(3), title: string().required().min(3),"
        );
        setLoading(false); 
        setError("Bloga raksti nav pieejami");
        return;
      }
      console.log("Uncaught error occured");
    }
  }

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  return (
    <div>
      <div className="font-black text-2xl md:mb-4 pl-4">NO BLOGA</div>
      {isLoading && <div className="text-grey6 pl-4">Lādē...</div>}
      {error && <div className="text-grey6 pl-4">{error}</div>}
      {blogPreviewPosts.slice(0, 3).map((post, title) => {
        return (
          <Link key={title} href={"/blogpost/" + post.id}>
            <div className="group pl-4 mb-4">
              <div className="flex">
                <div className="rounded-md overflow-hidden transition-all duration-300 group-hover:brightness-75 cursor-pointer shrink-0">
                  <img
                    src={post.image}
                    className="w-[150px] block sm:hidden lg:block rounded-md mr-4"
                  />
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
