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
        <div className="flex flex-col sm:flex-row gap-4 mx-2">
          <Card
            content={<>
              Admin としてログインすると、プラットフォームの管理者として、
              Seller の管理、Buyer の管理、
              支払いの管理ができます。
            </>}
            buttonText="Login as Admin"
            buttonTheme="red"
          />
          <Card
            content={<>
              Seller としてログインすると、販売者として、
              商品の管理、支払いの閲覧・返金処理ができます。
            </>}
            buttonText="Login as Seller"
            buttonTheme="blue"
          />
          <Card
            content={<>
              Buyer としてログインすると、購入者として、
              商品の購入、カード情報の管理ができます。
            </>}
            buttonText="Login as Buyer"
            buttonTheme="green"
          />
        </div>
      </div>
    </div >
  )
}

function Card({ content, buttonText, buttonTheme }) {
  return (
    <div className="rounded p-2 pb-4 bg-gray-100 hover:bg-gray-200 relative flex-1">
      <div className="p-2 rounded mb-8">
        {content}
      </div>
      <div className="absolute bottom-4 left-0 w-full">
        <div className="px-4">
          <Button theme={buttonTheme}>{buttonText}</Button>
        </div>
      </div>
    </div >
  )
}

function Button({ children, theme }) {
  return (
    <button className={
      [
        "rounded py-1 px-2 flex-grow text-white w-full",
        {
          "red": "bg-red-800 hover:bg-red-700",
          "green": "bg-green-800 hover:bg-green-700",
          "blue": "bg-blue-800 hover:bg-blue-700"
        }[theme]
      ].join(" ")
    }>
      {children}
    </button>
  )
}
