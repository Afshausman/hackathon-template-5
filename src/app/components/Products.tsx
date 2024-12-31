
// import Image from 'next/image';
// import React from 'react'
// import pic1 from '@/app/images/col-md-3 (4).png'
// import pic2 from '@/app/images/Product card.png'
// import pic3 from '@/app/images/Product card (1).png'
// import pic4 from '@/app/images/Product card (2).png'
// import pic5 from '@/app/images/col-md-3 (6).png'
// import pic6 from '@/app/images/Product card (3).png'
// import pic7 from '@/app/images/Product card (4).png'
// import pic8 from '@/app/images/Product card (5).png'
// import Link from 'next/link';

// function Products(){
//   return (
//     <div className='max-w-[1,124px] lg:h-[1,652px] mt-5 px-8 mx-auto  '>
//       <div className="text-center">
//         <h3 className="font-bold text-lg md:text-xl lg:text-2xl">
//           Featured Products
//         </h3>
//         <h2 className="font-bold text-xl md:text-2xl lg:text-3xl mt-2">
//           BESTSELLER PRODUCTS
//         </h2>
//         <p className="text-sm md:text-lg lg:text-xl mt-2">
//           Problems trying to resolve the conflict between
//         </p>
//       </div>

//         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-20 mt-20'>
//         <div className="px-4 w-full bg-slate-100 shadow-lg">
//         <Link href="/product" className="block relative rounded overflow-hidden translate-x-1">
//           <Image alt="ecommerce" src={pic1}></Image>
//         </Link>
//         </div>
//       <div className="p-4 w-full bg-slate-100 shadow-lg">
//         <Link href="/product" className="block relative rounded overflow-hidden">
//           <Image alt="ecommerce" src={pic2}></Image>
//         </Link>
//       </div>
//       <div className="p-4 w-full bg-slate-100 shadow-lg ">
//         <Link href="/product" className="block relative rounded overflow-hidden">
//           <Image alt="ecommerce" src={pic3}></Image>
//         </Link>
//       </div>
//       <div className="p-4 w-full bg-slate-100 shadow-lg">
//         <Link href="/product" className="block relative rounded overflow-hidden">
//           <Image alt="ecommerce" src={pic4}></Image>
//         </Link>
//       </div>
//       <div className="p-4 w-full bg-slate-100 shadow-lg">
//         <Link href="/product" className="block relative rounded overflow-hidden">
//           <Image alt="ecommerce" src={pic5}></Image>
//         </Link>
//       </div>
//       <div className="p-4 w-full bg-slate-100 shadow-lg">
//         <Link href="/product" className="block relative rounded overflow-hidden">
//           <Image alt="ecommerce" src={pic6}></Image>
//         </Link>
//       </div>
//       <div className="p-4 w-full bg-slate-100 shadow-lg">
//         <Link href="/product" className="block relative rounded overflow-hidden">
//           <Image alt="ecommerce" src={pic7}></Image>
//         </Link>
//       </div>
//       <div className="p-4 w-full bg-slate-100 shadow-lg">
//         <Link href="/product" className="block relative rounded overflow-hidden">
//           <Image alt="ecommerce" src={pic8}></Image>
//         </Link>
//       </div>
//      </div>
//     </div>
//   //  </div>
//   )
// }
// export default  Products;
import Image from 'next/image';
import React from 'react';
import pic1 from '@/app/images/col-md-3 (4).png';
import pic2 from '@/app/images/Product card.png';
import pic3 from '@/app/images/Product card (1).png';
import pic4 from '@/app/images/Product card (2).png';
import pic5 from '@/app/images/col-md-3 (6).png';
import pic6 from '@/app/images/Product card (3).png';
import pic7 from '@/app/images/Product card (4).png';
import pic8 from '@/app/images/Product card (5).png';
import Link from 'next/link';

function Products() {
  return (
    <div className='max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 mt-5'>
      {/* Section Header */}
      <div className="text-center mb-10">
        <h3 className="font-bold text-lg md:text-xl lg:text-2xl">
          Featured Products
        </h3>
        <h2 className="font-bold text-xl md:text-2xl lg:text-3xl mt-2">
          BESTSELLER PRODUCTS
        </h2>
        <p className="text-sm md:text-lg lg:text-xl mt-2">
          Problems trying to resolve the conflict between
        </p>
      </div>

      {/* Product Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
        <div className="bg-slate-100 shadow-lg p-4">
          <Link href="/product" className="block relative rounded overflow-hidden">
            <Image alt="ecommerce" src={pic1} className="object-cover w-full h-auto" />
          </Link>
        </div>
        <div className="bg-slate-100 shadow-lg p-4">
          <Link href="/product" className="block relative rounded overflow-hidden">
            <Image alt="ecommerce" src={pic2} className="object-cover w-full h-auto" />
          </Link>
        </div>
        <div className="bg-slate-100 shadow-lg p-4">
          <Link href="/product" className="block relative rounded overflow-hidden">
            <Image alt="ecommerce" src={pic3} className="object-cover w-full h-auto" />
          </Link>
        </div>
        <div className="bg-slate-100 shadow-lg p-4">
          <Link href="/product" className="block relative rounded overflow-hidden">
            <Image alt="ecommerce" src={pic4} className="object-cover w-full h-auto" />
          </Link>
        </div>
        <div className="bg-slate-100 shadow-lg p-4">
          <Link href="/product" className="block relative rounded overflow-hidden">
            <Image alt="ecommerce" src={pic5} className="object-cover w-full h-auto" />
          </Link>
        </div>
        <div className="bg-slate-100 shadow-lg p-4">
          <Link href="/product" className="block relative rounded overflow-hidden">
            <Image alt="ecommerce" src={pic6} className="object-cover w-full h-auto" />
          </Link>
        </div>
        <div className="bg-slate-100 shadow-lg p-4">
          <Link href="/product" className="block relative rounded overflow-hidden">
            <Image alt="ecommerce" src={pic7} className="object-cover w-full h-auto" />
          </Link>
        </div>
        <div className="bg-slate-100 shadow-lg p-4">
          <Link href="/product" className="block relative rounded overflow-hidden">
            <Image alt="ecommerce" src={pic8} className="object-cover w-full h-auto" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Products;
