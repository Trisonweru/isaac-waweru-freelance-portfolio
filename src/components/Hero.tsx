/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import { motion, useAnimation } from 'framer-motion';
import { DownloadOutline } from 'heroicons-react';
import { useInView } from 'react-intersection-observer';

import UnstyledLink from './links/UnstyledLink';
interface props {
  dark: boolean;
}
const Hero = ({ dark }: props) => {
  const { inView, entry, ref } = useInView();
  const animationControl = useAnimation();
  const animationControl2 = useAnimation();

  if (inView) {
    animationControl.start({
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.4,
        ease: 'easeInOut',
      },
    });
    animationControl2.start({
      opacity: 1,
      transition: {
        delay: 0.4,
        ease: 'easeInOut',
      },
    });
  }
  return (
    <div
      ref={ref}
      className='flex flex-wrap-reverse h-[650px] items-center justify-center px-3 w-full md:h-[500px] md:justify-between'
    >
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={animationControl2}
        className='flex flex-col justify-center max-w-2xl space-y-6 w-full md:h-full md:w-[80%]'
      >
        <h1
          className={
            dark
              ? 'text-white w-full  md:text-5xl'
              : 'text-slate-900 w-full md:text-5xl'
          }
        >
          I'm Freelance Full-stack Web Developer
        </h1>
        <div className='w-full md:w-[80%]'>
          <p className={dark ? 'text-white text-left' : 'text-slate-900'}>
            Experienced Freelance Full-stack Web Developer with a demonstrated
            history of working in the information technology and services
            industry. My strongest skills are ReactJS/NextJS, AngularJS, Redux,
            Node.js, Typescript, Tailwind CSS, GraphQl, Apollo Client/Server,
            Prisma, Docker, MongoDB, MySQL and PostgreSQL. Strong engineering
            professional with a Bachelor's degree focused in Computer Science
            from Kibabii University.
          </p>
        </div>
        <div className='flex items-center justify-between w-full md:w-[80%]'>
          <UnstyledLink href='https://cal.com/trisonweru/schedule-an-interview'>
            <div className='bg-gradient-to-r cursor-pointer from-[#C31260] px-4 py-2 rounded-2xl shadow-md text-white to-[#500621]'>
              Schedule Interview
            </div>
          </UnstyledLink>
          <a
            href='/images/Isaac Waweru Kariithi-CV-2022.pdf'
            download='File name'
          >
            <div
              className={
                dark
                  ? 'border-2 shadow-sm duration-200 hover:shadow-white cursor-pointer flex h-fit items-center px-2 py-1 rounded-2xl text-white'
                  : 'border-2 shadow-sm duration-200 hover:shadow-slate-900 border-slate-900 cursor-pointer flex h-fit items-center px-2 py-1 rounded-2xl text-slate-900'
              }
            >
              CV <DownloadOutline className='h-5 ml-2' />
            </div>
          </a>
        </div>
      </motion.div>
      <motion.div
        initial={{
          scale: 0,
          opacity: 0,
        }}
        animate={animationControl}
        className='flex items-center justify-center relative md:h-full'
      >
        <div className='absolute h-[250px] right-1 rounded-full shadow-xl top-5 w-[250px] z-0 md:left-8 md:top-12'>
          <svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'>
            <path
              fill={dark ? '#031E45' : '#808080'}
              d='M54.6,-52C71.1,-38.1,85,-19,86.9,1.8C88.7,22.7,78.4,45.4,61.9,60C45.4,74.6,22.7,81.1,0.2,80.9C-22.4,80.8,-44.8,74,-60.5,59.4C-76.2,44.8,-85.2,22.4,-85.2,0C-85.2,-22.4,-76.1,-44.7,-60.4,-58.6C-44.7,-72.5,-22.4,-78,-1.7,-76.3C19,-74.6,38.1,-65.9,54.6,-52Z'
              transform='translate(100 100)'
            />
          </svg>
        </div>
        <div className='h-[250px] rounded-full shadow-md w-[250px] z-20'>
          <img
            src='/images/profile.jpg'
            alt='Isaac Waweru'
            className='h-[250px] object-cover rounded-full shadow-lg w-[250px]'
          />
        </div>
      </motion.div>
    </div>
  );
};
export default Hero;
