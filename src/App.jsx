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
      className="font-montserrat text-white"
      onMouseMove={handleCursorMovement}
    >
      <div
        id="nav"
        className="z-50 fixed flex justify-start items-center gap-[2.5vw] px-[8vw] py-6 w-full"
        ref={navRef}
      >
        <img
          src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/logo-white.svg"
          alt=""
          className="h-[8vw] sm:h-[5vw]"
        />
        <div className="hidden sm:flex justify-between items-center gap-[2.5vw]">
          {[
            'Practice Arena',
            'Pro Golf Training',
            'Family Mini-Golf',
            'Bistro & Snacks',
            'Corporate Events',
          ].map((item) => (
            <h4
              key={item}
              className="font-medium text-sm lg:text-base uppercase cursor-default"
              onMouseEnter={handleHoverStart}
              onMouseLeave={handleHoverEnd}
            >
              {item}
            </h4>
          ))}
        </div>
      </div>
      <div
        id="cursor"
        className="z-[99] fixed bg-[#95C11E] rounded-full w-5 h-5"
        ref={cursorRef}
      ></div>
      <div
        id="cursor-blur"
        className="z-[9] fixed bg-[#96c11e68] blur-3xl rounded-full w-96 h-96"
        ref={cursorBlurRef}
      ></div>
      <video
        autoPlay
        loop
        muted
        src="https://res.cloudinary.com/dd85jrb4b/video/upload/f_auto:video,q_auto/v1/golf-club/yetn9sm9ctkfxxru8k9n"
        className="-z-10 fixed w-full h-full object-cover"
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
