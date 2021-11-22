import Image from "next/image";
const Header = () => {
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
          <button className="bg-bookmark-red text-white px-7 py-3 md:rounded uppercase">
            Login
          </button>
        </ul>
        <div className="flex sm:hidden flex-1 justify-end">
          <i className="text-2xl fas fa-bars"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
