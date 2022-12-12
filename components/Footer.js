import React from "react";
import SubscribeForm from "./SubscribeForm";
import BlogPreviewComponent from "./BlogPreviewComponent";
import AboutFooter from "./AboutFooter";

const Footer = () => {
  return (
    <div className="flex justify-center bg-grey1 py-10">
      <div className="w-[80%] bg-grey1 text-white grid grid-cols-1 md:grid-cols-3">
        <div>
          <AboutFooter />
        </div>
        <div>
          <BlogPreviewComponent />
        </div>
        <div>
          <SubscribeForm />
        </div>
      </div>
    </div>
  );
};

export default Footer;
