import classNames from '../../../../tools/classNames';

const navigation = [
  { name: '菜谱', href: '#', current: true },
  { name: '食材', href: '#', current: false },
  { name: '武器', href: '#', current: false },
  { name: '鱼类', href: '#', current: false },
  { name: '员工', href: '#', current: false },
  { name: '节日', href: '#', current: false },
  { name: 'Boss', href: '#', current: false },
  { name: '事件', href: '#', current: false },
];

export default function LgNavItems() {
  return (
    <div className="col-span-2 text-NotoSansSC">
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
