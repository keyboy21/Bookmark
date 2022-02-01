import Head from "next/head";
import dynamic from "next/dynamic";
import Header from "./components/Header";
import Content from "./components/Content";
import Features from "./components/Features";
import Downloads from "./components/Downloads";
import Faq from "./components/Faq";
import Contactus from "./components/Contactus";
import Footer from "./components/Footer";

// const Loading = dynamic(() => import("./Loading"));
// const Header = dynamic(() => import("./components/Header"), {ssr: false});
// const Features= dynamic(() => import("./components/Features"), {ssr: false});
// const Content= dynamic(() => import("./components/Content"), {ssr: false});
// const Faq= dynamic(() => import("./components/Faq"), {ssr: false});
// const Downloads= dynamic(() => import("./components/Downloads"), {ssr: false});
// const Contactus= dynamic(() => import("./components/Contactus"), {ssr: false});
// const Footer= dynamic(() => import("./components/Footer"), {ssr: false});

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
