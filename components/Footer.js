import React, { useContext } from "react";
import SubscribeForm from "./SubscribeForm";
import BlogPreviewComponent from "./BlogPreviewComponent";
import AboutFooter from "./AboutFooter";

const Footer = () => {
  return (
    <div>
      <div className="footer__wrapper">
        <div className="footer__item">
          <AboutFooter />
        </div>
        <div className="footer__item">
          <BlogPreviewComponent />
        </div>
        <div className="footer__item">
          <SubscribeForm />
        </div>
      </div>
    </div>
  );
};

export default Footer;
