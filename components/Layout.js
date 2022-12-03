import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Footer from "./Footer";
import Logo from "../assets/Logo";
import Facebook from "../assets/facebook";
import Twitter from "../assets/twitter";
import Youtube from "../assets/youtube";
import Cart from "../assets/cart";

const categories = [
  { name: "GALVENĀ", path: "/" },
  { name: "PAR MANI", path: "/about" },
];

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

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
          {categories.map((category) => (
            <div className="menu__top-menu--items">
              <Link
                href={category.path}
                className={category.path === router.asPath ? "active" : ""}
              >
                {category.name}
              </Link>
            </div>
          ))}
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
