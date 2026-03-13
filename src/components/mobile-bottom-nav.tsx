'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { menuItems } from '@/components/menu-data';

export function MobileBottomNav(): JSX.Element {
  const pathname = usePathname();

  return (
    <nav className='fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200 bg-white md:hidden'>
      <ul className='grid grid-cols-5'>
        {menuItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`block px-1 py-3 text-center text-xs ${pathname === item.href ? 'font-semibold text-brand' : 'text-slate-500'}`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
