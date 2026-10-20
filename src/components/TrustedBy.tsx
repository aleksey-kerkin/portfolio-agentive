const names = ['Notion', 'Vercel', 'Loom', 'Linear', 'Retool', 'Amplitude'];

export default function TrustedBy() {
  return (
    <section
      aria-label="Нам доверяют"
      className="border-y border-line py-8">
      <div className="container-x">
        <p className="text-center text-xs text-ink/40">
          Нам доверяют быстрорастущие команды
        </p>
        <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 md:gap-x-16">
          {names.map((name) => (
            <li
              key={name}
              className="font-display text-lg font-semibold text-ink/40">
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
