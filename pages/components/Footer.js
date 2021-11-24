import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-bookmark-blue py-8">
      <div className="container flex flex-col md:flex-row items-center">
        <div className="flex flex-1 flex-wrap items-center justify-center md:justify-start gap-12">
          <Image
            src="/imgs/logo-bookmark-white.png"
            width={148}
            height={25}
            alt="Boolmark"
          />
          <ul className="flex text-white text-uppercase gap-12 text-xs md:text-lg">
            <li className="cursor-pointer">Features</li>
            <li className="cursor-pointer">Pricing</li>
            <li className="cursor-pointer">Contact</li>
          </ul>
        </div>
        <div className="flex gap-10 mt-12 md:mt-0">
          <li className="list-none cursor-pointer">
            <i className="text-white text-2xl fab fa-twitter"></i>
          </li>
          <li className="list-none cursor-pointer">
            <i className="text-white text-2xl fab fa-facebook-square"></i>
          </li>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
