import { Popover, Transition } from '@headlessui/react';
import { HiMenu, HiX } from 'react-icons/hi';
import { IoBarChartSharp } from 'react-icons/io5';
import { MdQueryStats } from 'react-icons/md';
import { FaWpforms } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';
import { Fragment } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from 'react-daisyui';
import logo from '../assets/images/logo.png';
import { useAppContext } from '../context/appContext';

import React from 'react';
import { NavLink } from 'react-router-dom';
const navigation = [
  { id: 1, name: 'Stats', path: '/', icon: <IoBarChartSharp /> },
  { id: 2, name: 'All Jobs', path: 'all-jobs', icon: <MdQueryStats /> },
  { id: 3, name: 'Add Job', path: 'add-job', icon: <FaWpforms /> },
  { id: 4, name: 'Profile', path: 'profile', icon: <ImProfile /> },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme('');

  const { logoutUser, user } = useAppContext();
  return (
    <div>
      <div className='container mx-auto bg-base-100 '>
        <div className='pt-6 pb-8 '>
          <Popover>
            <nav
              className=' max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6'
              aria-label='Global'
            >
              <div className='flex items-center flex-1'>
                <div className='flex items-center justify-between w-full md:w-auto'>
                  <a href='/'>
                    <span className='sr-only'>Workflow</span>
                    <img className='h-8 w-auto sm:h-10' src={logo} alt='' />
                  </a>
                  <div className='-mr-2 flex items-center md:hidden'>
                    <Popover.Button className='bg-base-100 rounded-md p-2 inline-flex items-center justify-center  hover:bg-gray-700 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white'>
                      <span className='sr-only'>Open main menu</span>
                      <HiMenu className='h-6 w-6' aria-hidden='true' />
                    </Popover.Button>
                  </div>
                </div>
                <div className='hidden space-x-10 md:flex md:ml-10 relative '>
                  {navigation.map((item) => (
                    <NavLink
                      key={item.id}
                      to={item.path}
                      className='font-medium flex items-center  hover: '
                    >
                      <span className='mr-2'>{item.icon}</span>
                      {item.name}
                    </NavLink>
                  ))}

                  <div className='justify-center items-center flex text-center'>
                    <label className='swap swap-rotate '>
                      <input className='hidden' type='checkbox' id='swap' />
                      {theme === 'business' ? (
                        <FaSun
                          onClick={() =>
                            setTheme(
                              theme === 'business' ? 'winter' : 'business'
                            )
                          }
                          className='text-accent dark:text-accent text-4xl cursor-pointer swap-on'
                        />
                      ) : (
                        <FaMoon
                          onClick={() =>
                            setTheme(
                              theme === 'business' ? 'winter' : 'business'
                            )
                          }
                          className='text-success text-4xl cursor-pointer swap-off'
                        />
                      )}
                    </label>
                  </div>
                </div>{' '}
              </div>
              <div className='hidden md:flex'>
                <button
                  href='/'
                  className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md  bg-success text-base-100 hover:bg-transparent hover:text-success hover:border-success btn'
                  onClick={logoutUser}
                >
                  Log Out
                </button>
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
                className='absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'
              >
                <div className='rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden'>
                  <div className='px-5 pt-4 flex items-center justify-between'>
                    <div>
                      <img className='h-8 w-auto' src={logo} alt='' />
                    </div>
                    <div className='-mr-2'>
                      <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
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
                        className='block px-3 py-2 rounded-md text-base font-medium  hover: hover:bg-gray-50'
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                  <button
                    href='/'
                    className='block w-full px-5 py-3 text-center font-medium  bg-gray-50 hover:bg-gray-100'
                    onClick={logoutUser}
                  >
                    Log out
                  </button>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        </div>
      </div>
    </div>
  );
}
