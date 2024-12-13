import React from 'react';

const Footer = () => {
  return (
    <div className="min-h-[40vh] w-full bg-[linear-gradient(to_left_bottom,#119f3a,#ACE022)] relative ">
      <img
        src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/dots-footer.svg"
        alt=""
        className="h-full w-[30%] absolute left-0 object-cover z-0"
      />
      <div className="h-full relative flex items-center justify-evenly z-[99] py-28">
        <img
          src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/logo-white.svg"
          alt=""
          className="h-[6vw]"
        />

        <div className="flex flex-col ">
          <span className="text-2xl font-extrabold text-black hover:text-white transition-all duration-300">
            TOPTRACER RANGE
          </span>
          <span className="text-2xl font-extrabold text-black hover:text-white transition-all duration-300">
            {' '}
            CRAZY GOLF
          </span>
          <span className="text-2xl font-extrabold text-black hover:text-white transition-all duration-300">
            CAFE`
          </span>
        </div>
        <div className="flex flex-col ">
          <span className="text-2xl font-extrabold text-black hover:text-white transition-all duration-300">
            EVENTS
          </span>
          <span className="text-2xl font-extrabold text-black hover:text-white transition-all duration-300">
            GOLF LESSONS
          </span>
          <span className="text-2xl font-extrabold text-black hover:text-white transition-all duration-300">
            CONTACT US
          </span>
        </div>
        <div className="w-[20%] text-black font-semibold">
          A20, Sidcup Bypass Chislehurst Kent BR7 6RP Tel: 0208 309 0181 Get
          Directions
        </div>
      </div>
    </div>
  );
};

export default Footer;
