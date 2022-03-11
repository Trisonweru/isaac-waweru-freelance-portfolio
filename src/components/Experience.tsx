import React from 'react';

import UnstyledLink from './links/UnstyledLink';

function Experience() {
  return (
    <div className='flex items-center justify-center mb-3 mt-7 px-3 w-full'>
      <div className='bg-gradient-to-b flex from-[#C31260] justify-center rounded-md to-[#500621] w-full'>
        <div className='flex flex-col items-center justify-center px-3 py-4 space-y-3 text-center text-white w-full'>
          <h2 className='text-sm'>Work Experience</h2>
          <div className='flex flex-col items-center justify-center space-y-3 w-full'>
            <h3 className='text-xl underline'>
              ME Moringa for Life EPZ LTD - March, 2020 - Nov, 2021
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
      </div>
    </div>
  );
}

export default Experience;
