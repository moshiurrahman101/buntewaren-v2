import founderImage from "@/app/assets/image/aboutpage/founder.png";
import Image from "next/image";
function FounderAbout() {
  return (
    <div className="w-full bg-slate-100">
      <div className="py-5 lg:mx-24">
        <div className="flex lg:flex-row flex-col justify-between items-center gap-5 mt-16 mx-5">
          <div className="lg:w-[50%]">
            <Image
              src={founderImage}
              alt="worker pic"
              className="rounded-md animate-fade animate-once animate-duration-[2000ms] animate-ease-in-out"
            />
          </div>
          <div className="lg:w-[50%] text-lg flex flex-col gap-3 text-[24px] leading-10 animate-fade animate-once animate-duration-[2000ms] animate-ease-in-out">
            <p>
            {`I'm`} <span className="text-green-600 font-bold">Sharmin Afroz Khan</span>, the proud founder and owner of this unique {`"one-woman company."`} <span className="text-green-600 font-bold">Bunte Waren</span> is dedicated to designing and producing beautiful, natural, and sustainably made bags, backpacks, carpets, and decorative items. Each piece is crafted with love and care by skilled artisans in my native country of Bangladesh. Our products are made in small family or cooperative-owned workshops in Dhaka, ensuring fair wages and safe working conditions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FounderAbout;
