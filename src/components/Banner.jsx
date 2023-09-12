import React from 'react';
import bannerImage from '../assets/images/banner.jpg'

const Banner = () => {
//   const bannerImage =  '/src/assets/images/bg.png';
//   '/path-to-static-image.jpg';

  const bannerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  // const imageStyle = {
  //   maxWidth: '100% !important',
  //   height: '268px',

  //   // Add any additional styling as per your requirement
  // };

  return (
    <div className='relative w-screen h-screen '  >
      <img className='w-screen h-screen  sm:w-full md:w-screen lg:w-screen xl:w-full' src="/src/assets/images/banner2.webp" alt="" />
      <div className=' absolute top-28 w-1/2 text-white'>

      {/* <h1 className=' text-4xl pl-5'>Get the best part of your day</h1>
      <h1 className=' pl-5 text-2xl pt-3 text-green-200'>We provide serious fitness but within a fun and friendly, safe space.</h1>
      <div className='w-full flex justify-center '>

      <button className=" bg-red-700 rounded-lg p-2"> JOIN NOW
      </button> 
      </div>*/}
      
      </div>
      

    </div>
  );
};

export default Banner;



// import React from "react";

// export default function Banner() {
//   return (

//     <div className="bg-green-500 h-96">
//      <div className="container mx-auto h-full">
//   <div className="flex items-center h-full relative -space-x-48 lg:-space-x-24">
//     <div className="text-white flex-1 z-10 pl-6 lg:pl-0">
//       <h1 className="h1 text-white mb-8">
//         Get the best part of your day <br />{" "}
//         <span className="text-green-200">-You fit here.</span>
//       </h1>
//       <p className="max-w-[415px] text-body-md lg:text-body-lg mb-8">
//         We provide serious fitness but within a fun and friendly, safe
//         space.
//       </p>
//       <button className="btn btn-sm lg:btn-lg btn-secondary">
//         JOIN NOW
//       </button>
//     </div>
//     <div className="bg-blue-300 w-full h-full bg-banner bg-cover bg-right lg:bg-center bg-no-repeat flex-1"></div>
//   </div>
// </div>

      
//     </div>
//   );
// }
