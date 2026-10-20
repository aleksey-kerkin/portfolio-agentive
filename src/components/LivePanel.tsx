import { useEffect, useState } from 'react';
import { SectionHead } from './ui';

const groups = ['Все агенты', 'Продажи', 'Маркетинг', 'Операции'];
const initial = [
  {
    icon: '📨',
    name: 'Поиск клиентов',
    task: 'Обрабатывает 48 контактов',
    p: 72,
    color: 'bg-[#7c6cff]',
  },
  {
    icon: '📊',
    name: 'Аналитический отчёт',
    task: 'Сводит данные за квартал',
    p: 91,
    color: 'bg-[#5b8cff]',
  },
  {
    icon: '🔎',
    name: 'Агент-исследователь',
    task: 'Ждёт подтверждения',
    p: 45,
    color: 'bg-[#9b8cff]',
  },
];
const logs = [
  'Агент рассылок отправил 12 писем лидам из приоритета A, 2 минуты назад',
  'Аналитический отчёт: выгрузка из Amplitude завершена, только что',
  'Агент-исследователь нашёл 5 новых конкурентов, 1 минуту назад',
];

export default function LivePanel() {
  const [agents, setAgents] = useState(initial);
  const [log, setLog] = useState(0);
  const [group, setGroup] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = window.setInterval(() => {
      setAgents((a) =>
        a.map((x) => ({
          ...x,
          p: x.p >= 99 ? 12 : x.p + Math.ceil(Math.random() * 3),
        })),
      );
      setLog((l) => (l + 1) % logs.length);
    }, 2200);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section
      id="live-panel"
      aria-labelledby="live-panel-title"
      className="relative overflow-hidden bg-[#0a0a12] py-16 text-white md:py-24">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_0%,rgba(91,77,255,.25),transparent)]"
        aria-hidden="true"
      />
      <div className="container-x relative">
        <SectionHead
          dark
          id="live-panel-title"
          chip="Живая панель"
          title={
            <>
              Смотрите, как агенты думают и действуют{' '}
              <span className="text-[#8f86ff]">в реальном времени.</span>
            </>
          }
          text="Полная прозрачность: каждое решение, каждое действие, каждый результат."
        />
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#13131d] shadow-[0_30px_80px_rgba(0,0,0,.5)]">
          <div
            className="flex items-center gap-2 border-b border-white/10 px-4 py-3"
            aria-hidden="true">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
            <span className="mx-auto hidden rounded-md bg-white/5 px-16 py-1 text-[11px] text-white/40 sm:block">
              app.agentive.ru/dashboard
            </span>
          </div>
          <div className="grid md:grid-cols-[200px_1fr]">
            <nav
              aria-label="Группы агентов"
              className="border-b border-white/10 p-4 md:border-b-0 md:border-r">
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-white/40">
                Пространство
              </p>
              <ul className="flex gap-1 overflow-x-auto md:flex-col">
                {groups.map((g, i) => (
                  <li key={g}>
                    <button
                      type="button"
                      onClick={() => setGroup(i)}
                      aria-pressed={group === i}
                      className={`w-full whitespace-nowrap rounded-md px-3 py-2 text-left text-[13px] ${group === i ? 'border border-white/15 bg-white/10' : 'text-white/60 hover:text-white'}`}>
                      ● {g}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="p-4 md:p-6">
              <div className="mb-4 flex items-center justify-between gap-3">
                <p className="text-sm font-semibold">
                  Активные агенты: 6 работают
                </p>
                <button
                  type="button"
                  className="rounded-md border border-white/15 px-3 py-1.5 text-xs text-[#b9b2ff] hover:bg-white/5">
                  + Новый агент
                </button>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {agents.map((a) => (
                  <li
                    key={a.name}
                    className="rounded-xl border border-white/10 bg-white/[.03] p-4">
                    <span
                      className="grid h-8 w-8 place-items-center rounded-lg bg-white/10"
                      aria-hidden="true">
                      {a.icon}
                    </span>
                    <p className="mt-3 text-sm font-semibold">{a.name}</p>
                    <p className="text-xs text-white/40">{a.task}</p>
                    <div
                      className="mt-4 h-1 rounded-full bg-white/10"
                      role="progressbar"
                      aria-label={a.name}
                      aria-valuenow={a.p}
                      aria-valuemin={0}
                      aria-valuemax={100}>
                      <div
                        className={`h-full rounded-full ${a.color} transition-[width] duration-700`}
                        style={{ width: `${a.p}%` }}
                      />
                    </div>
                    <p className="mt-1 text-right text-[11px] text-white/50">
                      {a.p}%
                    </p>
                  </li>
                ))}
              </ul>
              <p
                className="mt-6 rounded-lg border border-white/10 bg-white/[.03] px-4 py-3 text-xs text-[#b9b2ff]"
                aria-live="polite">
                ● {logs[log]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
