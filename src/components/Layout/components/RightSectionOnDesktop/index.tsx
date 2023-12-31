import ProfileDropdown from '../ProfileDropdown';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';

export default function RightSectionOnDesktop() {
  return (
    <div className="hidden lg:ml-4 lg:flex lg:items-center lg:pr-0.5">
      <button
        type="button"
        className="flex-shrink-0 rounded-full p-1 text-indigo-200 hover:bg-white hover:bg-opacity-10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white">
        <span className="sr-only">View notifications</span>
        <BellIcon className="h-6 w-6" aria-hidden="true" />
      </button>

      {/* Profile dropdown */}
      <ProfileDropdown />
    </div>
  );
}
