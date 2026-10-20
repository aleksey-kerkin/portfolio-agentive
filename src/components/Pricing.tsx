import { useState } from 'react';
import { Check, SectionHead } from './ui';

const plans = [
  {
    id: 'starter',
    name: 'Старт',
    monthly: 0,
    desc: 'Бесплатно навсегда',
    text: 'Для фаундеров-одиночек, которые изучают возможности агентов.',
    items: [
      '3 активных агента',
      '500 задач в месяц',
      '20 интеграций',
      'Поддержка сообщества',
    ],
    cta: 'Начать бесплатно',
  },
  {
    id: 'pro',
    name: 'Pro',
    monthly: 2900,
    desc: 'за пользователя в месяц',
    text: 'Для команд, готовых автоматизировать ключевые процессы.',
    items: [
      'Безлимит агентов',
      '50 000 задач в месяц',
      'Все 200+ интеграций',
      'Командная работа агентов',
      'Приоритетная поддержка',
    ],
    cta: 'Попробовать Pro',
    featured: true,
  },
  {
    id: 'enterprise',
    name: 'Корпоративный',
    monthly: null,
    desc: 'Цена по объёму',
    text: 'Для компаний с критически важной автоматизацией.',
    items: [
      'Всё без ограничений',
      'SSO и SCIM',
      'Кастомные интеграции',
      'Персональный менеджер',
      'SLA и комплаенс',
    ],
    cta: 'Связаться с отделом продаж',
  },
];
const fmt = (n: number) => new Intl.NumberFormat('ru-RU').format(n) + ' ₽';

export default function Pricing() {
  const [annual, setAnnual] = useState(true);
  return (
    <section
      id="pricing"
      aria-labelledby="p-title"
      className="bg-page py-16 md:py-24">
      <div className="container-x">
        <SectionHead
          id="p-title"
          chip="Тарифы"
          title={
            <>
              Простые тарифы, которые <br className="hidden md:block" />
              растут вместе с вами
            </>
          }
          text="Начните бесплатно. Переходите на тариф выше, когда агенты возьмут на себя больше работы."
        />
        <div className="-mt-4 mb-12 flex items-center justify-center gap-3 text-sm">
          <span
            id="lbl-m"
            className={annual ? 'text-ink/50' : 'font-semibold'}>
            Помесячно
          </span>
          <button
            type="button"
            role="switch"
            aria-checked={annual}
            aria-labelledby="lbl-m lbl-a"
            onClick={() => setAnnual((v) => !v)}
            className={`relative h-6 w-11 rounded-full transition ${annual ? 'bg-brand' : 'bg-ink/20'}`}>
            <span
              className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-all ${annual ? 'left-[22px]' : 'left-0.5'}`}
            />
          </button>
          <span
            id="lbl-a"
            className={annual ? 'font-semibold' : 'text-ink/50'}>
            За год
          </span>
          <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-700">
            −20%
          </span>
        </div>
        <div className="grid items-center gap-6 lg:grid-cols-3">
          {plans.map((p) => {
            const price =
              p.monthly === null
                ? 'По запросу'
                : fmt(annual ? Math.round(p.monthly * 0.8) : p.monthly);
            const dark = p.featured;
            return (
              <article
                key={p.id}
                aria-labelledby={`plan-${p.id}`}
                className={`relative flex flex-col rounded-2xl p-6 md:p-8 ${dark ? 'bg-ink text-white shadow-[0_0_0_2px_#5b4dff,0_30px_60px_rgba(20,20,60,.25)] lg:py-12' : 'card'}`}>
                {dark && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#5b4dff] px-3 py-1 text-xs font-semibold">
                    Популярный
                  </span>
                )}
                <h3
                  id={`plan-${p.id}`}
                  className={`font-sans text-xs font-semibold uppercase tracking-wider ${dark ? 'text-white/50' : 'text-ink/50'}`}>
                  {p.name}
                </h3>
                <p className="mt-2 font-display text-4xl font-bold md:text-[44px]">
                  {price}
                </p>
                <p
                  className={`mt-1 text-sm ${dark ? 'text-white/50' : 'text-ink/50'}`}>
                  {p.desc}
                  {p.monthly ? (annual ? ', оплата за год' : '') : ''}
                </p>
                <p
                  className={`mt-4 text-sm ${dark ? 'text-white/60' : 'text-ink/60'}`}>
                  {p.text}
                </p>
                <ul
                  className={`mt-6 flex-1 space-y-3 border-t pt-6 text-sm ${dark ? 'border-white/10' : 'border-line'}`}>
                  {p.items.map((i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3">
                      <Check dark={dark} />
                      {i}
                    </li>
                  ))}
                </ul>
                <a
                  href="#top"
                  className={`mt-8 ${dark ? 'btn-primary' : 'btn-ghost'}`}>
                  {p.cta}
                  {dark ? ' →' : ''}
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
