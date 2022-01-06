import Image from "next/image";
import Link from "next/link";
import { navigation } from "../nav-data";
import { Disclosure, Menu } from "@headlessui/react";
import { MenuIcon } from "@heroicons/react/outline";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, provider } from "../../firebase/firebase";
import { signInWithPopup, signOut } from "firebase/auth";

const Header = () => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const [user] = useAuthState(auth);

  const Signin = async () => {
    await signInWithPopup(auth, provider);
  };

  const logOut = async () => {
    await signOut(auth);
  };

  return (
    <header>
      <Disclosure as="nav">
        <nav className="container flex items-center py-4 mt-4 sm:mt-12">
          <div className="py-1">
            <Image
              src="/imgs/logo-bookmark.svg"
              alt="Bookmark"
              width="148"
              height="25"
            />
          </div>

          <ul className="hidden sm:flex flex-1 justify-end items-center gap-12 text-bookmark-blue uppercase text-xs">
            {navigation.map((item) => (
              <li className="cursor-pointer" key={item.id}>
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}

            {!user ? (
              <button
                onClick={Signin}
                className="bg-bookmark-red text-white px-7 py-3 md:rounded uppercase"
              >
                Login
              </button>
            ) : (
              <>
                <Image
                  src={user.photoURL}
                  width={50}
                  height={50}
                  alt="User"
                  className="rounded-full"
                />
                <button
                  onClick={logOut}
                  className="bg-bookmark-red text-white px-7 py-3 md:rounded uppercase"
                >
                  Logout
                </button>
              </>
            )}
          </ul>

          <div className="flex sm:hidden flex-1 justify-end">
            {/* Mobile menu button*/}
            <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="sr-only">Open main menu</span>
              <MenuIcon className="block h-6 w-6" aria-hidden="true" />
            </Disclosure.Button>
          </div>

          <Menu as="div" className="ml-3 sm:hidden relative">
            <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              {!user ? (
                <button
                  onClick={Signin}
                  className="bg-bookmark-red text-white px-7 py-3 md:rounded uppercase"
                >
                  Login
                </button>
              ) : (
                <>
                  <Image
                    src={user.photoURL}
                    width={50}
                    height={50}
                    alt="User"
                    className="rounded-full"
                  />
                  <Menu.Items className="origin-top-right absolute right-0 mt-14 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item onClick={logOut}>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-gray-700"
                          )}
                        >
                          Sign out
                        </a>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </>
              )}
            </Menu.Button>
          </Menu>
        </nav>

        <Disclosure.Panel className="sm:hidden">
          <div className="px-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Disclosure.Button
                key={item.id}
                as="a"
                href={item.href}
                className={classNames(
                  item.current
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                  "block px-3 py-2 rounded-md text-base font-medium"
                )}
                aria-current={item.current ? "page" : undefined}
              >
                {item.name}
              </Disclosure.Button>
            ))}
          </div>
        </Disclosure.Panel>
      </Disclosure>
    </header>
  );
};

export default Header;
