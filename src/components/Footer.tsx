import React from 'react';

import UnderlineLink from './links/UnderlineLink';

function Footer() {
  return (
    <footer className='bg-[#112035] bottom-0 py-2 text-center text-sm text-white w-full'>
      © {new Date().getFullYear()} By{' '}
      <UnderlineLink href='/'>Isaac Waweru</UnderlineLink>
    </footer>
  );
}

export default Footer;
