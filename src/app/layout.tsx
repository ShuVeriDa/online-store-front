import './assets/styles/globals.scss'
import Layout from "@/app/components/layout/Layout";

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
    <Layout title={'home'}>
      {children}
    </Layout>
    </body>
    </html>
  )
}
