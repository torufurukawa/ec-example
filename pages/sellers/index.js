import Head from 'next/head'
import { useRouter } from 'next/router'
import classnames from 'tailwindcss-classnames'
import Layout from '../../components/layout'
import Navbar from '../../components/navbar'

export default function Page() {
  return (
    <Layout>
      <Head>
        <title>Commercify</title>
      </Head>
      <Navbar theme="blue" />
      <div className="container mx-auto mt-4">
        <div className="px-2"><Button>販売者アカウントを作る</Button></div>
      </div>
    </Layout>
  )
}

function Button({ children }) {
  const router = useRouter()
  const style = classnames(
    'block text-center rounded py-1 px-2 flex-grow w-full',
    'text-white bg-blue-800 hover:bg-blue-700',
    'cursor-pointer'
  )
  return (
    <div
      className={style}
      onClick={() => { createAccount(router) }}
    >
      {children}
    </div>
  )
}

async function createAccount(router) {
  const resp = await fetch('/api/sellers/create-account', {
    method: 'POST'
  })
  const data = await resp.json()
  const href = `/sellers/${data.account_id}`
  router.push(href)
}
