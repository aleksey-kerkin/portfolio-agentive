type Status = 'running' | 'done' | 'queued';
const badge: Record<Status, [string, string]> = {
  running: ['Работает', 'bg-emerald-50 text-emerald-700'],
  done: ['Готово', 'bg-blue-50 text-blue-700'],
  queued: ['В очереди', 'bg-amber-50 text-amber-700'],
};
const agents: { icon: string; name: string; task: string; status: Status }[] = [
  {
    icon: '📨',
    name: 'Агент рассылок',
    task: 'Пишет follow-up 48 лидам…',
    status: 'running',
  },
  {
    icon: '📊',
    name: 'Сборщик отчётов',
    task: 'Недельная аналитика собрана',
    status: 'done',
  },
  {
    icon: '🔎',
    name: 'Агент-исследователь',
    task: 'В очереди: анализ конкурентов',
    status: 'queued',
  },
];

/** Декоративная композиция «плавающих» карточек агентов в первом экране */
export default function AgentCards() {
  return (
    <div
      className="relative mx-auto h-[420px] w-full max-w-[360px] md:h-[380px] md:max-w-[460px]"
      aria-hidden="true">
      <div className="card absolute left-0 top-24 w-[82%] p-3 animate-float md:top-16 md:w-[300px]">
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-ink/40">
          Активные агенты
        </p>
        <ul className="space-y-2">
          {agents.map((a) => (
            <li
              key={a.name}
              className="flex items-center gap-2.5 border-t border-line pt-2 first:border-0 first:pt-0">
              <span className="grid h-7 w-7 flex-none place-items-center rounded-md bg-brand-soft text-sm">
                {a.icon}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-[12px] font-semibold">
                  {a.name}
                </span>
                <span className="block truncate text-[11px] text-ink/50">
                  {a.task}
                </span>
              </span>
              <span
                className={`rounded px-1.5 py-0.5 text-[10px] font-semibold ${badge[a.status][1]}`}>
                {badge[a.status][0]}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="card absolute right-0 top-0 w-[44%] p-3 animate-float [animation-delay:-2s] md:w-[160px]">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-ink/40">
          Сегодня
        </p>
        <p className="font-display text-2xl font-bold">1 284</p>
        <p className="text-[11px] text-ink/50">задач выполнено</p>
        <div className="mt-2 h-1.5 rounded-full bg-page">
          <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-brand to-brand-violet" />
        </div>
      </div>
      <div className="card absolute bottom-0 left-[4%] w-[46%] p-3 animate-float [animation-delay:-4s] md:w-[170px]">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-ink/40">
          Живой поток
        </p>
        <ul className="mt-2 space-y-1.5 text-[12px] font-semibold">
          <li className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-violet" />
            Триггер получен
          </li>
          <li className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
            Обработка…
          </li>
          <li className="flex items-center gap-2 text-ink/30">
            <span className="h-1.5 w-1.5 rounded-full bg-ink/20" />
            Отправка результата
          </li>
        </ul>
      </div>
      <div className="card absolute bottom-6 right-0 w-[44%] p-3 animate-float [animation-delay:-3s] md:w-[170px]">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-ink/40">
          Сэкономлено
        </p>
        <p className="font-display text-2xl font-bold">47 ч / нед</p>
        <p className="text-[11px] font-semibold text-emerald-600">
          ↑ на 23% к прошлой
        </p>
      </div>
    </div>
  );
}
