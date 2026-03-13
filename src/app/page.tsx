export default function HomePage(): JSX.Element {
  return (
    <section className='space-y-4'>
      <h1 className='text-3xl font-bold'>SF — платформа для Telegram App</h1>
      <p className='text-slate-600'>
        Стартовый экран проекта с базовой архитектурой, меню и мобильной навигацией.
      </p>
      <div className='rounded-xl border border-slate-200 bg-white p-4'>
        <p>Далее можно подключить Telegram WebApp SDK, авторизацию и API.</p>
      </div>
    </section>
  );
}
