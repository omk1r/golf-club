import React from 'react';

const Footer = () => {
  return (
    <div className="bg-[linear-gradient(to_left_bottom,#119f3a,#ACE022)] relative w-full min-h-[40vh]">
      <img
        src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/dots-footer.svg"
        alt=""
        className="left-0 z-0 absolute w-[30%] h-full object-cover"
      />
      <div className="z-[99] relative flex justify-evenly items-center gap-2 px-4 py-14 lg:py-28 h-full">
        <img
          src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/logo-white.svg"
          alt=""
          className="h-12 lg:h-[6vw]"
        />

        <div className="flex flex-col gap-2">
          <span className="font-extrabold text-black hover:text-white text-lg lg:text-2xl transition-all duration-300">
            TOPTRACER RANGE
          </span>
          <span className="font-extrabold text-black hover:text-white text-lg lg:text-2xl transition-all duration-300">
            {' '}
            CRAZY GOLF
          </span>
          <span className="font-extrabold text-black hover:text-white text-lg lg:text-2xl transition-all duration-300">
            CAFE`
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-extrabold text-black hover:text-white text-lg lg:text-2xl transition-all duration-300">
            EVENTS
          </span>
          <span className="font-extrabold text-black hover:text-white text-lg lg:text-2xl transition-all duration-300">
            GOLF LESSONS
          </span>
          <span className="font-extrabold text-black hover:text-white text-lg lg:text-2xl transition-all duration-300">
            CONTACT US
          </span>
        </div>
        <div className="w-[20%] font-semibold text-black text-xs sm:text-base">
          A20, Sidcup Bypass Chislehurst Kent BR7 6RP Tel: 0208 309 0181 Get
          Directions
        </div>
      </div>
    </div>
  );
};

export default Footer;
