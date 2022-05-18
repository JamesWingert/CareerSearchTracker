import { Popover, Transition } from '@headlessui/react';
import { HiMenu, HiX } from 'react-icons/hi';
import { IoBarChartSharp } from 'react-icons/io5';
import { MdQueryStats } from 'react-icons/md';
import { FaWpforms } from 'react-icons/fa';

import { Fragment } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from 'react-daisyui';
import logo from '../assets/images/logo.png';
import { useAppContext } from '../context/appContext';

import React from 'react';
import { NavLink } from 'react-router-dom';
const navigation = [
  { id: 1, name: 'Stats', path: '/', icon: <IoBarChartSharp /> },
  { id: 2, name: 'All Jobs', path: '/all-jobs', icon: <MdQueryStats /> },
  { id: 3, name: 'Add Job', path: '/add-job', icon: <FaWpforms /> },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme('');

  const { logoutUser } = useAppContext();
  return (
    <div>
      <div className='container mx-auto bg-base-100 '>
        <div className='pt-6 pb-8 '>
          <Popover>
            <nav
              className=' max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6'
              aria-label='Global'
            >
              <div className='flex items-center flex-1 justify-between'>
                <div className='flex items-center justify-between w-full lg:w-auto'>
                  <a href='/'>
                    <span className='sr-only'>Home</span>
                    <img className='h-8 w-auto sm:h-10' src={logo} alt='' />
                  </a>{' '}
                  <div className='justify-center items-center flex text-center ml-8'>
                    <label className='swap swap-rotate '>
                      <input className='hidden' type='checkbox' id='swap' />
                      {theme === 'dracula' ? (
                        <FaSun
                          onClick={() =>
                            setTheme(theme === 'dracula' ? 'winter' : 'dracula')
                          }
                          className='text-accent dark:text-accent text-4xl cursor-pointer swap-on'
                        />
                      ) : (
                        <FaMoon
                          onClick={() =>
                            setTheme(theme === 'dracula' ? 'winter' : 'dracula')
                          }
                          className='text-success text-3xl cursor-pointer swap-off'
                        />
                      )}
                    </label>
                  </div>
                  <div className='-mr-2 flex items-center lg:hidden'>
                    {' '}
                    <Popover.Button className='bg-base-100 rounded-md p-1 inline-flex items-center justify-center  hover:ring-2 hover:ring-error focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white'>
                      <span className='sr-only'>Open main menu</span>
                      <HiMenu className='h-6 w-6' aria-hidden='true' />
                    </Popover.Button>
                  </div>
                </div>
                <div className='hidden lg:space-x-10 lg:flex lg:relative  '>
                  {navigation.map((item) => (
                    <a
                      key={item.id}
                      href={item.path}
                      className='font-medium flex items-center  hover: '
                    >
                      <span className='mr-2'>{item.icon}</span>
                      {item.name}
                    </a>
                  ))}
                </div>{' '}
                <div className='hidden lg:flex'>
                  <button
                    href='/'
                    className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md  bg-success text-base-100 hover:bg-transparent hover:text-success hover:border-success btn'
                    onClick={logoutUser}
                  >
                    Log Out
                  </button>
                </div>
              </div>
            </nav>

            <Transition
              as={Fragment}
              enter='duration-150 ease-out'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='duration-100 ease-in'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Popover.Panel
                focus
                className='absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden'
              >
                <div className='rounded-lg shadow-md bg-base-100 ring-1 ring-black ring-opacity-5 overflow-hidden'>
                  <div className='px-5 pt-4 flex items-center justify-between'>
                    <div>
                      <img
                        className='h-8 w-auto hover:cursor-pointer'
                        src={logo}
                        href='/'
                        alt=''
                      />
                    </div>
                    <div className='-mr-2'>
                      <Popover.Button className='bg-base-100 rounded-md p-2 inline-flex items-center justify-center  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-error'>
                        <span className='sr-only'>Close menu</span>
                        <HiX className='h-6 w-6' aria-hidden='true' />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className='px-2 pt-2 pb-3 space-y-1'>
                    {navigation.map((item) => (
                      <NavLink
                        key={item.id}
                        to={item.path}
                        className='flex items-center text-center px-3 py-2 rounded-md text-base font-medium  hover:bg-base-300 '
                      >
                        <span className='mr-2'>{item.icon}</span>
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                  <div className='flex justify-center'>
                    <button
                      href='/'
                      className='btn block  px-5 uppercase text-center font-medium max-w-xs tracking-wider text-lg bg-base-300 hover:bg-base-300/60 border-2 rounded-md text-neutral '
                      onClick={logoutUser}
                    >
                      Log out
                    </button>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        </div>
      </div>
    </div>
  );
}
