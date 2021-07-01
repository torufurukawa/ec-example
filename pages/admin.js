import Head from 'next/head'
import Layout from '../components/layout'
import Navbar from '../components/navbar'

export default function Page() {
  return (
    <Layout>
      <Head>
        <title>Commercify</title>
      </Head>
      <Navbar theme="red" user="admin" />
      <div className="container mx-auto mt-4">
        content
      </div>
    </Layout>
  )
}