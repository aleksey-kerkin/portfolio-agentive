import { Chip } from './ui';

export default function Cta() {
  return (
    <section
      aria-labelledby="cta-title"
      className="relative overflow-hidden bg-[#0a0a12] py-20 text-center text-white md:py-28">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_50%_at_50%_100%,rgba(91,77,255,.35),transparent)]"
        aria-hidden="true"
      />
      <div className="container-x relative">
        <Chip dark>Начните сегодня</Chip>
        <h2
          id="cta-title"
          className="mt-5 text-[34px] font-bold leading-tight md:text-[56px]">
          Пусть ИИ возьмёт на себя <br />
          <span className="text-[#7c6cff]">рутину.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-[460px] text-white/60">
          Ваша команда пришла не для того, чтобы перекладывать данные. Верните
          им время.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href="#pricing"
            className="btn bg-white text-ink hover:bg-white/90">
            Начать бесплатно →
          </a>
          <a
            href="#pricing"
            className="btn border border-white/15 bg-white/5 text-white hover:bg-white/10">
            Связаться с продажами
          </a>
        </div>
        <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-white/60">
          <li>🔒 Соответствие SOC 2</li>
          <li>⚡ Настройка за 5 минут</li>
          <li>💳 Без привязки карты</li>
        </ul>
      </div>
    </section>
  );
}
