import "../styles/global.scss";
import type { AppProps } from "next/app";
import Layout from "../components/templates/layout";

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
