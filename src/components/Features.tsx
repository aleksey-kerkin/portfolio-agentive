import { SectionHead } from './ui';

const steps = [
  ['🎯', 'Цель: квалифицировать 50 лидов'],
  ['🧲', 'Собрать и оценить данные из CRM'],
  ['✉️', 'Написать персональные письма'],
  ['📊', 'Отправить итоги в Slack'],
];
const integrations = [
  'Gmail',
  'Drive',
  'Slack',
  'Notion',
  'HubSpot',
  'Sheets',
  'Zapier',
];

const Tag = ({ children }: { children: string }) => (
  <span className="mt-5 inline-block rounded-md border border-line bg-white px-2 py-1 text-[11px] font-medium text-ink/70">
    {children}
  </span>
);

export default function Features() {
  return (
    <section
      id="features"
      aria-labelledby="features-title"
      className="container-x py-16 md:py-24">
      <SectionHead
        id="features-title"
        chip="Платформа"
        title="Всё, что нужно вашим агентам для работы"
        text="Одна платформа, чтобы создавать, запускать и координировать ИИ-агентов, которые действительно доводят дело до конца."
      />
      <div className="grid gap-4 lg:grid-cols-[1.45fr_1fr]">
        <article className="rounded-2xl border border-line bg-gradient-to-br from-[#f7f6ff] to-white p-6 md:p-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <span
                className="grid h-10 w-10 place-items-center rounded-xl bg-[#ffe4ec] text-lg"
                aria-hidden="true">
                🧠
              </span>
              <h3 className="mt-4 text-xl font-semibold">
                Автономное планирование
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">
                Агенты разбивают большие цели на шаги, учитывают зависимости и
                подстраиваются, когда что-то меняется. Без вашего участия.
              </p>
              <Tag>Ядро системы</Tag>
            </div>
            <ol className="space-y-2">
              {steps.map(([i, t]) => (
                <li
                  key={t}
                  className="flex items-center gap-3 rounded-lg border border-line bg-white px-3 py-2.5 text-[13px] shadow-card">
                  <span aria-hidden="true">{i}</span>
                  <span className="flex-1">{t}</span>
                  <span
                    className="text-ink/30"
                    aria-hidden="true">
                    ›
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </article>
        <article className="rounded-2xl border border-line bg-gradient-to-br from-[#fbf4ff] to-white p-6 md:p-8">
          <span
            className="grid h-10 w-10 place-items-center rounded-xl bg-[#f1e6ff] text-lg"
            aria-hidden="true">
            🔗
          </span>
          <h3 className="mt-4 text-xl font-semibold">200+ интеграций</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink/60">
            Подключайте любые сервисы. Агенты читают, пишут и действуют во всех
            ваших инструментах.
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {integrations.map((s) => (
              <li
                key={s}
                className="rounded-md border border-line bg-white px-2.5 py-1.5 text-xs shadow-card">
                {s}
              </li>
            ))}
            <li className="rounded-md bg-brand-soft px-2.5 py-1.5 text-xs font-medium text-[#4b3fd9]">
              + ещё 193
            </li>
          </ul>
          <Tag>Интеграции</Tag>
        </article>
        <article className="rounded-2xl border border-line bg-[#f1f8f1] p-6 md:p-8">
          <span
            className="grid h-10 w-10 place-items-center rounded-xl bg-white text-lg"
            aria-hidden="true">
            ♻️
          </span>
          <h3 className="mt-4 text-xl font-semibold">Непрерывная работа</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink/60">
            Агенты работают 24/7 в любых часовых поясах и останавливаются,
            только когда действительно нужен человек.
          </p>
          <p className="mt-5 text-[10px] font-semibold uppercase tracking-wider text-ink/40">
            Агент работает 312 часов
          </p>
          <div
            className="mt-2 flex gap-[3px]"
            aria-hidden="true">
            {Array.from({ length: 28 }, (_, i) => (
              <span
                key={i}
                className="h-4 flex-1 rounded-sm bg-brand-violet"
                style={{ opacity: 0.35 + (i % 5) * 0.15 }}
              />
            ))}
          </div>
          <p className="mt-2 text-xs font-semibold text-emerald-600">
            ● Работает без остановок
          </p>
        </article>
        <article className="rounded-2xl border border-line bg-[#eeeefb] p-6 md:p-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <span
                className="grid h-10 w-10 place-items-center rounded-xl bg-white text-lg"
                aria-hidden="true">
                🤝
              </span>
              <h3 className="mt-4 text-xl font-semibold">
                Командная работа агентов
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">
                Главный агент запускает помощников, раздаёт задачи и собирает
                результат. Агенты работают как команда.
              </p>
              <Tag>Оркестрация</Tag>
            </div>
            <div
              className="flex flex-col items-center justify-center gap-6 text-[12px] font-semibold"
              aria-hidden="true">
              <div className="flex items-center gap-2 rounded-lg border border-line bg-white px-3 py-2 shadow-card">
                ● Главный агент{' '}
                <span className="rounded bg-brand-soft px-1.5 text-[10px] text-[#4b3fd9]">
                  управляет
                </span>
              </div>
              <div className="flex gap-6">
                <div className="rounded-lg border border-line bg-white px-3 py-2 shadow-card">
                  ✉️ Рассылки
                </div>
                <div className="rounded-lg border border-line bg-white px-3 py-2 shadow-card">
                  📈 Аналитика
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
