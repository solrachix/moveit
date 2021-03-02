import { AppProps } from 'next/app'

import { PageTransition } from '@/components/PageTransition'
import Layout from '@/components/Layout'

import Context from '@/contexts'

export default function App({
  Component: SsrComponent,
  pageProps: ssrPageProps
}: AppProps) {
  return (
    <Context ssrPageProps={ssrPageProps}>
      <Layout>
        <PageTransition>
          {({ Component, pageProps }) => {
            return Component ? (
              <Component {...pageProps} />
            ) : (
              <SsrComponent {...ssrPageProps} />
            )
          }}
        </PageTransition>
        {/* <SsrComponent {...ssrPageProps} /> */}
      </Layout>
    </Context>
  )
}
