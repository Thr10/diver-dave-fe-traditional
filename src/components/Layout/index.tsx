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
import { Menu, Popover, Transition } from '@headlessui/react';
import Logo from './components/Logo';
import RightSectionOnDesktop from './components/RightSectionOnDesktop';
import NoLgSearch from './components/NoLgSearch';
import NoLgMenuButton from './components/NoLgMenuButton';
import LgNavItems from './components/LgNavItems';
import LgSearch from './components/LgSearch';
import NoLgMenuPopoverContent from './components/NoLgMenuPopoverContent';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

export default function Layout() {
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
