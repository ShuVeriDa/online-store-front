'use client'

import './assets/styles/globals.scss'
import Layout from "@/app/components/layout/Layout";
import {CacheProvider} from '@chakra-ui/next-js'
import {ChakraProvider} from '@chakra-ui/react'
import {Provider} from "react-redux";
import {store} from "@/app/store/store";


export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
    <head/>
    <body>
    <Provider store={store}>
      <CacheProvider>
        <ChakraProvider>
          <Layout title={'home'}>
            {children}
          </Layout>
        </ChakraProvider>
      </CacheProvider>
    </Provider>/
    </body>
    </html>
  )
}
