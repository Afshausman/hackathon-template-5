// import Image from 'next/image'
// import React from 'react'
// import Heropic from "@/app/images/asian-woman-man-with-winter-clothes 1.png"

// function Asian() {
//   return (
//     <section className='bg-slate-50 pb-20 '>
//   <div className=" mx-auto flex justify-center px-5 md:justify-start md:flex-row flex-col items-center">
//     <div className="object-cover object-center rounde w=[704px] h=[682px]">
//     <Image src={Heropic} alt=''></Image>
//   </div>
//     <div className="lg:flex-grow md:w-1/2 lg:pl-16 md:pl-12 flex flex-col md:items-start md:text-left items-center text-center">
//     <h3 className='montserrat-400 w-[122px] h-[24px]'>SUMMER 2020</h3>
//       <h1 className="montserrat-700  text-2xl lg:text-4xl text-gray-900">Part of the Neural 
//       Universe
//       </h1>
//       <p className="w-[376px] h-[60px]">We know how large objects will act, 
//       but things on a small scale.</p>
//       <div className="flex justify-center">
//         <button className="inline-flex text-white button border-0 py-2 px-6 focus:outline-none bg-[#2DC071] rounded text-lg">BUY NOW</button>
//         <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">READ MORE</button>
//       </div>
//     </div>
//   </div>
// </section>
//   )
// }
//  export default  Asian

import Image from 'next/image';
import React from 'react';
import Heropic from "@/app/images/asian-woman-man-with-winter-clothes 1.png";

function Asian() {
  return (
    <section className='bg-slate-50 pb-20'>
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-center px-5 gap-8 md:gap-16">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <Image src={Heropic} alt="Asian Woman and Man" className="object-cover rounded w-full max-w-md md:max-w-lg" />
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h3 className='montserrat-400 text-sm md:text-base lg:text-lg text-gray-700'>SUMMER 2020</h3>
          <h1 className="montserrat-700 text-2xl md:text-3xl lg:text-4xl text-gray-900 mt-2">
            Part of the Neural Universe
          </h1>
          <p className="mt-4 text-sm md:text-base lg:text-lg text-gray-600 max-w-md mx-auto md:mx-0">
            We know how large objects will act, but things on a small scale.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start mt-6">
            <button className="inline-flex items-center justify-center text-white py-2 px-6 bg-[#2DC071] hover:bg-[#28a65f] rounded text-sm md:text-base font-medium transition duration-300">
              BUY NOW
            </button>
            <button className="inline-flex items-center justify-center text-gray-700 bg-gray-100 py-2 px-6 hover:bg-gray-200 rounded text-sm md:text-base font-medium transition duration-300">
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Asian;
