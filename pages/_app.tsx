import type { AppProps } from 'next/app'
import '../styles/globals.css'
import { Poppins } from '@next/font/google'
import { SessionProvider } from 'next-auth/react'

const popins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <main className={popins.className}>
        <Component {...pageProps} />
      </main>
    </SessionProvider>
  )
}
