import React from 'react';

const Page1 = () => {
  return (
    <div
      id="page1"
      className="h-screen w-full relative flex items-center justify-center flex-col text-center z-[10]"
    >
      <h1 className="text-[7.5vw] font-black relative before:content-['RELAX._ENJOY._LEARN.'] before:absolute before:text-black before:top-[-4px] before:left-[-4px] before:text-stroke-green-2px before:-z-10">
        RELAX. ENJOY. LEARN.
      </h1>
      <h2 className="text-[1.8vw] font-extrabold uppercase mt-2 mb-3">
        Welcome to Fairway Fun Hub!
      </h2>
      <p className="text-[1.4vw] font-medium w-[52%] ">
        Fairway Fun Hub is a modern golf driving range and mini-golf experience
        in the heart of South East London. Focused on innovation, skill
        building, and creating unforgettable moments for all ages.
      </p>
    </div>
  );
};

export default Page1;
