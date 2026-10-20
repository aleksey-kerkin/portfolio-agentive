import { useRef, useState, type KeyboardEvent } from 'react';
import { Check, SectionHead } from './ui';

const cases = [
  {
    icon: '⚙️',
    title: 'Операции',
    text: 'Автоматизируйте рутину и держите все системы в актуальном состоянии.',
    items: [
      'Синхронизация данных между сервисами',
      'Обработка счетов',
      'Генерация отчётов',
      'Напоминания поставщикам',
    ],
  },
  {
    icon: '📣',
    title: 'Маркетинг',
    text: 'Масштабируйте контент и кампании без расширения штата.',
    items: [
      'Исследования и черновики статей',
      'SEO-аудит',
      'Аналитика кампаний',
      'Мониторинг конкурентов',
    ],
  },
  {
    icon: '💼',
    title: 'Продажи',
    text: 'Воронка работает, пока команда отдыхает.',
    items: [
      'Квалификация лидов',
      'Персональные рассылки',
      'Обогащение данных в CRM',
      'Назначение встреч',
    ],
  },
  {
    icon: '💻',
    title: 'Разработка',
    text: 'Автоматизируйте ревью, тесты и документацию.',
    items: [
      'Саммари пулл-реквестов',
      'Генерация тест-кейсов',
      'Отчёты об инцидентах',
      'Черновики документации',
    ],
  },
];

export default function UseCases() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const onKey = (e: KeyboardEvent, i: number) => {
    const d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
    if (!d) return;
    const n = (i + d + cases.length) % cases.length;
    setActive(n);
    refs.current[n]?.focus();
  };
  const c = cases[active];

  return (
    <section
      id="use-cases"
      aria-labelledby="uc-title"
      className="bg-page py-16 md:py-24">
      <div className="container-x">
        <SectionHead
          id="uc-title"
          chip="Сценарии"
          title="Одна платформа для каждой команды"
          text="Agentive подстраивается под то, как работает ваша команда, а не наоборот."
        />
        <div
          role="tablist"
          aria-label="Команды"
          className="mx-auto mb-6 flex max-w-max gap-1 overflow-x-auto rounded-xl border border-line bg-white p-1 shadow-card">
          {cases.map((x, i) => (
            <button
              key={x.title}
              ref={(el) => {
                refs.current[i] = el;
              }}
              role="tab"
              type="button"
              id={`uc-tab-${i}`}
              aria-controls="uc-panel"
              aria-selected={active === i}
              tabIndex={active === i ? 0 : -1}
              onClick={() => setActive(i)}
              onKeyDown={(e) => onKey(e, i)}
              className={`whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium transition sm:px-4 ${active === i ? 'bg-ink text-white' : 'text-ink/60 hover:text-ink'}`}>
              {x.title}
            </button>
          ))}
        </div>
        <div
          id="uc-panel"
          role="tabpanel"
          aria-labelledby={`uc-tab-${active}`}
          tabIndex={0}
          className="card mx-auto grid max-w-[880px] gap-6 p-6 md:grid-cols-[1fr_1.2fr] md:p-10">
          <div>
            <span
              className="grid h-12 w-12 place-items-center rounded-xl bg-brand-soft text-2xl"
              aria-hidden="true">
              {c.icon}
            </span>
            <h3 className="mt-4 text-2xl font-semibold">{c.title}</h3>
            <p className="mt-2 text-ink/60">{c.text}</p>
          </div>
          <ul className="divide-y divide-line">
            {c.items.map((it) => (
              <li
                key={it}
                className="flex items-center gap-3 py-3 text-sm">
                <Check />
                {it}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
