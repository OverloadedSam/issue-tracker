'use client';

import Link from 'next/link';
import { IoIosBug } from 'react-icons/io';
import classNames from 'classnames';
import { usePathname } from 'next/navigation';

const NavBar = () => {
  const currentPath = usePathname();

  const links = [
    { label: 'Dashboard', href: '/' },
    { label: 'Issues', href: '/issues' },
  ];

  return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
      <Link href='/'>
        <IoIosBug />
      </Link>

      <ul className='flex space-x-6'>
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className={classNames({
                'text-zinc-900': currentPath === link.href,
                'text-zinc-500': currentPath !== link.href,
                'text-zinc-500 hover:text-zinc-800 transition-colors': true,
              })}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
