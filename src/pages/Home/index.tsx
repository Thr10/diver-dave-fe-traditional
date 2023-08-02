/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Fragment } from 'react';
import { Menu, Popover, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import Logo from './components/Logo';
import RightSectionOnDesktop from './components/RightSectionOnDesktop';
import NoLgSearch from './components/NoLgSearch';
import NoLgMenuButton from './components/NoLgMenuButton';
import LgNavItems from './components/LgNavItems';
import LgSearch from './components/LgSearch';
import NoLgMenuPopoverContent from './components/NoLgMenuPopoverContent';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};
const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'Profile', href: '#', current: false },
  { name: 'Resources', href: '#', current: false },
  { name: 'Company Directory', href: '#', current: false },
  { name: 'Openings', href: '#', current: false },
];
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
      <div className="h-full flex-col flex">
        <Popover as="header" className="bg-indigo-600 pb-24">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                {/* top header row (all screen) */}
                <div className="relative flex items-center justify-center py-5 lg:justify-between">
                  {/* Logo */}
                  <Logo />
                  <RightSectionOnDesktop />
                  <NoLgSearch />
                  <NoLgMenuButton open={open} />
                </div>
                {/* content index Row (No Lg) */}
                <div className="hidden border-t border-white border-opacity-20 py-5 lg:block">
                  <div className="grid grid-cols-3 items-center gap-8">
                    <LgNavItems />
                    <LgSearch />
                  </div>
                </div>
              </div>
              <NoLgMenuPopoverContent />
            </>
          )}
        </Popover>
        <MainContent />
        <Footer />
      </div>
    </>
  );
}
