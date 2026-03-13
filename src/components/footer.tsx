export function Footer(): JSX.Element {
  return (
    <footer className='border-t border-slate-200 bg-white'>
      <div className='mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-sm text-slate-600 md:flex-row md:items-center md:justify-between'>
        <p>© {new Date().getFullYear()} SF. Telegram trading app.</p>
        <p>Built for Telegram Mini App format.</p>
      </div>
    </footer>
  );
}
