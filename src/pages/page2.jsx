import React from 'react';
import { Tilt } from '@jdion/tilt-react';

const Page2 = () => {
  return (
    <div id="page2" className="z-[10] w-full min-h-screen">
      <div
        id="scroller"
        className="z-10 relative overflow-x-hidden whitespace-nowrap"
      >
        <div
          id="scroller-in"
          className="inline-block overflow-hidden whitespace-nowrap animate-scrollLeft"
        >
          <h4 className="inline-block text-stroke-white hover:text-stroke-green-2px px-4 font-black text-black hover:text-[#95C11E] text-5xl lg:text-8xl transition-colors duration-300">
            TOPTRACER RANGE
          </h4>
          <h4 className="inline-block text-stroke-white hover:text-stroke-green-2px px-4 font-black text-black hover:text-[#95C11E] text-5xl lg:text-8xl transition-colors duration-300">
            GOLF LESSONS
          </h4>
          <h4 className="inline-block text-stroke-white hover:text-stroke-green-2px px-4 font-black text-black hover:text-[#95C11E] text-5xl lg:text-8xl transition-colors duration-300">
            ADVENTURE GOLF
          </h4>
          <h4 className="inline-block text-stroke-white hover:text-stroke-green-2px px-4 font-black text-black hover:text-[#95C11E] text-5xl lg:text-8xl transition-colors duration-300">
            COFFEE SHOP
          </h4>

          <h4 className="inline-block text-stroke-white hover:text-stroke-green-2px px-4 font-black text-black hover:text-[#95C11E] text-5xl lg:text-8xl transition-colors duration-300">
            TOPTRACER RANGE
          </h4>
          <h4 className="inline-block text-stroke-white hover:text-stroke-green-2px px-4 font-black text-black hover:text-[#95C11E] text-5xl lg:text-8xl transition-colors duration-300">
            GOLF LESSONS
          </h4>
          <h4 className="inline-block text-stroke-white hover:text-stroke-green-2px px-4 font-black text-black hover:text-[#95C11E] text-5xl lg:text-8xl transition-colors duration-300">
            ADVENTURE GOLF
          </h4>
          <h4 className="inline-block text-stroke-white hover:text-stroke-green-2px px-4 font-black text-black hover:text-[#95C11E] text-5xl lg:text-8xl transition-colors duration-300">
            COFFEE SHOP
          </h4>
        </div>
      </div>

      <div
        id="about-us"
        className="relative flex md:flex-row flex-col justify-around items-center gap-8 my-20 px-12 w-full min-h-[40vh]"
      >
        <img
          src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/home-about-1-300x200.jpg?strip=all&lossy=1&sharp=1&ssl=1"
          alt=""
          className="rounded-2xl w-56 h-56 object-cover"
        />
        <div id="about-us-in" className="lg:w-1/2 text-center">
          <h3 className="mb-4 font-extrabold md:text-4xl">ABOUT US</h3>
          <p className="lg:text-xl lg:leading-8">
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
          className="rounded-2xl w-56 h-56 object-cover"
        />
      </div>

      <div
        className="z-10 relative flex lg:flex-row flex-col justify-between items-center gap-10 mx-8 my-20"
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
            className={`h-full w-full lg:w-[24%] rounded-xl bg-cover bg-center overflow-hidden`}
            style={{
              backgroundImage: `url(${card.image})`,
            }}
          >
            <div className="bg-[#95C11E] opacity-0 hover:opacity-100 p-10 pt-20 w-full h-full transition-opacity duration-700">
              <h4 className="mb-5 font-extrabold text-black text-3xl uppercase">
                {card.title}
              </h4>
              <p className="text-black text-lg">{card.description}</p>
            </div>
          </Tilt>
        ))}
      </div>

      <div className="bg-[linear-gradient(to_left_bottom,#119f3a,#ACE022)] flex justify-between items-center h-[40vh]">
        <img
          src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/dots-side.svg"
          alt=""
          className="w-[14%] h-full object-cover"
        />
        <h4 className="w-1/2 font-extrabold text-black text-2xl text-center uppercase">
          Sign up for Sidcup News and Special Offers Straight to Your Inbox
        </h4>
        <img
          src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/dots-side.svg"
          alt=""
          className="w-[14%] h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Page2;
