import "../styles/globals.css";
import React from "react";
import { ShopContextProvider } from "../context/ShopContext";
import Layout from "../components/Layout";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ShopContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ShopContextProvider>
  );
};

export default MyApp;
