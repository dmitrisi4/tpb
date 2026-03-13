export type MenuItem = {
  href: string;
  label: string;
};

export const menuItems: MenuItem[] = [
  { href: '/', label: 'Главная' },
  { href: '/accounts', label: 'Счета' },
  { href: '/promotions', label: 'Промо' },
  { href: '/faq', label: 'FAQ' },
  { href: '/support', label: 'Поддержка' },
];
