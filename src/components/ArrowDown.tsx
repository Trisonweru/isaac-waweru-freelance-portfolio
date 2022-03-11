import { ArrowNarrowDownOutline } from 'heroicons-react';
import React from 'react';

interface props {
  dark: boolean;
}

function ArrowDown({ dark }: props) {
  return (
    <div
      className={
        dark
          ? ' h-[50px] text-white w-full flex items-center justify-center mb-8 mt-8 md:mt-0'
          : '  h-[50px] w-full text-white flex items-center justify-center mb-8 mt-8 md:mt-0'
      }
    >
      <div className='bg-[#8a5f6e] border border-[#8a5f6e] flex h-full rounded-2xl shadow-lg'>
        <ArrowNarrowDownOutline className='animate-bounce h-14' />
      </div>
    </div>
  );
}

export default ArrowDown;
