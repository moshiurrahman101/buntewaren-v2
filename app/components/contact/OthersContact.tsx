import React from 'react'

function OthersContact() {
  return (
    <div className='flex flex-col items-center py-10 bg-green-100'>
      <h2 className='uppercase mb-10 text-2xl font-bold text-slate-800'>Others Contact  available</h2>
      <div className='flex flex-wrap justify-center gap-10'>
        <div className='bg-green-600 p-5 w-[250px] rounded-md text-white text-center'>
            <h3 className='underline font-bold uppercase'>Office</h3>
            <p className='text-sm font-semibold mt-3'>8231 Hemmental, Switzerland</p>
        </div>
        <div className='bg-green-600 p-5 w-[250px] rounded-md text-white text-center'>
            <h3 className='underline font-bold uppercase'>Phone</h3>
            <p className='text-sm font-semibold mt-3'>+41 764406801</p>
        </div>
        <div className='bg-green-600 p-5 w-[250px] rounded-md text-white text-center'>
            <h3 className='underline font-bold uppercase'>EMail</h3>
            <p className='text-sm font-semibold mt-3'>buntewaren@gmx.ch</p>
        </div>
      </div>
    </div>
  )
}

export default OthersContact
