import React from 'react';

import UnstyledLink from './links/UnstyledLink';

function ContactButton() {
  return (
    <div className='flex items-center justify-center my-8 w-full'>
      <UnstyledLink href='/contact' aria-current='page'>
        <div className='bg-gradient-to-r cursor-pointer from-[#C31260] px-4 py-2 rounded-2xl shadow-md text-center text-white to-[#500621] w-[150px]'>
          Contact me
        </div>
      </UnstyledLink>
    </div>
  );
}

export default ContactButton;
