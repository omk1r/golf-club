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
    <div className="h-[30vh] w-full flex items-center justify-center gap-10 relative">
      <h1
        className="text-[5.5vw] absolute -top-[30%] font-black text-black text-stroke-white font-sans"
        ref={questionRef}
      >
        WHAT ARE YOU WAITING FOR?
      </h1>
      <div className="h-[75%] w-[26%] overflow-hidden rounded-2xl relative group">
        <h2 className="h-full w-full bg-[#95c11e] flex items-center justify-center text-3xl text-black font-black absolute z-10 group-hover:text-white group-hover:bg-transparent transition-all duration-300 ease-in-out">
          TOPTRACER RANGE
        </h2>
        <img
          src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/page-toptracer-1024x683.jpg?strip=all&lossy=1&sharp=1&ssl=1"
          alt=""
          className="h-full w-full object-cover scale-[1.1] transition-all duration-300 ease-in-out group-hover:scale-[1]"
        />
      </div>
      <div className="h-[75%] w-[26%] overflow-hidden rounded-2xl relative group">
        <h2 className="h-full w-full bg-[#95c11e] flex items-center justify-center text-3xl text-black font-black absolute z-10 group-hover:text-white group-hover:bg-transparent transition-all duration-300 ease-in-out">
          ADVENTURE GOLF
        </h2>
        <img
          src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/page-ag-1536x1022.jpg?strip=all&lossy=1&sharp=1&ssl=1"
          alt=""
          className="h-full w-full object-cover scale-[1.1] transition-all duration-300 ease-in-out group-hover:scale-[1]"
        />
      </div>
      <div className="h-[75%] w-[26%] overflow-hidden rounded-2xl relative group">
        <h2 className="h-full w-full bg-[#95c11e] flex items-center justify-center text-3xl text-black font-black absolute z-10 group-hover:text-white group-hover:bg-transparent transition-all duration-300 ease-in-out">
          GOLF LESSONS
        </h2>
        <img
          src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/page-lessons-1536x1025.jpg?strip=all&lossy=1&sharp=1&ssl=1"
          alt=""
          className="h-full w-full object-cover scale-[1.1] transition-all duration-300 ease-in-out group-hover:scale-[1]"
        />
      </div>
    </div>
  );
};

export default Page4;
