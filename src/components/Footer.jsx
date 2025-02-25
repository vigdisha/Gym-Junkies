import React from 'react';
import { FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer aria-label='Site Footer' className='bg-gray-900 h-auto'>
      <div className='max-width-xl px-4 pt-16 pb-8 mx-auto sm:px-6 lg:px-8 lg:pt-24'>
        <div className='text-center'>
          <h2 className='text-3xl font-extrabold text-white sm:text-5xl'>
            Proudly Open Source 🍕
          </h2>

          <p className='max-w-sm mx-auto mt-4 text-gray-400'>
            Gym Junkies is an open source project.
          </p>
          <p className='max-w-sm mx-auto mt-0 text-gray-400'>
            Feel free to contribute to the project.
          </p>
        </div>

        <div className='pt-8 mt-16 border-t flex gap-3 border-gray-800   sm:justify-between lg:mt-24'>
          <a
            href='https://github.com/gabrysia694/Gym-Junkies/blob/main/LICENSE'
            target='_blank'
            className='text-white'
          >
            Under MIT License
          </a>

          <a
            href='https://github.com/gabrysia694/Gym-Junkies'
            rel='noreferrer'
            target='_blank'
            className='text-gray-100 transition hover:opacity-75 dark:text-gray-200'
          >
            <FaGithub className='text-2xl' />
          </a>
        </div>
      </div>
    </footer>
  );
}
