import React, { useContext } from "react";
import SubscribeForm from "./SubscribeForm";
import BlogPreviewComponent from "./BlogPreviewComponent";
import AboutFooter from "./AboutFooter";
import "./Footer.scss";
import ShopContext from "../ContextProvider/ShopContext";

const Footer = () => {
  const { isLoading } = useContext(ShopContext);
  return (
    <div>
      {!isLoading ? (
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
      ) : null}
    </div>
  );
};

export default Footer;
