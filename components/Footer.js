import React from "react";
import SubscribeForm from "./SubscribeForm";
import BlogPreviewComponent from "./BlogPreviewComponent";
import AboutFooter from "./AboutFooter";

const Footer = () => {
  return (
    <div className="flex justify-center bg-grey1 py-10 mt-8">
      <div className="md:w-[80%] w-[90%] bg-grey1 text-white grid grid-cols-1 md:grid-cols-3">
        <div className="mb-2">
          <AboutFooter />
        </div>
        <div className="mb-2">
          <BlogPreviewComponent />
        </div>
        <div className="mb-2">
          <SubscribeForm />
        </div>
      </div>
    </div>
  );
};

export default Footer;
