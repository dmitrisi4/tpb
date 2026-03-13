'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { menuItems } from '@/components/menu-data';

export function Header(): JSX.Element {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur'>
      <div className='mx-auto flex max-w-6xl items-center justify-between px-4 py-3'>
        <Link href='/' className='text-lg font-bold text-brand'>
          SF
        </Link>

        <button
          type='button'
          className='rounded-md border border-slate-300 px-3 py-1 text-sm md:hidden'
          onClick={() => setIsOpen((prev) => !prev)}
        >
          Меню
        </button>

        <nav className='hidden gap-4 md:flex'>
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm transition ${pathname === item.href ? 'text-brand' : 'text-slate-600 hover:text-slate-900'}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {isOpen && (
        <nav className='space-y-2 border-t border-slate-200 bg-white px-4 py-3 md:hidden'>
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block rounded-md px-3 py-2 text-sm ${pathname === item.href ? 'bg-blue-50 text-brand' : 'text-slate-700'}`}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
