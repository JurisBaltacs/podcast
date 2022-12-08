import "../styles/globals.css";
import { ShopContextProvider } from "../context/ShopContext";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <ShopContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ShopContextProvider>
  );
}

export default MyApp;
