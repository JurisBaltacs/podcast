import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Footer from "./Footer";
import Logo from "../assets/Logo";
import Facebook from "../assets/facebook";
import Twitter from "../assets/twitter";
import Youtube from "../assets/youtube";
import Cart from "../assets/cart";
import styles from "./Layout.module.css";

const categories = [
  { name: "GALVENĀ", path: "/" },
  { name: "PAR MANI", path: "/about" },
];

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <div className={styles.menu__top_menu}>
        <Logo />
        <div
          className={
            isOpen
              ? styles.menu__top_menu_item_wrapper
              : styles.menu__top_menu_item_wrapper_open
          }
        >
          {categories.map((category, index) => (
            <div className={styles.menu__top_menu_items} key={index}>
              <Link
                href={category.path}
                className={category.path === router.asPath ? "active" : ""}
              >
                {category.name}
              </Link>
            </div>
          ))}
        </div>
        <div className={styles.menu__top_menu_social_icons}>
          <div className={styles.menu__top_menu_social}>
            <Facebook />
            <Twitter />
            <Youtube />
          </div>
          <div className={styles.menu__top_menu_cart}>
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
