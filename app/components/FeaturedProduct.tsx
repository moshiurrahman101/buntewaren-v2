import React from 'react'
import SingleProductCard from './SingleProductCard'
import p1 from '@/app/assets/image/product/1.png'

function FeaturedProduct() {
  return (
    <div className="mx-5 py-5 animate-fade-up animate-once animate-ease-linear">
        <div className='flex justify-center mt-10 '>
        <h2 className='text-2xl font-bold uppercase'><span className='text-green-600'>Featured</span> Products</h2>
        </div>
        <div className='flex justify-center mt-5 gap-5 flex-wrap'>
            <SingleProductCard name={"Wasserfeste 100% Vegan Ledisbag"} image={p1} category={'Ladies Bag'}/>
            <SingleProductCard name={"Wasserfeste 100% Vegan Ledisbag"} image={p1} category={'Ladies Bag'}/>
            <SingleProductCard name={"Wasserfeste 100% Vegan Ledisbag"} image={p1} category={'Ladies Bag'}/>
            <SingleProductCard name={"Wasserfeste 100% Vegan Ledisbag"} image={p1} category={'Ladies Bag'}/>
            <SingleProductCard name={"Wasserfeste 100% Vegan Ledisbag"} image={p1} category={'Ladies Bag'}/>
        </div>
    </div>
  )
}

export default FeaturedProduct