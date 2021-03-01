import { GlobalStyles } from "../styles/globalSyles";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import { theme } from "../styles/theme";
import { AppProps } from "next/app";
import { useEffect } from "react";
import { Provider } from "next-auth/client";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <Provider session={pageProps.session}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <ToastContainer />
        <GlobalStyles />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
