import { TelegramIntegrationStatus } from '@/components/telegram-integration-status';

export default function HomePage(): JSX.Element {
  return (
    <section className='space-y-4'>
      <h1 className='text-3xl font-bold'>SF — платформа для Telegram App</h1>
      <p className='text-slate-600'>
        Стартовый экран проекта с базовой архитектурой, меню и мобильной навигацией.
      </p>
      <TelegramIntegrationStatus />
    </section>
  );
}
