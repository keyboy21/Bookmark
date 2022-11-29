import Head from 'next/head'
import dynamic from 'next/dynamic'
const Loading = dynamic(() => import('./Loading'))
const Header = dynamic(() => import('../components/Header'), { loading: () => <Loading /> })
const Features = dynamic(() => import('../components/Features'), { loading: () => <Loading /> })
const Content = dynamic(() => import('../components/Content'), { loading: () => <Loading /> })
const Faq = dynamic(() => import('../components/Faq'), { loading: () => <Loading /> })
const Downloads = dynamic(() => import('../components/Downloads'), { loading: () => <Loading /> })
const Contactus = dynamic(() => import('../components/Contactus'), { loading: () => <Loading /> })
const Footer = dynamic(() => import('../components/Footer'), { loading: () => <Loading /> })

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1" />
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
  )
}
