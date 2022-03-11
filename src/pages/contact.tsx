/* eslint-disable jsx-a11y/role-supports-aria-props */
import React from 'react';

import Footer from '@/components/Footer';
import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import UnstyledLink from '@/components/links/UnstyledLink';
import MapComponent from '@/components/Map';
import Seo from '@/components/Seo';
import Social from '@/components/Social';

import { useAppCtx } from '@/context/context';

function Contact() {
  const { theme } = useAppCtx();
  const [dark, setDark] = React.useState(theme);
  if (theme !== dark) {
    setDark(theme);
  }
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo templateTitle='Freelancer Web Developer Contact' />
      <Header param='/' />

      <main>
        <section className={dark ? 'bg-[#02142E] relative' : 'bg-white  '}>
          <div className='flex flex-col items-center justify-center layout min-h-screen text-center'>
            <div
              className={
                dark
                  ? ' bg-[#031E45] m-auto px-3 py-3 rounded-md shadow-md w-full md:w-2/3'
                  : 'bg-[#808080] m-auto px-3 py-3 rounded-md shadow-md w-full md:w-2/3'
              }
            >
              <div className='flex items-center justify-end w-full'>
                <UnstyledLink href='https://cal.com/trisonweru/schedule-an-interview'>
                  <div className='bg-gradient-to-r cursor-pointer from-[#C31260] px-4 py-2 rounded-2xl shadow-md text-white to-[#500621]'>
                    Schedule Interview
                  </div>
                </UnstyledLink>
              </div>

              <form method='POST'>
                <div className='mt-4 w-full'>
                  <label className='block text-left text-sm text-white'>
                    Full Name
                  </label>
                  <input
                    type='text'
                    className='border px-4 py-2 rounded-md text-sm w-full focus:border-[#5551F8] focus:outline-none focus:ring-1 focus:ring-[#403eb9]'
                    placeholder='Full name'
                  />
                </div>
                <div className='mt-4'>
                  <label className='block text-left text-sm text-white'>
                    Email
                  </label>
                  <input
                    type='email'
                    className='border px-4 py-2 rounded-md text-sm w-full focus:border-[#5551F8] focus:outline-none focus:ring-1 focus:ring-[#403eb9]'
                    placeholder='Email Address'
                  />
                </div>
                <div>
                  <label className='block mt-4 text-left text-sm text-white'>
                    Subject
                  </label>
                  <input
                    className='border px-4 py-2 rounded-md text-sm w-full focus:border-[#5551F8] focus:outline-none focus:ring-1 focus:ring-[#403eb9]'
                    placeholder='Subject'
                    type='text'
                  />
                </div>
                <div>
                  <label className='block mt-4 text-left text-sm text-white'>
                    Message
                  </label>
                  <textarea
                    className='border px-4 py-2 rounded-md text-sm w-full focus:border-[#5551F8] focus:outline-none focus:ring-1 focus:ring-[#403eb9]'
                    placeholder='Your message'
                    rows={5}
                  />
                </div>
                <button
                  type='submit'
                  className='bg-[#5551F8] block border border-transparent duration-150 font-medium leading-5 mt-4 px-4 py-2 rounded-lg text-center text-sm text-white transition-colors w-full hover:bg-[#2d2c8a] focus:outline-none focus:shadow-outline-blue active:bg-[#2d2c8a]'
                >
                  Send
                </button>
              </form>
            </div>
          </div>
          <Social dark={dark} />
        </section>
        <MapComponent />
        <Footer />
      </main>
    </Layout>
  );
}

export default Contact;
