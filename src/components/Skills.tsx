/* eslint-disable @next/next/no-img-element */
import React from 'react';

function Skills() {
  return (
    <div className='flex flex-wrap items-center justify-between px-3 space-y-4 w-full md:flex-nowrap md:space-x-8 md:space-y-0'>
      <div className='bg-[#112035] flex flex-col rounded-b-md shadow shadow-[#112035] w-full'>
        <img src='/images/frontend.png' alt='frontend image' />
        <div className='px-3 py-3'>
          <h2 className='text-white text-xl'>Frontend Services</h2>
          <ul className='list-disc pt-3 px-8 text-sm text-white'>
            <li>UX/UI Design</li>
            <li>UX/UI Design Implementation</li>
            <li>Unit Testing</li>
          </ul>
        </div>
      </div>
      <div className='bg-[#112035] flex flex-col rounded-b-md shadow shadow-[#112035] w-full'>
        <img src='/images/backend.png' alt='frontend image' />
        <div className='px-3 py-3'>
          <h2 className='text-white text-xl'>Backend Services</h2>
          <ul className='list-disc pt-3 px-8 text-sm text-white'>
            <li>Backend Design</li>
            <li>Business Logic Design and Implemetation </li>
            <li>Backend Testing </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
