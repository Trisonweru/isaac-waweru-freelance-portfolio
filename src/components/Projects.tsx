/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

import UnstyledLink from './links/UnstyledLink';
interface props {
  dark: boolean;
}
function Projects({ dark }: props) {
  return (
    <div className='flex flex-col h-auto items-center mt-8 px-3 space-y-8 w-full'>
      <div
        className={
          dark
            ? 'bg-[#031E45] flex flex-col items-center pb-2 rounded-md shadow-[#112035] shadow-md space-y-4 w-full md:flex-row md:pb-0'
            : 'bg-[#808080] flex flex-col items-center pb-2 rounded-md shadow-[#808080] shadow-md space-y-4 w-full md:flex-row md:pb-0'
        }
      >
        <div className='flex items-center w-full'>
          <img
            className='block m-auto vidyard-player-embed w-[100%]'
            src='https://play.vidyard.com/2qiPWQGe52QSZhQDQ1qhAx.jpg'
            data-uuid='2qiPWQGe52QSZhQDQ1qhAx'
            data-v='4'
            data-type='inline'
          />
        </div>
        <div className='flex flex-col h-full px-4 space-y-4 w-full'>
          <h2 className='text-white text-xl'>TheList</h2>
          <p className='text-sm text-white'>
            An app to help users browse or search different categories of movies
            save them to favorite lists, watchlists, or custom-created lists.
            The user can share all the custom-created lists with users within
            the app.
          </p>
          <div className='flex flex-col flex-wrap space-y-2'>
            <div className='flex'>
              <div className='border flex items-center justify-center px-2 rounded-2xl shadow-2xl text-sm text-white whitespace-nowrap'>
                NextJS
              </div>
              <div className='border flex items-center justify-center px-2 rounded-2xl shadow-2xl text-sm text-white whitespace-nowrap'>
                Material UI Toolkit
              </div>
              <div className='border flex items-center justify-center px-2 rounded-2xl shadow-2xl text-sm text-white whitespace-nowrap'>
                Prisma
              </div>
            </div>
            <div className='flex'>
              <div className='border flex items-center justify-center px-2 rounded-2xl shadow-2xl text-sm text-white whitespace-nowrap'>
                Typescript
              </div>
              <div className='border flex items-center justify-center px-2 rounded-2xl shadow-2xl text-sm text-white whitespace-nowrap'>
                Tailwind CSS
              </div>
              <div className='border flex items-center justify-center px-2 rounded-2xl shadow-2xl text-sm text-white whitespace-nowrap'>
                PostgreSQL
              </div>
            </div>
          </div>
          <div className='flex justify-end space-x-2 w-full'>
            <UnstyledLink href='https://github.com/Trisonweru/TheList'>
              <div className='border cursor-pointer duration-200 px-3 py-1 rounded-2xl shadow-sm text-white hover:bg-[#5551F8]'>
                View Code
              </div>
            </UnstyledLink>
            <UnstyledLink href='https://the-list-gray.vercel.app/'>
              <div className='bg-[#5551F8] cursor-pointer px-3 py-1 rounded-2xl shadow-[#5551F8] shadow-sm text-white hover:bg-[#2b2a8b]'>
                URL
              </div>
            </UnstyledLink>
          </div>
        </div>
      </div>
      <div
        className={
          dark
            ? 'bg-[#031E45] flex flex-col items-center pb-2 rounded-md shadow-[#112035] shadow-md space-y-4 w-full md:flex-row-reverse md:pb-0'
            : 'bg-[#808080] flex flex-col items-center pb-2 rounded-md shadow-[#808080] shadow-md space-y-4 w-full md:flex-row-reverse md:pb-0'
        }
      >
        <div className='flex items-center w-full'>
          <img
            className='block m-auto vidyard-player-embed w-[100%]'
            src='https://play.vidyard.com/UY2VSUDRKUBReL2mP3gLhg.jpg'
            data-uuid='UY2VSUDRKUBReL2mP3gLhg'
            data-v='4'
            data-type='inline'
          />
        </div>
        <div className='flex flex-col h-full px-4 space-y-4 w-full'>
          <h2 className='text-white text-xl'>MoneyPlug</h2>
          <p className='text-sm text-white'>
            A prototype project that helps users transfer money to each other
            within the app. The sender can convert money to one of the available
            currencies and the receiver can receive money to the respective
            account.
          </p>
          <div className='flex flex-col flex-wrap space-y-2'>
            <div className='flex'>
              <div className='border flex items-center justify-center px-2 rounded-2xl shadow-2xl text-sm text-white whitespace-nowrap'>
                NextJS
              </div>
              <div className='border flex items-center justify-center px-2 rounded-2xl shadow-2xl text-sm text-white whitespace-nowrap'>
                Material UI Toolkit
              </div>
              <div className='border flex items-center justify-center px-2 rounded-2xl shadow-2xl text-sm text-white whitespace-nowrap'>
                Prisma
              </div>
            </div>
            <div className='flex'>
              <div className='border flex items-center justify-center px-2 rounded-2xl shadow-2xl text-sm text-white whitespace-nowrap'>
                Typescript
              </div>
              <div className='border flex items-center justify-center px-2 rounded-2xl shadow-2xl text-sm text-white whitespace-nowrap'>
                Tailwind CSS
              </div>
              <div className='border flex items-center justify-center px-2 rounded-2xl shadow-2xl text-sm text-white whitespace-nowrap'>
                PostgreSQL
              </div>
            </div>
          </div>
          <div className='flex justify-end space-x-2 w-full'>
            <UnstyledLink href='https://github.com/Trisonweru/next-ts-prisma-tailwindcss'>
              <div className='border cursor-pointer duration-200 px-3 py-1 rounded-2xl shadow-sm text-white hover:bg-[#5551F8]'>
                View Code
              </div>
            </UnstyledLink>
            <UnstyledLink href='https://next-ts-prisma-tailwindcss.vercel.app/'>
              <div className='bg-[#5551F8] cursor-pointer px-3 py-1 rounded-2xl shadow-[#5551F8] shadow-sm text-white hover:bg-[#2b2a8b]'>
                URL
              </div>
            </UnstyledLink>
          </div>
        </div>
      </div>
      <div
        className={
          dark
            ? 'bg-[#031E45] flex flex-col items-center pb-2 rounded-md shadow-[#112035] shadow-md space-y-4 w-full md:flex-row md:pb-0'
            : 'bg-[#808080] flex flex-col items-center pb-2 rounded-md shadow-[#808080] shadow-md space-y-4 w-full md:flex-row md:pb-0'
        }
      >
        <div className='flex items-center w-full'>
          <img
            className='block m-auto vidyard-player-embed w-[100%]'
            src='https://play.vidyard.com/teujvKkPwA222De7fRyBoh.jpg'
            data-uuid='teujvKkPwA222De7fRyBoh'
            data-v='4'
            data-type='inline'
          />
        </div>
        <div className='flex flex-col h-full px-4 space-y-4 w-full'>
          <h2 className='text-white text-xl'>meetme.com</h2>
          <p className='text-sm text-white'>
            meetme.com is an ongoing project on phase 1 where I was supposed to
            develop an events scheduler where users can share a link for clients
            to book their events. The required sections completed are UI design
            and Implementation, creating a default event, viewing bookings,
            cancel bookings, booking link and google calendar events API
            integration.
          </p>
          <div className='flex flex-col flex-wrap space-y-2'>
            <div className='flex'>
              <div className='border flex items-center justify-center px-2 rounded-2xl shadow-2xl text-sm text-white whitespace-nowrap'>
                NextJS
              </div>

              <div className='border flex items-center justify-center px-2 rounded-2xl shadow-2xl text-sm text-white whitespace-nowrap'>
                Prisma
              </div>
              <div className='border flex items-center justify-center px-2 rounded-2xl shadow-2xl text-sm text-white whitespace-nowrap'>
                Google Calender API
              </div>
            </div>
            <div className='flex'>
              <div className='border flex items-center justify-center px-2 rounded-2xl shadow-2xl text-sm text-white whitespace-nowrap'>
                Typescript
              </div>
              <div className='border flex items-center justify-center px-2 rounded-2xl shadow-2xl text-sm text-white whitespace-nowrap'>
                Tailwind CSS
              </div>
              <div className='border flex items-center justify-center px-2 rounded-2xl shadow-2xl text-sm text-white whitespace-nowrap'>
                PostgreSQL
              </div>
            </div>
          </div>
          <div className='flex justify-end space-x-2 w-full'>
            <UnstyledLink href='https://github.com/Trisonweru/meetme.com-NextJS-TailwindCSS-Prisma-Postgresql'>
              <div className='border cursor-pointer duration-200 px-3 py-1 rounded-2xl shadow-sm text-white hover:bg-[#5551F8]'>
                View Code
              </div>
            </UnstyledLink>
            <UnstyledLink href='https://meetme-com-next-js-tailwind-css-prisma-postgresql.vercel.app'>
              <div className='bg-[#5551F8] cursor-pointer px-3 py-1 rounded-2xl shadow-[#5551F8] shadow-sm text-white hover:bg-[#2b2a8b]'>
                URL
              </div>
            </UnstyledLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
