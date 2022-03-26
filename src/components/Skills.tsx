/* eslint-disable @next/next/no-img-element */
import { motion, useAnimation } from 'framer-motion';
import React from 'react';
import { useInView } from 'react-intersection-observer';

function Skills() {
  const { inView, entry, ref } = useInView();
  const animationControl = useAnimation();
  const animationControl2 = useAnimation();
  const animationControl3 = useAnimation();
  if (inView) {
    animationControl.start({
      x: 0,
      transition: {
        delay: 0.2,
        ease: 'linear',
      },
    });
    animationControl2.start({
      x: 0,
      transition: {
        delay: 0.4,
        ease: 'linear',
      },
    });
    animationControl3.start({
      x: 0,
      transition: {
        delay: 0.6,
        ease: 'linear',
      },
    });
  }
  return (
    <div
      ref={ref}
      className='flex flex-wrap items-center justify-between overflow-x-hidden px-3 rounded-t-lg space-y-4 w-full md:flex-nowrap md:space-x-8 md:space-y-0'
    >
      <motion.div
        initial={{
          x: '100vw',
        }}
        animate={animationControl}
        className='bg-[#031E45] flex flex-col rounded-lg shadow shadow-[#031E45] w-full md:p-6 md:rounded-lg'
      >
        <div className='bg-white h-[300px] rounded-t-lg md:rounded-lg'>
          <img
            src='/images/Svg-3.svg'
            alt='frontend image'
            className='h-full object-fill rounded-t-lg shadow-md w-full md:rounded-lg'
          />
        </div>

        <div className='px-3 py-3'>
          <h2 className='text-white text-xl'>Frontend Services</h2>
          <ul className='list-disc pt-3 px-8 text-sm text-white'>
            <li>UX/UI Design</li>
            <li>UX/UI Design Implementation</li>
            <li>Unit Testing</li>
          </ul>
        </div>
      </motion.div>
      <motion.div
        initial={{
          x: '-100vw',
        }}
        animate={animationControl}
        className='bg-[#031E45] flex flex-col rounded-lg shadow shadow-[#031E45] w-full md:p-6 md:rounded-lg'
      >
        <div className='bg-white h-[300px] rounded-t-lg s md:rounded-lg'>
          <img
            src='/images/Svg-4.svg'
            alt='frontend image'
            className='h-full object-fill rounded-t-lg shadow-md w-full md:rounded-lg'
          />
        </div>
        <div className='px-3 py-3'>
          <h2 className='text-white text-xl'>Backend Services</h2>
          <ul className='list-disc pt-3 px-8 text-sm text-white'>
            <li>Backend Design</li>
            <li>Business Logic Design and Implemetation </li>
            <li>Backend Testing </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}

export default Skills;
