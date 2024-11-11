import React from 'react'

function Commitment() {
  return (
    <div className="w-full bg-[#ffffff]">
      <div className="py-20 lg:mx-24 flex flex-col items-center gap-10">
        <div className="lg:w-[900px] w-full text-lg flex flex-col gap-3 text-[24px] leading-10 animate-fade animate-once animate-duration-[2000ms] animate-ease-in-out">
          <h2 className="text-2xl text-center font-semibold text-black">Our Commitment to Vegan Products</h2>
          <p className="text-md leading-7 text-center">While most of our products are made entirely with natural plant fibers and materials, we understand the importance of vegan-friendly options. If you’re looking for pure vegan products, please feel free to contact me directly, and I will be happy to guide you through our selection.</p>
        </div>
        <div className="lg:w-[900px] w-full text-lg flex flex-col gap-3 text-[24px] leading-10 animate-fade animate-once animate-duration-[2000ms] animate-ease-in-out">
          <h2 className="text-2xl text-center font-semibold text-green-600">Giving Back</h2>
          <p className="text-md leading-7 text-center">A significant portion of our proceeds goes towards supporting an orphan home for street children in Bangladesh. By purchasing from Bunte Waren, you’re not only getting high-quality, sustainable products, but you’re also contributing to a meaningful cause. Your support helps provide shelter, education, and a brighter future for these children.</p>
        </div>
      </div>
    </div>
  )
}

export default Commitment
