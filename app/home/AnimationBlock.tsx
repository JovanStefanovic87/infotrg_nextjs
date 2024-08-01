'use client';

import React from 'react';
import Typewriter from '../components/text/Typewriter';
import H1 from '../components/text/H1';

const AnimationBlock: React.FC = () => {
  return (
    <>
      <H1 title='INFORMACIJA POKREĆE TRGOVINU' color='white' pb={0} />
      <div className='flex items-start justify-center p-4'>
        <div className='relative flex rounded-xl items-center justify-center bg-waveGradient w-full max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-3xl h-32 sm:h-40 md:h-56 lg:h-72 pb-4 overflow-hidden animated-background'>
          <div className='absolute w-0 h-0 lg:mb-8 border-l-[72px] border-r-[72px] border-t-[48px] border-t-yellowLogo border-l-transparent border-r-transparent sm:border-l-[108px] sm:border-r-[108px] sm:border-t-[72px] md:border-l-[150px] md:border-r-[150px] md:border-t-[100px] lg:border-l-[225px] lg:border-r-[225px] lg:border-t-[150px] animate-slideInTop'></div>
          <div className='absolute transform origin-center w-4 h-10 sm:w-5 sm:h-12 md:w-7 md:h-20 lg:w-10 lg:h-32 animate-rotateHorizontal'>
            <svg
              version='1.1'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 1200 2700'
              preserveAspectRatio='xMidYMid meet'
              shape-rendering='geometricPrecision'
            >
              <g transform='translate(0,2700) scale(0.1,-0.1)' fill='#000000' stroke='none'>
                <path
                  d='M10635 22104 c-293 -53 -553 -233 -740 -514 -147 -220 -209 -439
      -208 -730 0 -145 3 -177 26 -264 81 -304 290 -521 575 -598 118 -31 314 -29
      446 6 199 52 376 163 546 343 225 238 342 494 370 813 35 399 -127 717 -445
      876 -158 78 -370 104 -570 68z'
                />
                <path
                  d='M9335 17163 c-295 -35 -516 -93 -820 -216 -795 -320 -1507 -832
      -2345 -1684 -248 -252 -430 -446 -430 -459 1 -8 481 -384 502 -392 4 -2 124
      108 265 244 461 442 774 723 970 871 181 135 410 236 570 249 196 16 276 -74
      259 -290 -17 -208 -21 -224 -249 -971 -1035 -3387 -1577 -5637 -1577 -6545 0
      -141 18 -286 46 -380 97 -326 327 -533 655 -591 92 -16 269 -16 373 0 330 52
      802 259 1221 535 446 295 1089 832 1916 1600 l206 191 -21 24 c-12 12 -114
      113 -228 223 l-208 200 -127 -119 c-906 -843 -1514 -1301 -1756 -1320 -58 -5
      -71 -3 -111 21 -60 35 -121 122 -148 209 -108 357 278 1994 1219 5162 384
      1296 605 2093 699 2530 79 370 50 550 -116 715 -102 102 -225 158 -408 185
      -87 13 -279 18 -357 8z'
                />
              </g>
            </svg>
          </div>
        </div>
        <div className='absolute mt-[5.2rem] sm:mt-[7rem] md:mt-[10rem] lg:mt-[13rem] text-lg sm:text-xl md:text-4xl lg:text-6xl font-bold text-gray-800 tracking-widest'>
          <Typewriter text='INNFOTRG' />
        </div>
      </div>
    </>
  );
};

export default AnimationBlock;
