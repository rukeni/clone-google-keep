/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';

import ThemeDropDown from '../ThemeDropDown/ThemeDropDown';

export default function Index() {
  const [rotate, setRotate] = useState(false);
  const [show, setShow] = useState(false);

  return (
    <div className='w-full flex justify-between'>
      <div className=' h-full relative w-full'>
        <div className='bg-white'>
          <div className='2xl:mx-auto'>
            <nav>
              <div className=' flex flex-row justify-between'>
                <button className=' flex space-x-3 items-center py-5 lg:pl-7 sm:pl-6 py-6 pl-4 pr-8 group hover:bg-indigo-500'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5 group-hover:text-white'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fillRule='evenodd'
                      d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <span className='group-hover:text-white'>Google Keep</span>
                </button>
                {/* For large (i.e. desktop and laptop sized screen) */}
                {/* <div className='lg:flex hidden flex-auto justify-between flex-row px-7 py-6'>
                  <div className=' focus:outline-none focus:ring foucs:ring-offset-2 focus:ring-gray-800 bg-gray-50 flex items-center px-4 py-3.5 space-x-3 rounded '>
                    <svg
                      width={16}
                      height={16}
                      viewBox='0 0 16 16'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M6.66667 11.3333C9.24399 11.3333 11.3333 9.24399 11.3333 6.66667C11.3333 4.08934 9.24399 2 6.66667 2C4.08934 2 2 4.08934 2 6.66667C2 9.24399 4.08934 11.3333 6.66667 11.3333Z'
                        stroke='#6B7280'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M14 14L10 10'
                        stroke='#6B7280'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                    <input
                      aria-label='Search Bar'
                      className='py-3 px-0 w-full h-12 font-sans text-base not-italic text-black
                      whitespace-nowrap bg-transparent opacity-100 cursor-text box-border
                      '
                      type='text'
                      placeholder='Search'
                    />
                  </div>
                </div> */}
                <div className='flex justify-start items-center flex-1 ml-5'>
                  <div className='mt-1 relative flex items-center flex-1'>
                    <input
                      type='text'
                      name='search'
                      id='search'
                      placeholder='🔍 빠른 검색'
                      className='transition-all focus:ring-indigo-500 focus:border-indigo-500 focus:bg-white bg-gray-100 block w-full pr-12 py-3 sm:text-sm border-gray-100 rounded-md focus:shadow-slate-400 focus:shadow-xl'
                    />
                    <div className='absolute inset-y-0 right-0 flex py-1.5 pr-1.5'>
                      <kbd className='inline-flex items-center border border-gray-200 rounded px-2 text-sm font-sans font-medium text-gray-400'>
                        {' '}
                        ⌘K{' '}
                      </kbd>
                    </div>
                  </div>
                </div>

                <div className=' hidden sm:flex justify-end flex-row lg:pr-7 sm:pr-6 py-6 pr-4 pl-8'>
                  <div className='cursor-pointer focus:outline-none focus:ring focus:ring-offset-2 focus:ring-gray-800 relative flex justify-center items-center xl:mr-8 mr-6'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-5 w-5'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path
                        fillRule='evenodd'
                        d='M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z'
                        clipRule='evenodd'
                      />
                    </svg>
                    <div className='animate-ping w-1.5 h-1.5 bg-indigo-500 rounded-full absolute top-1 right-0 m-auto duration-200' />
                    <div className=' w-1.5 h-1.5 bg-indigo-500 rounded-full absolute top-1 right-0 m-auto shadow-lg' />
                  </div>
                  <ThemeDropDown />
                  {/* <div className=' flex justify-center items-center flex-row '>
                    <img
                      className='w-10 h-10 '
                      src='https://i.ibb.co/QMddNDb/Ellipse-14.png'
                      alt='individual person'
                    />
                    <div className='ml-2'>
                      <p className='text-lg leading-4 font-semibold text-gray-800'>
                        David Hulk
                      </p>
                      <p className=' font-normal text-xs leading-3 text-gray-600 mt-1'>
                        david@alphahulk.com
                      </p>
                    </div>
                    <svg
                      onClick={() => setRotate(!rotate)}
                      className={`${
                        rotate ? 'rotate-180' : ''
                      } cursor-pointer transform duration-100 xl:ml-7 lg:ml-3.5 ml-2 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-gray-800`}
                      width={14}
                      height={8}
                      viewBox='0 0 14 8'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M1 1L7 7L13 1'
                        stroke='#1F2937'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </div> */}
                </div>
                {/* Burger Icon */}
                <button
                  id='bgIcon'
                  onClick={() => setShow(!show)}
                  className=' focus:outline-none focus:ring focus:ring-offset-2 focus:ring-gray-800 block sm:hidden cursor-pointer lg:pr-7 sm:pr-6 py-6 pr-4'
                >
                  <svg
                    className={`${show ? 'hidden' : ''}`}
                    width={24}
                    height={24}
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      className=' transform duration-150'
                      d='M4 6H20'
                      stroke='#1F2937'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M4 12H20'
                      stroke='#1F2937'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      className=' transform duration-150'
                      d='M4 18H20'
                      stroke='#1F2937'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                  <svg
                    className={`${show ? '' : 'hidden'} `}
                    width={24}
                    height={24}
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M18 6L6 18'
                      stroke='#1F2937'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M6 6L18 18'
                      stroke='#1F2937'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </button>
              </div>
              {/* for medium-sized devices */}
              <div className='lg:hidden hidden sm:flex flex-col lg:px-7 sm:px-6 px-4 '>
                <hr className=' w-full bg-gray-200 ' />
                <div className='lg:hidden flex flex-auto justify-between mt-3 flex-row pb-4'>
                  <div>
                    <p className=' font-normal text-xs leading-3 text-gray-600'>
                      Hi David
                    </p>
                    <h3 className=' font-bold text-xl leading-5 text-gray-800 mt-2'>
                      Welcome Back
                    </h3>
                  </div>
                  <div className=' focus:outline-none focus:ring foucs:ring-offset-2 focus:ring-gray-800 bg-gray-50 flex items-center px-4 py-3.5 space-x-3 rounded '>
                    <svg
                      width={16}
                      height={16}
                      viewBox='0 0 16 16'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M6.66667 11.3333C9.24399 11.3333 11.3333 9.24399 11.3333 6.66667C11.3333 4.08934 9.24399 2 6.66667 2C4.08934 2 2 4.08934 2 6.66667C2 9.24399 4.08934 11.3333 6.66667 11.3333Z'
                        stroke='#6B7280'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M14 14L10 10'
                        stroke='#6B7280'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                    <input
                      aria-label='Search Bar'
                      className=' focus:outline-none w-44 lg:w-56 xl:w-64 bg-gray-50 font-normal text-sm leading-4 text-gray-500 placeholder-gray-500 '
                      type='text'
                      placeholder='Search'
                    />
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
        {/* Mobile and Small devices Navigation */}
        <div
          id='MobileNavigation'
          className={`${
            show ? '' : 'hidden'
          } transform duration-150 sm:hidden h-full bg-white `}
        >
          <div className=' flex flex-col justify-between h-auto '>
            <div className=' flex flex-col lg:px-7 sm:px-6 px-4'>
              <hr className=' w-full bg-gray-200 ' />
              <div className='lg:hidden flex flex-auto justify-between mt-3 flex-row pb-4'>
                <div>
                  <p className=' font-normal text-xs leading-3 text-gray-600'>
                    Hi David
                  </p>
                  <h3 className=' font-bold text-xl leading-5 text-gray-800 mt-2'>
                    Welcome Back
                  </h3>
                </div>
                <div className='cursor-pointer relative flex justify-center items-center'>
                  <svg
                    width={24}
                    height={24}
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z'
                      stroke='#1F2937'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21'
                      stroke='#1F2937'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                  <div className='animate-ping w-1.5 h-1.5 bg-indigo-700 rounded-full absolute top-1 right-0 m-auto duration-200' />
                  <div className=' w-1.5 h-1.5 bg-indigo-700 rounded-full absolute top-1 right-0 m-auto shadow-lg' />
                </div>
              </div>
              <div className=' w-auto sm:w-96 focus:outline-none focus:ring foucs:ring-offset-2 focus:ring-gray-800 bg-gray-50 flex items-center pl-4  space-x-3 rounded mt-4 '>
                <svg
                  width={16}
                  height={16}
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M6.66667 11.3333C9.24399 11.3333 11.3333 9.24399 11.3333 6.66667C11.3333 4.08934 9.24399 2 6.66667 2C4.08934 2 2 4.08934 2 6.66667C2 9.24399 4.08934 11.3333 6.66667 11.3333Z'
                    stroke='#6B7280'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M14 14L10 10'
                    stroke='#6B7280'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
                <input
                  aria-label='Search Bar'
                  className=' focus:outline-none w-full bg-gray-50 font-normal pl-2 text-sm leading-4  py-3.5 text-gray-500 placeholder-gray-500 '
                  type='text'
                  placeholder='Search'
                />
              </div>
            </div>
            <div className=' flex items-center flex-row py-6 px-8 bg-gray-100 absolute bottom-0 left-0 w-full'>
              <img
                className='w-10 h-10 '
                src='https://i.ibb.co/QMddNDb/Ellipse-14.png'
                alt='individual person'
              />
              <div className='ml-2'>
                <p className='text-lg leading-4 font-semibold text-gray-800'>
                  David Hulk
                </p>
                <p className=' font-normal text-xs leading-3 text-gray-600 mt-1'>
                  david@alphahulk.com
                </p>
              </div>
              <svg
                // onClick='rotateIcon()'
                className='cursor-pointer transform duration-100 xl:ml-7 ml-3.5 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-gray-800 '
                width={14}
                height={8}
                viewBox='0 0 14 8'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M1 1L7 7L13 1'
                  stroke='#1F2937'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
