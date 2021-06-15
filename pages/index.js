import Head from 'next/head'

export default function Home() {
  return (
    <div className="text-gray-900 font-light">
      <Head>
        <title>E-Commercify</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="EC platform example" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-screen bg-black text-white px-4 py-2 font-sans text-xl">
        E-Commercify
      </div>
      <div className="container mx-auto mt-4">
        <div className="grid grid-cols-3 gap-4">
          <Card
            buttonColor="red-800"
            title="Admin"
            content={<>
              Admin としてログインすると、Seller の管理、Buyer の管理、
              支払いの管理ができます。
            </>}
            buttonText="Login as Admin"
          />
          <Card
            title="Seller"
            content={<>
              Seller としてログインすると、商品の管理、
              関連する Buyer と支払いの管理ができます。
            </>}
            buttonText="Login as Seller"
            buttonColor="blue-800"
          />
          <Card
            title="Buyer"
            content={<>
              Buyer としてログインすると、商品の購入、
              カード情報の管理ができます。
            </>}
            buttonText="Login as Buyer"
            buttonColor="green-800"
          />
        </div>
      </div>
    </div >
  )
}

function Card({ title, content, buttonText, buttonColor }) {
  return (
    <div className="rounded p-2 bg-gray-100">
      <div className="p-2 font-semibold rounded-t">
        {title}
      </div >
      <div className="p-2 rounded">
        <div>{content}</div>
        <div className="mt-4 flex">
          <button className={"rounded py-1 px-2 flex-grow text-white bg-" + buttonColor}>
            {buttonText}
          </button>
        </div>
      </div>
    </div >
  )
}
