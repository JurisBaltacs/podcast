import React, { useState } from "react";
import Link from "next/link";
import Footer from "./Footer";
import Logo from "../assets/Logo";
import Facebook from "../assets/facebook";
import Twitter from "../assets/twitter";
import Youtube from "../assets/youtube";
import Cart from "../assets/cart";

const categoriesArray = [
  "Galvenā",
  "Par podkāstu",
  "Kontakti",
  "Veikals",
  "Blogs",
  "Favorīti",
];

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="menu__top-menu">
        <Logo />
        <div
          className={
            isOpen
              ? "menu__top-menu--item-wrapper"
              : "menu__top-menu--item-wrapper open"
          }
        >
          {categoriesArray.map((category, index) => {
            return (
              <div key={index} className="menu__top-menu--items">
                <Link href={category}>{category.toUpperCase()}</Link>
              </div>
            );
          })}
        </div>
        <div className="menu__top-menu--social--icons">
          <div className="menu__top-menu--social">
            <Facebook />
            <Twitter />
            <Youtube />
          </div>
          <div className="menu__top-menu--cart">
            <Link href="shoppingcart">
              <Cart />
            </Link>
          </div>
        </div>
        <div id="mobile">
          <i
            onClick={() => handleClick()}
            className={isOpen ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
      </div>

      {children}
      <Footer />
    </>
  );
}
