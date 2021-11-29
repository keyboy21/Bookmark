import Head from "next/head";
import Header from "./components/Header";
import Content from "./components/Content";
import Features from "./components/Features";
import Downloads from "./components/Downloads";
import Faq from "./components/Faq";
import Contactus from "./components/Contactus";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
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

      {/* Contantus */}
      <Contactus />

      {/* Footer */}
      <Footer />
      
    </>
  );
}
