
// import Image from 'next/image'
// import React from 'react'
// import img1 from '@/app/images/img1-shop-hero-1-product-slide-1.jpg.jpg'
// function Hero() {
//   return (
    
        
    
//         <div className='container mx-auto max-w-screen-2xl h-[300px] md:[400px] lg:h-[800px] md:mb-10'>
//             <div className=' absolute w-full '>
//             <Image src={img1} alt=''></Image>
//             </div>
//             <div className="relative max-w-5xl h-96 pb-12 gap-y-7 text-center px-4 md:right-20 md:top-40 ">
//                 <h6 className='montserrat-400 text-xs text-white md:text-base px-4'>summer 2020</h6>
//                 <h1 className='montserrat-700 font-bold text-3xl text-white md:text-6xl'>NEW COLLECTION</h1>
//                 <p className='montserrat-400 text-xs  text-white md:text-xl'>We know how large objects will act, 
//                 but things on a small scale.</p>
//                 <button className='text-white font-bold monserrat text-center text-xs h-6 lg:h-12 lg:w-60  rounded-md w-40 lg:text-base bg-green-500'>SHOP NOW</button>
//             </div>

//         </div>
  
//   )
// }

// export default Hero
import Image from 'next/image';
import React from 'react';
import img1 from '@/app/images/img1-shop-hero-1-product-slide-1.jpg.jpg';

function Hero() {
  return (
    <div className="container mx-auto max-w-screen-2xl h-[300px] md:h-[400px] lg:h-[800px] md:mb-10 relative">
      {/* Background Image */}
      <div className="absolute w-full h-full">
        <Image src={img1} alt="" layout="fill" objectFit="cover" priority />
      </div>

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center h-full px-4 gap-y-4 text-center md:gap-y-7 md:items-start md:px-10 lg:px-20">
        <h6 className="montserrat-400 text-xs text-white md:text-base">SUMMER 2020</h6>
        <h1 className="montserrat-700 font-bold text-3xl text-white md:text-6xl">NEW COLLECTION</h1>
        <p className="montserrat-400 text-xs text-white md:text-xl max-w-md lg:max-w-lg">
          We know how large objects will act, but things on a small scale.
        </p>
        <button className="text-white font-bold montserrat text-center text-xs h-8 lg:h-12 lg:w-60 rounded-md w-40 lg:text-base bg-green-500 hover:bg-green-600 transition duration-300">
          SHOP NOW
        </button>
      </div>
    </div>
  );
}

export default Hero;
