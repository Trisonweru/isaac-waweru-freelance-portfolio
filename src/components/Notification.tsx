import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

interface props {
  success?: boolean;
  error?: boolean;
}

function Notification({ success, error }: props) {
  return (
    <AnimatePresence>
      {success && (
        <motion.div
          initial={{ x: '100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            ease: 'easeOut',
            duration: 1,
          }}
          exit={{ y: '100%', opacity: 0 }}
          className='absolute flex justify-end overflow-x-hidden right-0 shadow-md top-0 w-full z-50'
        >
          <div className='bg-green-500 flex items-center justify-between max-w-[25%] min-h-[50px] px-3 shadow-xl sm:max-w-[25%]'>
            <p className='text-center text-white'>
              Message sent to Isaac Waweru!
            </p>
          </div>
        </motion.div>
      )}
      {error && (
        <motion.div
          initial={{ x: '100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            ease: 'easeOut',
            duration: 1,
          }}
          exit={{ y: '100%', opacity: 0 }}
          className='absolute flex justify-end mb-4 overflow-x-hidden right-0 shadow-md top-0 w-full z-50'
        >
          <div className='bg-red-500 flex h-auto items-center justify-between max-w-[50%] min-h-[50px] px-3 shadow-xl sm:max-w-[25%]'>
            <p className='text-center text-white'>
              Could not send your message!{' '}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Notification;
