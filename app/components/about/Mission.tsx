import React from "react";

function Mission() {
  return (
    <div className="w-full bg-green-100">
      <div className="py-5 lg:mx-24 flex justify-center">
        <div className="lg:w-[700px] w-full text-lg flex flex-col gap-3 text-[24px] leading-10 animate-fade animate-once animate-duration-[2000ms] animate-ease-in-out">
          <h2 className="text-2xl text-center font-semibold">Our Mission</h2>
          <p className="text-sm text-center">At Bunte Waren, my mission is to create decent and fair job opportunities for people with low education levels in Bangladesh. By providing these opportunities, we help prevent them from being forced to work in the notorious sweatshops that produce cheap garments for international clothing companies. Instead, our talented artisans can take pride in their work, knowing that their beautifully made products are appreciated by customers worldwide.</p>
        </div>
      </div>
    </div>
  );
}

export default Mission;
