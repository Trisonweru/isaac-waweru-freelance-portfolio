import {
  UilFacebookF,
  UilLinkedinAlt,
  UilTwitterAlt,
} from '@iconscout/react-unicons';
import { motion, useAnimation } from 'framer-motion';
import React from 'react';
import { useInView } from 'react-intersection-observer';

import UnstyledLink from './links/UnstyledLink';
interface props {
  dark: boolean;
}
function Social({ dark }: props) {
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
      className={
        dark
          ? 'bg-[#031E45] shadow-md fixed flex h-[125px] px-1 items-center rounded-r-md justify-center left-0 top-60 w-15 text-white'
          : 'bg-[#808080] fixed flex h-[125px] items-center px-1 rounded-r-md  justify-center left-0 top-60 w-15 text-white'
      }
    >
      <motion.div
        initial={{
          scale: 0,
          opacity: 0,
        }}
        animate={animationControl}
        className='flex flex-col h-full items-center justify-center rounded-r-md space-y-2 w-full'
      >
        <UnstyledLink
          href='https://twitter.com/TrisonWaweru'
          className='cursor-pointer'
        >
          <div className='backdrop-brightness-50 cursor-pointer px-1.5 py-1.5 rounded-full hover:backdrop-brightness-0'>
            <UilTwitterAlt size='1.3em' />
          </div>
        </UnstyledLink>
        <UnstyledLink
          href='https://www.facebook.com/weshly.weru.7'
          className='cursor-pointer'
        >
          <div className='backdrop-brightness-50 cursor-pointer px-1.5 py-1.5 rounded-full hover:backdrop-brightness-0'>
            <UilFacebookF size='1.3em' />
          </div>
        </UnstyledLink>
        <UnstyledLink
          href='https://www.linkedin.com/in/isaac-waweru-6b7877167/'
          className='cursor-pointer'
        >
          <div className='backdrop-brightness-50 cursor-pointer px-1.5 py-1.5 rounded-full hover:backdrop-brightness-0'>
            <UilLinkedinAlt size='1.3em' />
          </div>
        </UnstyledLink>
      </motion.div>
    </div>
  );
}

export default Social;
