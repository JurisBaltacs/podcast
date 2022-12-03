import "../styles/globals.css";
import { ShopContextProvider } from "../context/ShopContext";

function MyApp({ Component, pageProps }) {
  return (
    <ShopContextProvider>
      <Component {...pageProps} />
    </ShopContextProvider>
  );
}

export default MyApp;
