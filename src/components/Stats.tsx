const stats = [
  ['120K+', 'процессов автоматизируется ежемесячно'],
  ['8M+', 'задач выполнено автономно'],
  ['97%', 'клиентов довольны результатом'],
];
export default function Stats() {
  return (
    <section
      aria-label="Agentive в цифрах"
      className="container-x py-12 md:py-16">
      <dl className="grid divide-y divide-line rounded-2xl border border-line bg-page px-6 md:grid-cols-3 md:divide-x md:divide-y-0 md:px-0 md:py-8">
        {stats.map(([n, l]) => (
          <div
            key={n}
            className="flex flex-col-reverse items-center py-6 text-center md:items-start md:px-10 md:py-0 md:text-left">
            <dt className="mt-1 text-sm text-ink/50">{l}</dt>
            <dd className="font-display text-4xl font-bold md:text-5xl">{n}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
