import React from 'react';

const Page1 = () => {
  return (
    <div
      id="page1"
      className="z-[10] relative flex flex-col justify-center items-center w-full h-screen text-center"
    >
      <h1 className="before:top-[-4px] before:left-[-4px] before:-z-10 before:absolute relative before:text-stroke-green-2px font-black text-[7.5vw] before:text-black before:content-['RELAX._ENJOY._LEARN.']">
        RELAX. ENJOY. LEARN.
      </h1>
      <h2 className="mt-2 mb-3 font-extrabold lg:text-[1.8vw] uppercase">
        Welcome to Fairway Fun Hub!
      </h2>
      <p className="w-[80%] lg:w-[52%] font-medium lg:text-[1.4vw]">
        Fairway Fun Hub is a modern golf driving range and mini-golf experience
        in the heart of South East London. Focused on innovation, skill
        building, and creating unforgettable moments for all ages.
      </p>
    </div>
  );
};

export default Page1;
