import { GlobalStyles } from "../styles/globalSyles";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import { theme } from "../styles/theme";
import { AppProps } from "next/app";
import { useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { GetStaticProps } from "next";
import { getAllDevelopers } from "../data/developers/get-all-developers";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <ToastContainer />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;
