import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import LayoutMain from "@/layouts/LayoutMain";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <LayoutMain>
        <Component {...pageProps} />
      </LayoutMain>
  )
}
