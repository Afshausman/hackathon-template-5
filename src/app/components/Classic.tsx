// import Image from 'next/image'

// import React from 'react'
// import img1 from '@/app/images/shop-hero-2-png-picture-1.png';
// function Classic() {
//   return (
//     <div className='max-w-screen-2xl py-12 my-20 mx-auto'>
//       <div className='w-[1440px] h-[711px] md:h-[600px] color rounded-md border-solid border bg-[#23856D] px-14 py-28 grid grid-cols-1 md:grid-cols-2'>
//         <div className='relative max-w-5xl h-96 pb-12 gap-y-7 text-center px-4 md:right-20 md:top-40 '>
//            <h3 className='montserratt-400 text-xl text-yellow-50'>SUMMER 2020</h3>
//            <h1 className='montserrat-700 text-2xl lg:text-4xl text-yellow-50'>Vita Classic 
//              Product</h1>
//            <p className='montserrat-400 text-xl text-yellow-50 '>We know how large objects will act, but things on a small scale.</p>
//            <h3 className='montserrat-700 text-2xl text-yellow-50'>$16.48</h3>
//            <button className='w[184px] h-[52px] bg-[#2DC071] mt-[50px] ml-[270px] gap-[80px] button text-[#FFFFFF] w-[104px]'>ADD TO CART</button>
//         </div>
//         <div className='w-[363px] h-[500] ml-20'>
//           <Image src={img1} alt='shop-hero-2-png-picture-1.png'></Image>
//         </div>
//       </div>

//     </div>
//   )
// }
// export default Classic

import Image from 'next/image';
import React from 'react';
import img1 from '@/app/images/shop-hero-2-png-picture-1.png';

function Classic() {
  return (
    <div className='max-w-screen-2xl py-12 my-20 mx-auto px-4'>
      <div className='w-full h-auto rounded-md border-solid border bg-[#23856D] p-8 md:p-14 grid grid-cols-1 md:grid-cols-2 items-center'>
        {/* Text Section */}
        <div className='text-center md:text-left'>
          <h3 className='montserrat-400 text-lg md:text-xl text-yellow-50'>SUMMER 2020</h3>
          <h1 className='montserrat-700 text-2xl md:text-3xl lg:text-4xl text-yellow-50 mt-4'>Vita Classic Product</h1>
          <p className='montserrat-400 text-sm md:text-base lg:text-xl text-yellow-50 mt-4'>We know how large objects will act, but things on a small scale.</p>
          <h3 className='montserrat-700 text-xl md:text-2xl text-yellow-50 mt-4'>$16.48</h3>
          <button className='mt-6 py-2 px-6 bg-[#2DC071] text-white rounded hover:bg-[#28a65f] transition duration-300'>ADD TO CART</button>
        </div>
        
        {/* Image Section */}
        <div className='flex justify-center'>
          <Image src={img1} alt='shop-hero-2-png-picture-1.png' className='w-full max-w-md md:max-w-lg object-contain'/>
        </div>
      </div>
    </div>
  );
}

export default Classic;
