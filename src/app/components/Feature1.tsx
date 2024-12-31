// import Image from 'next/image'
// import React from 'react'
// import pic1 from '@/app/images/unsplash_hHdHCfAifHU.png'
// import pic2 from '@/app/images/unsplash_tVEqStC2uz8.png'
// import pic3 from '@/app/images/unsplash_dEGu-oCuB1Y.png'

// function Feature1() {
//   return (
//  <section className="max-w-screen-2xl mx-auto py-20 ">
//   <div className="container px-5  py-8 mx-16 ">
//     <div className=' px-10 text-center bg-slate-50'>
//         <h3 className='montserrat-400 text-sm md:text-base'>Practice advice</h3>
//         <h1 className='montserrat-700 text-3xl md:text-4xl'>Featured post</h1>
//         <p className='montserrat-400 text-sm md:text-base'>Problems trying to resolve the conflict between 
//         the two major realms of Classical physics Newtonian mechanics </p>
//     </div>
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
//         <div className="relative w-full h-56 object-contain">
//           <Image src={pic1}
//             width={348} height={300}
//             alt="Feature One"
//             className="object-cover w-full h-full"
//           />
//         </div>
//         <div className="p-6">
//           <h3 className="text-sm motserrat-400 text-gray-800 mb-4">Trending New</h3>
//           <h1 className='montserrat-400 text-base'>Loudest à la Madison 1 
//           (Lintegral)</h1>
//           <p className="text-gray-600 mb-6">
//           We focus on ergonomics and meeting you where you work. Its only a 
          
//           keystroke away.
//           </p>
//           <button className="button hover:text-indigo-700 font-medium">
//             Learn More 
//           </button>
//         </div>
//         </div>

//     <div className="bg-white shadow-lg rounded-lg overflow-hidden">
//         <div className="relative w-full h-56 object-contain">
//           <Image src={pic2}
//             width={348} height={300}
//             alt="Feature One"
//             className="object-cover w-full h-full"
//           />
//         </div>
//         <div className="p-6">
//           <h3 className="text-sm motserrat-400 text-gray-800 mb-4">Trending New</h3>
//           <h1 className='montserrat-400 text-base'>Loudest à la Madison 1 
//           (Lintegral)</h1>
//           <p className="text-gray-600 mb-6">
//           We focus on ergonomics and meeting you where you work. Its only a 
//           keystroke away.
//           </p>
//           <button className="button hover:text-indigo-700 font-medium">
//             Learn More
//           </button>
//        </div>  
//       </div>
//       <div className="bg-white shadow-lg rounded-lg overflow-hidden">
//         <div className="relative w-full h-56 object-contain">
//           <Image src={pic3}
//            width={348} height={300}
//             alt="Feature One"
//             className="object-cover w-full h-full"
//           />
//         </div>
//         <div className="p-6">
//           <h3 className="text-sm motserrat-400 text-gray-800 mb-4">Trending New</h3>
//           <h1 className='montserrat-400 text-base'>Loudest à la Madison 1 
//           (integral)</h1>
//           <p className="text-gray-600 mb-6">
//           We focus on ergonomics and meeting you where you work. Its only a 
//           keystroke away.
//           </p>
//           <button className="button hover:text-indigo-700 font-medium">
//             Learn More
//           </button>
//         </div>
//       </div>
//       </div>
//    </div>
//    </section>
//   )
// }

// export default Feature1


import Image from 'next/image';
import React from 'react';
import pic1 from '@/app/images/unsplash_hHdHCfAifHU.png';
import pic2 from '@/app/images/unsplash_tVEqStC2uz8.png';
import pic3 from '@/app/images/unsplash_dEGu-oCuB1Y.png';

function Feature1() {
  return (
    <section className="max-w-screen-2xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="px-4 text-center bg-slate-50 py-8 rounded-lg mb-10">
          <h3 className="montserrat-400 text-xs sm:text-sm md:text-base">
            Practice advice
          </h3>
          <h1 className="montserrat-700 text-2xl sm:text-3xl md:text-4xl">
            Featured post
          </h1>
          <p className="montserrat-400 text-xs sm:text-sm md:text-base mt-2">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics Newtonian mechanics
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="relative w-full h-48 sm:h-56 md:h-64">
              <Image
                src={pic1}
                layout="fill"
                alt="Feature One"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xs sm:text-sm montserrat-400 text-gray-800 mb-2">
                Trending New
              </h3>
              <h1 className="montserrat-400 text-sm sm:text-base mb-4">
                Loudest à la Madison 1 (Lintegral)
              </h1>
              <p className="text-gray-600 text-xs sm:text-sm mb-6">
                We focus on ergonomics and meeting you where you work. It's only
                a keystroke away.
              </p>
              <button className="text-indigo-600 hover:text-indigo-700 font-medium text-xs sm:text-sm">
                Learn More
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="relative w-full h-48 sm:h-56 md:h-64">
              <Image
                src={pic2}
                layout="fill"
                alt="Feature Two"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xs sm:text-sm montserrat-400 text-gray-800 mb-2">
                Trending New
              </h3>
              <h1 className="montserrat-400 text-sm sm:text-base mb-4">
                Loudest à la Madison 1 (Lintegral)
              </h1>
              <p className="text-gray-600 text-xs sm:text-sm mb-6">
                We focus on ergonomics and meeting you where you work. It's only
                a keystroke away.
              </p>
              <button className="text-indigo-600 hover:text-indigo-700 font-medium text-xs sm:text-sm">
                Learn More
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="relative w-full h-48 sm:h-56 md:h-64">
              <Image
                src={pic3}
                layout="fill"
                alt="Feature Three"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xs sm:text-sm montserrat-400 text-gray-800 mb-2">
                Trending New
              </h3>
              <h1 className="montserrat-400 text-sm sm:text-base mb-4">
                Loudest à la Madison 1 (integral)
              </h1>
              <p className="text-gray-600 text-xs sm:text-sm mb-6">
                We focus on ergonomics and meeting you where you work. It's only
                a keystroke away.
              </p>
              <button className="text-indigo-600 hover:text-indigo-700 font-medium text-xs sm:text-sm">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature1;
