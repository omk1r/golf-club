import React from 'react';
import { Tilt } from '@jdion/tilt-react';

const Page2 = () => {
  return (
    <div id="page2" className="min-h-screen w-full z-[10]">
      <div
        id="scroller"
        className="whitespace-nowrap overflow-x-hidden relative z-10 "
      >
        <div
          id="scroller-in"
          className="inline-block whitespace-nowrap overflow-hidden animate-scrollLeft"
        >
          <h4 className="inline-block text-8xl font-black text-stroke-white text-black px-4 hover:text-stroke-green-2px hover:text-[#95C11E] transition-colors duration-300">
            TOPTRACER RANGE
          </h4>
          <h4 className="inline-block text-8xl font-black text-stroke-white text-black px-4 hover:text-stroke-green-2px hover:text-[#95C11E] transition-colors duration-300">
            GOLF LESSONS
          </h4>
          <h4 className="inline-block text-8xl font-black text-stroke-white text-black px-4 hover:text-stroke-green-2px hover:text-[#95C11E] transition-colors duration-300">
            ADVENTURE GOLF
          </h4>
          <h4 className="inline-block text-8xl font-black text-stroke-white text-black px-4 hover:text-stroke-green-2px hover:text-[#95C11E] transition-colors duration-300">
            COFFEE SHOP
          </h4>

          <h4 className="inline-block text-8xl font-black text-stroke-white text-black px-4 hover:text-stroke-green-2px hover:text-[#95C11E] transition-colors duration-300">
            TOPTRACER RANGE
          </h4>
          <h4 className="inline-block text-8xl font-black text-stroke-white text-black px-4 hover:text-stroke-green-2px hover:text-[#95C11E] transition-colors duration-300">
            GOLF LESSONS
          </h4>
          <h4 className="inline-block text-8xl font-black text-stroke-white text-black px-4 hover:text-stroke-green-2px hover:text-[#95C11E] transition-colors duration-300">
            ADVENTURE GOLF
          </h4>
          <h4 className="inline-block text-8xl font-black text-stroke-white text-black px-4 hover:text-stroke-green-2px hover:text-[#95C11E] transition-colors duration-300">
            COFFEE SHOP
          </h4>
        </div>
      </div>

      <div
        id="about-us"
        className="min-h-[40vh] w-full flex md:flex-row flex-col items-center justify-around px-12 my-20 relative"
      >
        <img
          src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/home-about-1-300x200.jpg?strip=all&lossy=1&sharp=1&ssl=1"
          alt=""
          className="h-56 w-56 rounded-2xl object-cover"
        />
        <div id="about-us-in" className="w-1/2 text-center ">
          <h3 className="md:text-4xl font-extrabold mb-10">ABOUT US</h3>
          <p className="md:text-xl leading-8">
            Home to a 46-bay, multi-tier, floodlit driving range, powered by
            Toptracer Range technology. Complimented by a practice green and
            bunker, coffee shop and American Golf Store. There truly is
            something for everyone as we also boast two outdoor 18-hole dinosaur
            themed crazy golf courses.
          </p>
        </div>
        <img
          src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/home-about-2-300x200.jpg?strip=all&lossy=1&sharp=1&ssl=1"
          alt=""
          className="h-56 w-56 rounded-2xl object-cover"
        />
      </div>

      <div
        className="h-[80vh] flex items-center justify-center gap-20 relative z-10 my-20"
        id="cards-container"
      >
        {[
          {
            title: 'Toptracer Range',
            description:
              'Enjoy the latest in golf tech with Toptracer, designed for fun and skill development.',
            image:
              'https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/home-toptracer-1024x682.jpg?strip=all&lossy=1&sharp=1&ssl=1',
          },
          {
            title: 'Adventure Golf',
            description:
              'Dive into the excitement with two 18-hole dinosaur-themed courses perfect for all ages.',
            image:
              'https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/hero-4-1024x1024.jpg?strip=all&lossy=1&sharp=1&ssl=1',
          },
          {
            title: 'Golf Lessons',
            description:
              'Enhance your skills with expert-led lessons tailored to all experience levels.',
            image:
              'https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/home-lessons-1024x682.jpg?strip=all&lossy=1&sharp=1&ssl=1',
          },
        ].map((card, index) => (
          <Tilt
            key={index}
            className={`h-full w-[24%] rounded-xl bg-cover bg-center overflow-hidden`}
            style={{
              backgroundImage: `url(${card.image})`,
            }}
          >
            <div className="h-full w-full bg-[#95C11E] pt-20 p-10 opacity-0 hover:opacity-100 transition-opacity duration-700">
              <h4 className="text-black text-3xl font-extrabold uppercase mb-5 ">
                {card.title}
              </h4>
              <p className="text-black text-lg">{card.description}</p>
            </div>
          </Tilt>
        ))}
      </div>

      <div className="h-[40vh] flex items-center justify-between bg-[linear-gradient(to_left_bottom,#119f3a,#ACE022)]">
        <img
          src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/dots-side.svg"
          alt=""
          className="h-full object-cover w-[14%]"
        />
        <h4 className="w-1/2 text-2xl uppercase font-extrabold text-center text-black">
          Sign up for Sidcup News and Special Offers Straight to Your Inbox
        </h4>
        <img
          src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/dots-side.svg"
          alt=""
          className="h-full object-cover w-[14%]"
        />
      </div>
    </div>
  );
};

export default Page2;
