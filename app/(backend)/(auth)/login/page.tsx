import React from "react";
import { LoginForm } from "../components/LoginForm";

function page() {
  return (
    <div
      className="lg:h-[90vh] md:h-[90vh] h-[90vh] flex justify-center items-center animate-fade-up animate-once animate-ease-linear"
      id="hero"
    >
      <LoginForm />
    </div>
  );
}

export default page;
