import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Page2 from './pages/page2';
import Page1 from './pages/page1';
import Page3 from './pages/page3';
import Page4 from './pages/page4';
import Footer from './pages/footer';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const App = () => {
  const navRef = useRef(null);
  const cursorRef = useRef(null);
  const cursorBlurRef = useRef(null);
  const mainRef = useRef(null);

  const { contextSafe } = useGSAP();

  useGSAP(() => {
    gsap.to(navRef.current, {
      backgroundColor: '#000',
      height: '110px',
      duration: 0.5,
      scrollTrigger: {
        trigger: '#nav',
        scroller: 'body',
        start: 'top -10%',
        end: 'top -11%',
        scrub: 1,
      },
    });

    gsap.to(mainRef.current, {
      backgroundColor: '#000',
      scrollTrigger: {
        trigger: '#main',
        scroller: 'body',
        start: 'top -25%',
        end: 'top -70%',
        scrub: 2,
      },
    });
  });

  const handleCursorMovement = contextSafe((e) => {
    gsap.to(cursorBlurRef.current, {
      x: e.clientX - 144,
      y: e.clientY - 144,
      duration: 1.2,
    });
    gsap.to(cursorRef.current, {
      x: e.clientX + 30,
      y: e.clientY,
    });
  });

  const handleHoverStart = contextSafe(() => {
    console.log('animation started');
    gsap.to(cursorRef.current, {
      scale: 3,
      backgroundColor: 'transparent',
      border: '1px solid #fff',
      duration: 0.3,
    });
  });

  const handleHoverEnd = contextSafe(() => {
    console.log('animation ended');
    gsap.to(cursorRef.current, {
      scale: 1,
      backgroundColor: '#95C11E',
      border: 'none',
      duration: 0.3,
    });
  });

  return (
    <div
      className="text-white font-montserrat"
      onMouseMove={handleCursorMovement}
    >
      <div
        id="nav"
        className="h-[10vw] w-full flex items-center justify-start px-[8vw] gap-[2.5vw] fixed z-50"
        ref={navRef}
      >
        <img
          src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/logo-white.svg"
          alt=""
          className="h-[5vw]"
        />
        {[
          'Practice Arena',
          'Pro Golf Training',
          'Family Mini-Golf',
          'Bistro & Snacks',
          'Corporate Events',
        ].map((item) => (
          <h4
            key={item}
            className="uppercase font-medium cursor-default"
            onMouseEnter={handleHoverStart}
            onMouseLeave={handleHoverEnd}
          >
            {item}
          </h4>
        ))}
      </div>
      <div
        id="cursor"
        className="h-5 w-5 bg-[#95C11E] rounded-full fixed z-[99]"
        ref={cursorRef}
      ></div>
      <div
        id="cursor-blur"
        className="h-96 w-96 bg-[#96c11e68] rounded-full fixed blur-3xl z-[9]"
        ref={cursorBlurRef}
      ></div>
      <video
        autoPlay
        loop
        muted
        src="/4784177-hd_1280_720_60fps (1).mp4"
        className="h-full w-full object-cover fixed -z-10"
      ></video>

      <main id="main" className="relative bg-[rgba(0,0,0,0.39)]" ref={mainRef}>
        <Page1 />
        <Page2 />
        <Page3 />
        <Page4 />
        <Footer />
      </main>
    </div>
  );
};

export default App;
