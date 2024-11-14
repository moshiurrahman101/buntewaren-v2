import { Button } from "@/components/ui/button";
import React from "react";

function page() {
  return (
    <div className=" w-full lg:h-[100vh] flex justify-center items-center text-center text-2xl">
      <div className="w-[200px]">
        <h1>Dashboard page!</h1>
        <Button variant={"destructive"}>Logout</Button>
      </div>
    </div>
  );
}

export default page;
