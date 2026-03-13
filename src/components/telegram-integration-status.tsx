'use client';

import { useEffect, useMemo, useState } from 'react';

type TelegramUser = {
  first_name?: string;
  id?: number;
  last_name?: string;
  username?: string;
};

type TelegramWebApp = {
  expand: () => void;
  initData: string;
  initDataUnsafe?: {
    user?: TelegramUser;
  };
  platform?: string;
  ready: () => void;
  version?: string;
};

type TelegramWindow = Window & {
  Telegram?: {
    WebApp?: TelegramWebApp;
  };
};

export function TelegramIntegrationStatus(): JSX.Element {
  const [isChecking, setIsChecking] = useState<boolean>(true);
  const [webApp, setWebApp] = useState<TelegramWebApp | null>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const telegramWindow = window as TelegramWindow;
      const app = telegramWindow.Telegram?.WebApp ?? null;

      if (app) {
        app.ready();
        app.expand();
      }

      setWebApp(app);
      setIsChecking(false);
    }, 150);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  const userLabel = useMemo(() => {
    const user = webApp?.initDataUnsafe?.user;

    if (!user) {
      return null;
    }

    const fullName = [user.first_name, user.last_name].filter(Boolean).join(' ');

    return fullName || user.username || `ID ${user.id ?? 'unknown'}`;
  }, [webApp]);

  return (
    <section className='rounded-xl border border-slate-200 bg-white p-4 shadow-sm'>
      <h2 className='text-lg font-semibold'>Проверка интеграции Telegram WebApp</h2>
      {isChecking ? (
        <p className='mt-2 text-slate-600'>Проверяем доступность Telegram SDK…</p>
      ) : webApp ? (
        <div className='mt-2 space-y-1 text-slate-700'>
          <p className='text-emerald-600'>SDK подключён ✅</p>
          <p>Платформа: {webApp.platform ?? 'unknown'}</p>
          <p>Версия: {webApp.version ?? 'unknown'}</p>
          <p>initData: {webApp.initData ? 'получено' : 'пусто'}</p>
          <p>Пользователь: {userLabel ?? 'нет данных'}</p>
        </div>
      ) : (
        <p className='mt-2 text-amber-700'>
          SDK не найден. Откройте страницу внутри Telegram Mini App для полной проверки.
        </p>
      )}
    </section>
  );
}
