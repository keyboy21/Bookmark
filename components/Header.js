import Image from 'next/image'
import Boormark from '../public/imgs/logo-bookmark.svg'
import Link from 'next/link'
import { navigation } from '../nav-data'
import Loading from './Loading'
import { Disclosure, Menu } from '@headlessui/react'
import { useSession, signIn, signOut } from 'next-auth/react'

const Header = () => {
  const { data: session, status } = useSession()

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const Signin = async () => {
    await signIn()
  }

  const logOut = async () => {
    await signOut()
  }

  if (status === 'loading') {
    ;<header>
      <Loading />
    </header>
  }

  return (
    <header>
      <Disclosure as="nav">
        <nav className="container flex items-center py-4 mt-4 sm:mt-12">
          <div className="py-1">
            <Image src={Boormark} alt="Bookmark" />
          </div>
          <ul className="hidden sm:flex flex-1 justify-end items-center gap-12 text-bookmark-blue uppercase text-xs">
            {navigation.map((item) => (
              <li className="cursor-pointer" key={item.id}>
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
            {status === 'authenticated' ? (
              <li>
                <Image src={session.user.image} width={50} height={50} alt="User" className="rounded-full" />
                <button onClick={logOut} className="bg-bookmark-red text-white px-7 py-3 md:rounded uppercase">
                  Logout
                </button>
              </li>
            ) : (
              <li>
              <button onClick={Signin} className="bg-bookmark-red text-white px-7 py-3 md:rounded uppercase">
                Login
              </button>
              </li>
            )}
          </ul>

          <div className="flex sm:hidden flex-1 justify-end">
            <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="sr-only">Open main menu</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="block w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </Disclosure.Button>
          </div>

          <Menu as="div" className="ml-3 sm:hidden relative">
            {status === 'authenticated' ? (
              <div className="flex space-x-2">
                <Image src={session.user.image} width={50} height={50} alt="User" className="rounded-full" />
                <button onClick={logOut} className="bg-bookmark-red text-white px-7 py-3 md:rounded uppercase">
                  Logout
                </button>
              </div>
            ) : (
              <button onClick={Signin} className="bg-bookmark-red text-white px-7 py-3 md:rounded uppercase">
                Login
              </button>
            )}
          </Menu>
        </nav>

        <Disclosure.Panel className="sm:hidden">
          <div className="px-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Disclosure.Button key={item.id} as="a" href={item.href} className={classNames(item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block px-3 py-2 rounded-md text-base font-medium')} aria-current={item.current ? 'page' : null}>
                {item.name}
              </Disclosure.Button>
            ))}
          </div>
        </Disclosure.Panel>
      </Disclosure>
    </header>
  )
}

export default Header
