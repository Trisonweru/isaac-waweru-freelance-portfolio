import { motion, useAnimation } from 'framer-motion';
import React from 'react';
import { useInView } from 'react-intersection-observer';

import UnstyledLink from './links/UnstyledLink';

function Experience() {
  const { inView, entry, ref } = useInView();
  const animationControl = useAnimation();

  if (inView) {
    animationControl.start({
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.2,
        ease: 'easeInOut',
      },
    });
  }
  return (
    <div
      ref={ref}
      className='flex items-center justify-center mb-7 mt-7 px-3 w-full'
    >
      <motion.div
        initial={{
          scale: 0,
          opacity: 0,
        }}
        animate={animationControl}
        className='bg-gradient-to-b flex from-[#C31260] justify-center rounded-md to-[#500621] w-full'
      >
        <div className='flex flex-col items-center justify-center px-3 py-4 space-y-3 text-center text-white w-full'>
          <h2 className='text-sm'>Work Experience</h2>
          <div className='flex flex-col items-center justify-center space-y-3 w-full'>
            <h3 className='text-xl underline'>
              ICT Officer - ME Moringa for Life EPZ LTD - March, 2020 - Nov,
              2021
            </h3>
            <p className='max-w-[80%] text-sm md:max-w-[70%]'>
              At ME Moringa for Life EPZ LTD, I worked as ICT Officer where I
              developed and maintained a wordpress website as well as network
              administration and configuration, IT infrastructure maintenance,
              office equipment operation and maintenance, product design and
              social media manager.
            </p>
          </div>
          <div>
            <UnstyledLink href='https://memoringaforlife.com/'>
              <div className='bg-[#5551F8] cursor-pointer px-3 py-1 rounded-2xl shadow-[#5551F8] shadow-sm text-white hover:bg-[#2b2a8b]'>
                View Website
              </div>
            </UnstyledLink>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Experience;
