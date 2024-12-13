import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Page3 = () => {
  const colon1ref = useRef(null);
  const colon2ref = useRef(null);

  useGSAP(() => {
    gsap.from(colon1ref.current, {
      y: -30,
      x: -30,
      scrollTrigger: {
        trigger: colon1ref.current,
        scroller: 'body',
        start: 'top 55%',
        end: 'top 45%',
        scrub: 2,
      },
    });
    gsap.from(colon2ref.current, {
      y: 30,
      x: 30,
      scrollTrigger: {
        trigger: colon1ref.current,
        scroller: 'body',

        start: 'top 55%',
        end: 'top 45%',
        scrub: 2,
      },
    });
  });

  return (
    <div className="min-h-screen w-full flex items-center justify-center relative">
      <p className="text-2xl font-extrabold w-[60%] text-center uppercase leading-9">
        Absolutely loved the experience! The staff looked after me ensured I was
        enjoying the range and gave me helpful tips to get the best out of my
        game. Digital screens to see my progress. I’ll be back 😁 🏌🏽‍♀️
      </p>
      <img
        src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/quote-left.svg"
        alt=""
        className="absolute h-14 top-[20%] left-[10%]"
        ref={colon1ref}
      />
      <img
        src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/quote-right.svg"
        alt=""
        className="absolute h-14 bottom-[20%] right-[10%]"
        ref={colon2ref}
      />
    </div>
  );
};

export default Page3;
