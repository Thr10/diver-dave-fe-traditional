import { Menu, Popover, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';

export default function NoLgMenuButton({ open }: { open: boolean }) {
  return (
    <div className="absolute right-0 flex-shrink-0 lg:hidden">
      {/* Mobile menu button */}
      <Popover.Button className="inline-flex items-center justify-center rounded-md bg-transparent p-2 text-indigo-200 hover:bg-white hover:bg-opacity-10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white">
        <span className="sr-only">Open main menu</span>
        {open ? (
          <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
        ) : (
          <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
        )}
      </Popover.Button>
    </div>
  );
}
