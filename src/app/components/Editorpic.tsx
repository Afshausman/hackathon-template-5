// import Image from 'next/image';
// import React from 'react';
// import card1 from '@/app/images/card-item (2).png'
// import card2 from '@/app/images/card-item (1).png'
// import card3 from '@/app/images/col-md-3 (1).png'
// import card4 from '@/app/images/col-md-6.png'

// function Editorpic() {
//   return (
//       <div className="w-[1050px] h-[770px] py-20 mx-auto">
//       <div className="container mx-auto">
//         {/* Heading Section */}
//         <div className="text-center mb-10">
//           <h3 className="font-bold text-lg md:text-xl lg:text-3xl">
//             EDITORS PICK
//           </h3>
//           <p className="text-sm md:text-lg lg:text-xl">
//             Problems trying to resolve the conflict between
//           </p>
//         </div>

//         {/* Images Grid */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//           {/* Main Large Image */}
//           <div className="col-span-2 row-span-2">
//             <Image
//               src={card4}
//               alt="Men Section"
//               className="w-[510px] h-[500px] object-cover rounded-lg"
//             />
//           </div>

//           {/* Secondary Images */}
//           <div>
//             <Image
//               src={card3}
//               alt="Women Section"
//               className="w-[240px] h-[500px] object-cover rounded-lg"
//             />
//           </div>
//           <div>
//             <Image
//               src={card2}
//               alt="Kids Section"
//               className="w-[240px] h-[242px] object-cover rounded-lg"
//               />
             
//               <Image
//                 src={card1}
//                 alt="Accessories Section"
//                 className="w-[240px] h-[242px] object-cover rounded-lg "
//               />
//              </div>
//          </div>
//       </div>
//     </div>
//   );
// }

// export default Editorpic;
import Image from 'next/image';
import React from 'react';
import card1 from '@/app/images/card-item (2).png';
import card2 from '@/app/images/card-item (1).png';
import card3 from '@/app/images/col-md-3 (1).png';
import card4 from '@/app/images/col-md-6.png';

function Editorpic() {
  return (
    <div className="w-full max-w-[1050px] h-auto py-10 px-4 mx-auto">
      <div className="container mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-10">
          <h3 className="font-bold text-lg md:text-xl lg:text-3xl">
            EDITORS PICK
          </h3>
          <p className="text-sm md:text-lg lg:text-xl">
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {/* Main Large Image */}
          <div className="col-span-2 row-span-2">
            <Image
              src={card4}
              alt="Men Section"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>

          {/* Secondary Images */}
          <div>
            <Image
              src={card3}
              alt="Women Section"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-4">
            <Image
              src={card2}
              alt="Kids Section"
              className="w-full h-auto object-cover rounded-lg"
            />
            <Image
              src={card1}
              alt="Accessories Section"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Editorpic;
