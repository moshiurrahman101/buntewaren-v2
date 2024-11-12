import Image from "next/image";
import logo from "@/app/assets/image/footer-logo.png";
import { HomeIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";

function Footer() {
  return (
    <div className="bg-black">
      <div className="header flex lg:flex-row md:flex-row flex-col justify-between items-start mx-10 py-5">
        <div className="w-[50%]">
          <Image src={logo} alt="Buntewaren Logo" />
          <p className="max-w-[350px] text-sm text-slate-100">
            High-quality, sustainable jute bags for all occasions, crafted to
            last long and help reduce plastic use, available in Switzerland for
            years.
          </p>
          <div className="flex gap-3 max-w-[350px] mt-3 text-white">
            <HomeIcon />
            <span className="text-sm">Hofwiesenstrasse 13, 8231 Hemmental, Switzerland</span>
          </div>
          <div className="flex gap-3 max-w-[350px] mt-3 text-white">
            <PhoneIcon />
            <span className="text-sm">+41 76 440 68 01</span>
          </div>
        </div>
        <div className="lg:w-[50%] md:w-[50%] w-[100%] flex justify-around lg:mt-0 md:mt-0 mt-5">
          <div className="text-white">
            <h3 className="font-bold">Company</h3>
            <menu className="flex flex-col gap-1 text-sm mt-3">
              <Link className="hover:text-green-600 w-fit" href={"/about"}>About us</Link>
              <Link className="hover:text-green-600 w-fit" href={"/contact"}>Contact us</Link>
              <Link className="hover:text-green-600 w-fit" href={"/#faq"}>FAQ</Link>
              <Link className="hover:text-green-600 w-fit" href={"/login"}>Login</Link>
            </menu>
          </div>
          <div className="text-white">
            <h3 className="font-bold">Products Links</h3>
            <menu className="flex flex-col gap-1 text-sm mt-3">
              <Link className="hover:text-green-600 w-fit" href={"#"}>Jute Bags</Link>
              <Link className="hover:text-green-600 w-fit" href={"#"}>Ladies Bags</Link>
              <Link className="hover:text-green-600 w-fit" href={"#"}>Regular Bag</Link>
            </menu>
          </div>
          
        </div>
      </div>
      <hr />
      <div className="flex flex-col justify-center items-center py-5">
        <p className="text-md text-white">All right reserved <Link className="text-green-600 font-semibold" href={"/"}>Buntewaren</Link></p>
        <p className="text-sm text-white">Developed by<Link className="text-blue-500 font-semibold" href={"https://solvepanda.com"}> Solvepadna</Link></p>
      </div>
    </div>
  );
}

export default Footer;
