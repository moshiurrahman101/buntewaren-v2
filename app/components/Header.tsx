"use client";
import Image from "next/image";
import { useState } from "react";
import logo from "@/app/assets/image/logo.png";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AlignRight, X } from "lucide-react";

function Header() {
  const [menuOn, setMenuOn] = useState(false);

  const mobileMenu = () => {
    if (menuOn === false) {
      setMenuOn(true);
    } else {
      setMenuOn(false);
    }
  };

  return (
    <>
      <div className="header flex justify-between items-center mx-5 py-5">
        <div className="w-[200px]">
          <Link href={"/"}>
            <Image src={logo} alt="Buntewaren logo" />
          </Link>
        </div>
        <div className="menu lg:block hidden">
          <ul className="flex gap-6 items-center text-[18px]">
            <li className="hover:text-green-600">
              <Link href={"#"}>All Products</Link>
            </li>
            <li className="hover:text-green-600">
              <Link href={"#"}>Nakshi Kantha</Link>
            </li>
            <li className="hover:text-green-600">
              <Link href={"#"}>Ladies Fashion Bag</Link>
            </li>
            <li>
              <Button>Contact</Button>
            </li>
          </ul>
        </div>
        <div onClick={mobileMenu} className="block lg:hidden">
          {menuOn ? <X /> : <AlignRight />}
        </div>
      </div>
      {menuOn ? (
        <div className={`w-full h-screen bg-black text-white absolute`}>
          <ul className="flex flex-col gap-6 items-center text-[18px] pt-7">
            <li className="hover:text-green-600">
              <Link href={"#"}>All Products</Link>
            </li>
            <li className="hover:text-green-600">
              <Link href={"#"}>Nakshi Kantha</Link>
            </li>
            <li className="hover:text-green-600">
              <Link href={"#"}>Ladies Fashion Bag</Link>
            </li>
            <li>
              <Button>Contact</Button>
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Header;
