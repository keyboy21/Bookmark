import Head from "next/head";
import Header from "./header";
import Content from "./Content";
import Features from "./features";
import Downloads from "./Downloads";
import Faq from "./Faq";

export default function Home() {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css"
          integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <title>Bookmark</title>
      </Head>

      {/* Header */}
      <Header />

      {/* Content */}
      <Content />

      {/* Features */}
      <Features />

      {/* Downloads */}
      <Downloads />

      {/* FAQ */}
      <Faq />
      
    </>
  );
}
