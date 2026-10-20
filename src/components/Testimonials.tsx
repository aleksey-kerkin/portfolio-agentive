import { SectionHead } from './ui';

const photo = (name: string) => `${import.meta.env.BASE_URL}img/${name}`;

const reviews = [
  {
    q: 'Мы заменили агентами целый отдел операций. Команда теперь занимается тем, что действительно важно.',
    n: 'Сара Чен',
    r: 'руководитель операций, Loom',
    img: photo('a1.webp'),
  },
  {
    q: 'Панель агентов дала полную прозрачность в каждое решение. Для нас это стало решающим аргументом.',
    n: 'Марк Райт',
    r: 'CTO, Vercel',
    img: photo('a2.webp'),
  },
  {
    q: 'Неделя ресёрча превратилась в 20-минутный автоматический процесс. Это изменило наше планирование.',
    n: 'Прия Патель',
    r: 'продакт-лид, Amplitude',
    img: photo('a3.webp'),
    dark: true,
  },
  {
    q: 'Настройка заняла 30 минут. К концу первого дня агент отправил 200 персональных писем без участия людей.',
    n: 'Джеймс Лю',
    r: 'директор по продажам, Notion',
    img: photo('a2.webp'),
  },
  {
    q: 'Командная работа агентов меняет правила. Задачи, которые раньше требовали 5 человек, теперь выполняются сами.',
    n: 'Елена Родригес',
    r: 'основатель, Linear',
    img: photo('a1.webp'),
  },
];

const Stars = ({ dark }: { dark?: boolean }) => (
  <p
    className={`text-sm tracking-widest ${dark ? 'text-[#8f86ff]' : 'text-amber-400'}`}
    aria-label="Оценка 5 из 5">
    ★★★★★
  </p>
);

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="t-title"
      className="container-x py-16 md:py-24">
      <SectionHead
        id="t-title"
        chip="Результаты"
        title={
          <>
            Команды, которые работают <br className="hidden md:block" />
            быстрее с Agentive
          </>
        }
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col justify-between rounded-2xl bg-[#5b4dff] p-6 text-white md:p-8">
          <p className="font-display text-6xl font-bold">8×</p>
          <div className="mt-8">
            <p className="text-lg font-semibold">
              быстрее, чем ручные процессы
            </p>
            <p className="mt-2 text-sm text-white/60">По данным 200+ команд</p>
            <p className="mt-1 text-sm text-white/80">97% довольных клиентов</p>
          </div>
        </div>
        {reviews.map((t) => (
          <figure
            key={t.n}
            className={`flex flex-col justify-between rounded-2xl p-6 ${t.dark ? 'bg-ink text-white' : 'card'}`}>
            <div>
              <Stars dark={t.dark} />
              <blockquote
                className={`mt-3 text-[15px] leading-relaxed ${t.dark ? 'text-white/90' : 'text-ink/80'}`}>
                «{t.q}»
              </blockquote>
            </div>
            <figcaption className="mt-6 flex items-center gap-3">
              <img
                src={t.img}
                alt=""
                width="40"
                height="40"
                className="h-10 w-10 rounded-full object-cover"
              />
              <span>
                <span className="block text-sm font-semibold">{t.n}</span>
                <span
                  className={`block text-xs ${t.dark ? 'text-white/50' : 'text-ink/50'}`}>
                  {t.r}
                </span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
