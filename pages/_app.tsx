import "../styles/global.scss";
import type { AppProps } from "next/app";
import Layout from "../components/templates/layout";
import { AppWrapper } from "../context/appContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
    // <AppWrapper>
    //   <Layout>
    //     <Component {...pageProps} />
    //   </Layout>
    // </AppWrapper>
  );
}

export default MyApp;
