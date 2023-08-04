import classNames from '../../../../tools/classNames';

const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'Profile', href: '#', current: false },
  { name: 'Resources', href: '#', current: false },
  { name: 'Company Directory', href: '#', current: false },
  { name: 'Openings', href: '#', current: false },
];

export default function LgNavItems() {
  return (
    <div className="col-span-2">
      <nav className="flex space-x-4">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={classNames(
              item.current ? 'text-white' : 'text-indigo-100',
              'rounded-md bg-white bg-opacity-0 px-3 py-2 text-sm font-medium hover:bg-opacity-10',
            )}
            aria-current={item.current ? 'page' : undefined}>
            {item.name}
          </a>
        ))}
      </nav>
    </div>
  );
}
