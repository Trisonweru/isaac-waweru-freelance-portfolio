/* eslint-disable jsx-a11y/role-supports-aria-props */
import React, { useState } from 'react';

import Footer from '@/components/Footer';
import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import UnstyledLink from '@/components/links/UnstyledLink';
import MapComponent from '@/components/Map';
import Notification from '@/components/Notification';
import Seo from '@/components/Seo';
import Social from '@/components/Social';

import { useAppCtx } from '@/context/context';
import { fetcher } from '@/utils/fetcher';
function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [project, setProject] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleMail = async (
    e: React.MouseEvent<HTMLFormElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (
      name.length < 1 ||
      email.length < 1 ||
      project.length < 1 ||
      message.length < 1
    ) {
      setError(true);
    } else {
      const data = {
        name,
        email,
        project,
        message,
      };
      const { error } = await fetcher('/api/mail', { data });

      if (error.length > 0) {
        setSuccess(false);
        setError(true);
        setTimeout(() => setError(false), 5000);
      }
      setError(false);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 5000);
      setName('');
      setEmail('');
      setProject('');
      setMessage('');
    }
  };

  const { theme } = useAppCtx();
  const [dark, setDark] = useState(theme);
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

              <form method='POST' onSubmit={handleMail}>
                <div className='mt-4 w-full'>
                  <label className='block text-left text-sm text-white'>
                    Full Name
                  </label>
                  <input
                    type='text'
                    className='border px-4 py-2 rounded-md text-sm w-full focus:border-[#5551F8] focus:outline-none focus:ring-1 focus:ring-[#403eb9]'
                    placeholder='Full name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label className='block mt-4 text-left text-sm text-white'>
                    Project
                  </label>
                  <input
                    className='border px-4 py-2 rounded-md text-sm w-full focus:border-[#5551F8] focus:outline-none focus:ring-1 focus:ring-[#403eb9]'
                    placeholder='Subject'
                    type='text'
                    value={project}
                    onChange={(e) => setProject(e.target.value)}
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
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
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
          <Notification success={success} error={error} />
        </section>
        <MapComponent />
        <Footer />
      </main>
    </Layout>
  );
}

export default Contact;
