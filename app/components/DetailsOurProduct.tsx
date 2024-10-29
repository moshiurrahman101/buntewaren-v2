import React from "react";
import img1 from "@/app/assets/image/homepage/worker2.png";
import img2 from "@/app/assets/image/homepage/worker1.png";
import Image from "next/image";

function DetailsOurProduct() {
  return (
    <div className="w-full bg-green-100">
      <div className="py-5 lg:mx-24">
        <div className="flex justify-center mt-10">
          <h2 className="text-2xl font-bold uppercase">
            Details of Our <span className="text-green-600">Products</span>
          </h2>
        </div>
        <div className="flex lg:flex-row flex-col-reverse justify-between items-center gap-5 mt-10 mx-5">
          <div className="lg:w-[50%] text-lg flex flex-col gap-3 text-[24px] leading-10">
            <h3 className="font-bold text-2xl">
              Our range of products includes
            </h3>
            <p>
              <span className="font-bold"> Bags and Backpacks:</span>{" "}
              Fashionable, functional, and Eco-friendly, our bags and backpacks
              are perfect for everyday use.
            </p>
            <p>
              <span className="font-bold">Carpets:</span> Handcrafted with
              intricate designs, our carpets add a touch of elegance to any
              space.
            </p>
            <p>
              <span className="font-bold">Decorative Items:</span> From wall
              hangings to table runners, our decorative items bring warmth and
              charm to your home.
            </p>
          </div>
          <div className="lg:w-[50%]">
            <Image src={img1} alt="worker pic" className="rounded-md"/>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col justify-between items-center gap-5 mt-16 mx-5">
          <div className="lg:w-[50%]">
            <Image src={img2} alt="worker pic" className="rounded-md"/>
          </div>
          <div className="lg:w-[50%] text-lg flex flex-col gap-3 text-[24px] leading-10">
            <h3 className="font-bold text-2xl">
            Our range of products includes
            </h3>
            <p>
              <span className="font-bold">Jute:</span>{" "}
              A strong and durable natural fiber, jute is both eco-friendly and versatile.
            </p>
            <p>
              <span className="font-bold">Garn:</span> A unique blend of cotton and wool, garn adds texture and comfort to our products.
            </p>
            <p>
              <span className="font-bold">Natural Rubber and Rice Starch Coating:</span> Our leather-like materials are made from natural rubber and rice starch, providing water-resistant and vegan-friendly options.
            </p>
            <p>
              <span className="font-bold">100% Bio Cotton:</span> Soft, breathable, and environmentally friendly, our bio cotton ensures comfort and sustainability
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsOurProduct;
