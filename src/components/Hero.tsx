import AgentCards from './AgentCards';
import { Chip } from './ui';

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="overflow-hidden bg-[radial-gradient(60%_60%_at_80%_20%,#eef0ff_0%,#fff_70%)]">
      <div className="container-x grid items-center gap-10 py-12 md:py-20 lg:grid-cols-[1.05fr_1fr] lg:py-24">
        <div className="text-center lg:text-left">
          <Chip>Открытая бета</Chip>
          <h1
            id="hero-title"
            className="mt-5 text-[36px] font-bold leading-[1.08] md:text-[56px] xl:text-[64px]">
            Знакомьтесь: <br />
            <span className="grad-text md:whitespace-nowrap">
              цифровые коллеги
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-[460px] text-[15px] leading-relaxed text-ink/60 md:text-lg lg:mx-0">
            Создавайте ИИ-агентов, которые планируют, принимают решения и
            выполняют задачи в ваших сервисах. Автоматически.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#pricing"
              className="btn-primary">
              Создать первого агента →
            </a>
            <a
              href="#live-panel"
              className="btn-ghost">
              ▷ Смотреть демо
            </a>
          </div>
        </div>
        <AgentCards />
      </div>
    </section>
  );
}
