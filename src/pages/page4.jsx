import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react';

const Page4 = () => {
  const questionRef = useRef(null);
  useGSAP(() => {
    gsap.from(questionRef.current, {
      y: 50,
      scrollTrigger: {
        trigger: questionRef.current,
        scroller: 'body',
        start: 'top 75%',
        end: 'top 70%',
        scrub: 3,
      },
    });
  });
  return (
    <div className="relative flex justify-center items-center gap-10 w-full h-[30vh]">
      <h1
        className="-top-[20%] lg:-top-[30%] absolute text-stroke-white font-sans font-black text-[5.5vw] text-black"
        ref={questionRef}
      >
        WHAT ARE YOU WAITING FOR?
      </h1>
      <div className="group relative rounded-2xl w-[26%] h-[75%] overflow-hidden">
        <h2 className="group-hover:text-white group-hover:bg-transparent z-10 absolute flex justify-center items-center bg-[#95c11e] w-full h-full font-black text-black text-base sm:text-lg md:text-3xl text-center transition-all duration-300 ease-in-out">
          TOPTRACER RANGE
        </h2>
        <img
          src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/page-toptracer-1024x683.jpg?strip=all&lossy=1&sharp=1&ssl=1"
          alt=""
          className="w-full h-full object-cover scale-[1.1] group-hover:scale-[1] transition-all duration-300 ease-in-out"
        />
      </div>
      <div className="group relative rounded-2xl w-[26%] h-[75%] overflow-hidden">
        <h2 className="group-hover:text-white group-hover:bg-transparent z-10 absolute flex justify-center items-center bg-[#95c11e] w-full h-full font-black text-black text-base sm:text-lg md:text-3xl text-center transition-all duration-300 ease-in-out">
          ADVENTURE GOLF
        </h2>
        <img
          src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/page-ag-1536x1022.jpg?strip=all&lossy=1&sharp=1&ssl=1"
          alt=""
          className="w-full h-full object-cover scale-[1.1] group-hover:scale-[1] transition-all duration-300 ease-in-out"
        />
      </div>
      <div className="group relative rounded-2xl w-[26%] h-[75%] overflow-hidden">
        <h2 className="group-hover:text-white group-hover:bg-transparent z-10 absolute flex justify-center items-center bg-[#95c11e] w-full h-full font-black text-black text-base sm:text-lg md:text-3xl text-center transition-all duration-300 ease-in-out">
          GOLF LESSONS
        </h2>
        <img
          src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/page-lessons-1536x1025.jpg?strip=all&lossy=1&sharp=1&ssl=1"
          alt=""
          className="w-full h-full object-cover scale-[1.1] group-hover:scale-[1] transition-all duration-300 ease-in-out"
        />
      </div>
    </div>
  );
};

export default Page4;
