"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "@/app/assets/image/favicon.ico";
import {
  BriefcaseBusiness,
  CalendarDays,
  LayoutIcon,
  LogOutIcon,
} from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import defaultPicture from "@/app/assets/image/default.jpg";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";


function Sidebar() {
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const router = useRouter();
  const path = usePathname();
  const menuItems = [
    { id: 1, name: "Dashboard", path: "/dashboard", icon: LayoutIcon },
    {
      id: 2,
      name: "Products",
      path: "/dashboard/products",
      icon: BriefcaseBusiness,
    },
    {
      id: 3,
      name: "Events",
      path: "/dashboard/events",
      icon: CalendarDays,
    },
  ];
  const LogoutHandle = () => {
    setIsLoggingOut(true);
    router.push("/login");
  };

  if (isLoggingOut) {
    return <div className="h-screen w-screen bg-green-600 flex justify-center items-center">
      <div className="text-lg text-white font-bold">
      Logging out...
      </div>
    </div>; 
  }
  return (
    <div className="h-screen border shadow-md">
      <div className="flex justify-center">
        <Image src={logo} width={55} height={55} alt="logo" />
      </div>
      <hr className="my-3" />
      <div>
        {menuItems.map((menu, index) => (
          <Link key={index} href={menu.path}>
            <h2
              key={index}
              className={`flex items-center text-md gap-3 mt-1 p-4 text-slate-800 hover:bg-primary hover:text-white cursor-pointer rounded-lg ${path==menu.path&&'bg-primary text-white'}`}
            >
              <menu.icon />
              {menu.name}
            </h2>
          </Link>
        ))}
      </div>
      <div className="flex gap-2 items-center bottom-2 fixed p-4">
        <Image
          src={
            defaultPicture
          }
          alt="user"
          width={35}
          height={35}
          className="rounded-full"
        />
        <div>
          <h4 className="text-sm font-bold text-slate-800">
            Admin name
          </h4>
          <h4 className="text-xs text-slate-400">{"admin@buntewaren.com"}</h4>
        </div>
      </div>
      <div>
        <AlertDialog>
          <AlertDialogTrigger className="w-full" >
            <h2 className="flex items-center text-md gap-3 p-4 text-slate-500 hover:bg-red-700 hover:text-white cursor-pointer rounded-lg">
              <LogOutIcon />
              {"Logout"}
            </h2>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you sure to logout?</AlertDialogTitle>
              <AlertDialogDescription>
                This action ougout your account. If you won&apos;t be logout right
                now, click cancle button. Otherwise go continue
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={LogoutHandle} className="bg-red-700 hover:bg-red-900">
                Continue
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
}

export default Sidebar;