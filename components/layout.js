import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <div className="text-gray-900 font-light">
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="EC platform example" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </div>
  )
}
