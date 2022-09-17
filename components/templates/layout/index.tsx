import { NextPage } from "next";
import Head from "next/head";
import { LayoutProps } from "../../../types";
import Hero from "../hero";

const Layout: NextPage<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Arkar Phyo</title>
        <meta
          name="description"
          content={`I have worked for the last 10+ years in the software industry with a focus on digital design, development, and implementation.  I have taught myself to code as a hobby and have found it to be a great way to keep my mind sharp.  My days are spent building`}
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <div className="">
        <Hero />
        <main>{children}</main>
      </div>
    </>
  );
};
export default Layout;
