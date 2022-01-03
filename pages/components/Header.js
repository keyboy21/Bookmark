import Image from "next/image";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, Provider } from "../firebase/firebase";
import { signInWithPopup, signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);
  
  const Signin = async () => {
    await signInWithPopup(auth, Provider)
  };

  const logOut = () => {
    signOut(auth);
  };

  return (
    <header>
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
          <li className="cursor-pointer">Features</li>
          <li className="cursor-pointer">Pricing</li>
          <li className="cursor-pointer">Contact</li>

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
          <i className="text-2xl fas fa-bars"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
