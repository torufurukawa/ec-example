import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import { classnames } from 'tailwindcss-classnames'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Commercify</title>
      </Head>
      <Navbar theme="black" />
      <div className="container mx-auto mt-4">
        <div className="flex flex-col sm:flex-row gap-4 mx-2">
          <Card
            content={<>
              Admin としてログインすると、プラットフォームの管理者として、
              Seller の管理、Buyer の管理、
              支払いの管理ができます。
            </>}
            buttonText="Login as Admin"
            buttonTheme="red"
            buttonLink="/admin/"
          />
          <Card
            content={<>
              Seller としてログインすると、販売者として、
              商品の管理、支払いの閲覧・返金処理ができます。
            </>}
            buttonText="Login as Seller"
            buttonTheme="blue"
            buttonLink="/sellers/"
          />
          <Card
            content={<>
              Buyer としてログインすると、購入者として、
              商品の購入、カード情報の管理ができます。
            </>}
            buttonText="Login as Buyer"
            buttonTheme="green"
            buttonLink="/"
          />
        </div>
      </div>
    </Layout>
  )
}

function Card({ content, buttonText, buttonTheme, buttonLink }) {
  return (
    <div className="rounded p-2 pb-4 bg-gray-100 hover:bg-gray-200 relative flex-1">
      <div className="p-2 rounded mb-8">
        {content}
      </div>
      <div className="absolute bottom-4 left-0 w-full">
        <div className="px-4">
          <Button theme={buttonTheme} href={buttonLink}>{buttonText}</Button>
        </div>
      </div>
    </div >
  )
}

function Button({ children, theme, href }) {
  const base = classnames('block text-center rounded py-1 px-2 flex-grow text-white w-full')
  const themed = classnames(base, {
    'red': 'bg-red-800 hover:bg-red-700',
    'green': 'bg-green-800 hover:bg-green-700',
    'blue': 'bg-blue-800 hover:bg-blue-700'
  }[theme])

  return (
    <Link href={href}>
      <a className={themed}>
        {children}
      </a>
    </Link>
  )
}
