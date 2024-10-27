import Image from "next/image";
import React from "react";
import logo from "@/app/assets/image/logo.png";
import Link from "next/link";
import { Button } from "@/components/ui/button";


function Header() {
  return (
    <div className="header flex justify-between items-center mx-5 py-5">
      <div className="w-[200px]">
        <Link href={'/'}>
        <Image src={logo} alt="Buntewaren logo" />
        </Link>
      </div>
      <div className="menu">
        <ul className="flex gap-6 items-center text-[18px]">
          <li className="hover:text-green-600">
            <Link href={'#'}>All Products</Link>
          </li>
          <li className="hover:text-green-600">
            <Link href={'#'}>Nakshi Kantha</Link>
          </li>
          <li className="hover:text-green-600">
            <Link href={'#'}>Ladies Fashion Bag</Link>
          </li>
          <li>
            <Button>Contact</Button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
