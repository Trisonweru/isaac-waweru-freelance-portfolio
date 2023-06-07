import { motion, useAnimation } from 'framer-motion';
import React from 'react';
import { useInView } from 'react-intersection-observer';

import UnstyledLink from './links/UnstyledLink';

function Experience({ dark }: any) {
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
      className='flex flex-col items-center justify-center mb-14 mt-8 px-3 w-full'
    >
      <div
        className={
          dark
            ? 'border-b-2 border-white inline-block mt-8 mb-14 pb-4'
            : 'border-b-2 border-slate-900 inline-block mt-8 mb-14 pb-4'
        }
      >
        <h3
          className={
            dark ? 'font-semibold text-white' : 'font-semibold text-slate-900'
          }
        >
          Work Experience
        </h3>
      </div>

      <div className='flex flex-col gap-3'>
        <motion.div
          initial={{
            scale: 0,
            opacity: 0,
          }}
          animate={animationControl}
          className='bg-gradient-to-b flex from-[#C31260] justify-center rounded-md to-[#500621] w-full'
        >
          <div className='flex flex-col items-center justify-center px-3 py-4 space-y-3  text-white w-full'>
            <div className='flex flex-col space-y-3 w-full'>
              <h4 className='text-lg text-center'>
                Full Stack Web Developer - Mzawadi - May, 2021 - Mar, 2022
              </h4>
              As a React full-stack web developer at Mzawadi, I acquired
              extensive experience in developing end-to-end solutions using
              cutting-edge technologies such as React/NextJS, Redux/Context API,
              Prisma, NodeJS, MongoDB, and MySQL. During my tenure, I have
              successfully contributed to the development of several notable
              projects that have positively impacted users. Among these projects
              are:
              <br />
              i) Jibukie App - This innovative solution enables users to secure
              appointments with partnering clinics around the country. The app
              seamlessly integrates with the M-Pesa payment system, allowing
              users to pay for booking fees effortlessly. As a key member of the
              development team, I made significant contributions towards the
              app's development.
              <br />
              URL: https://jibukie-app.vercel.app/
              <br />
              ii) Nyumba Mkononi - I was involved in the development of this
              innovative solution that enables middle-income earners and below
              to save and pay for construction materials progressively. The
              materials can be redeemed to construct a house of their choice.
              The app seamlessly integrates with M-Pesa and PayPal payment
              systems, allowing users to pay for their targeted construction
              materials with ease.
              <br />
              URL:https://nyumba-mkononi.vercel.app/login
              <br />
              <span className='font-bold'> ii) Stations Attendant App</span> -
              As part of the development team, I contributed to the creation of
              this solution, which helps fuel station attendants reward points
              to their customers. Customers can redeem these points at the
              stations once they surpass a certain threshold set by management.
              <br />
              <br />
              My experience at Mzawadi has equipped me with diverse technical
              expertise, including project management, quality assurance, and
              collaborative teamwork. Working on projects with significant
              positive impact has been a highlight of my career at Mzawadi.
            </div>
            <div>
              <UnstyledLink href='https://memoringaforlife.com/'>
                <div className='bg-[#5551F8] cursor-pointer px-3 py-1 rounded-2xl shadow-[#5551F8] shadow-sm text-white hover:bg-[#2b2a8b]'>
                  View Website
                </div>
              </UnstyledLink>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{
            scale: 0,
            opacity: 0,
          }}
          animate={animationControl}
          className='bg-gradient-to-b flex from-[#C31260] justify-center rounded-md to-[#500621] w-full'
        >
          <div className='flex flex-col items-center justify-center px-3 py-4 space-y-3  text-white w-full'>
            {/* <h2 className='text-sm'>Work Experience</h2> */}
            <div className='flex flex-col items-center justify-center space-y-3 w-full'>
              <h4 className='text-lg '>
                ICT Officer - ME Moringa for Life EPZ LTD - March, 2020 - Jan,
                2021
              </h4>
              <p className='max-w-[80%] text-sm md:max-w-[70%]'>
                As an IT Infrastructure Specialist at ME Moringa Company, I was
                responsible for a broad range of tasks related to the extension
                and maintenance of the company's IT infrastructure. This
                included performing network administration and configuration,
                repairing network equipment, and ensuring smooth operations.
                Additionally, I played a critical role in operating and
                maintaining printers and copiers, guaranteeing they were
                functioning optimally. In addition to these IT infrastructure
                tasks, I also played a key role in the web design and
                development of the company's website.
              </p>
              <p className='max-w-[80%] text-sm md:max-w-[70%]'>
                My responsibilities included providing customer support by
                responding to client emails from website contact forms, managing
                online order processing to ensure timely and accurate delivery
                of products to customers, and designing Moringa products using
                Adobe Illustrator to expand the product range and generate more
                revenue. Furthermore, I was actively involved in managing social
                media accounts and designing and sharing newsletters as part of
                the company's marketing strategy, which helped to increase
                engagement and sales. Overall, my contributions significantly
                impacted the company's success and enhanced its reputation as a
                reliable and customer-focused business.
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
        </motion.div>
      </div>
    </div>
  );
}

export default Experience;
