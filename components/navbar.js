import Link from 'next/link'
import { classnames } from 'tailwindcss-classnames'

export default function Navbar({ theme, user }) {
  const base = classnames('w-screen text-white px-4 py-2 font-sans text-xl')
  const themed = classnames(base, {
    'black': 'bg-black',
    'red': 'bg-red-900',
    'green': 'bg-green-900',
    'blue': 'bg-blue-900'
  }[theme])

  return (
    <div className={themed}>
      <div className="flex">
        <div className="flex-none">
          <Link href="/"><a>Commercify</a></Link>
        </div>
        <div className="flex-1">
          <div className="flex text-sm mt-1.5">
            <div className="flex-grow"></div>
            {user ?
              <>
                <div className="ml-1">@{user}</div>
                <div className="ml-1"><Link href="/"><a>logout</a></Link></div>
              </>
              :
              null
            }
          </div>
        </div>
      </div>
    </div>
  )
}
