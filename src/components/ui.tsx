import type { ReactNode } from 'react';

export function Chip({
  children,
  dark = false,
}: {
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <span
      className={
        dark
          ? 'inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-[#b9b2ff]'
          : 'chip'
      }>
      <span aria-hidden="true">✦</span>
      {children}
    </span>
  );
}

export function SectionHead({
  chip,
  title,
  text,
  dark = false,
  id,
}: {
  chip: string;
  title: ReactNode;
  text?: string;
  dark?: boolean;
  id: string;
}) {
  return (
    <div className="mx-auto mb-10 max-w-[620px] text-center md:mb-14">
      <Chip dark={dark}>{chip}</Chip>
      <h2
        id={id}
        className={`mt-4 text-[28px] font-bold leading-[1.15] md:text-[40px] ${dark ? 'text-white' : ''}`}>
        {title}
      </h2>
      {text && (
        <p
          className={`mt-4 text-[15px] leading-relaxed md:text-base ${dark ? 'text-white/60' : 'text-ink/60'}`}>
          {text}
        </p>
      )}
    </div>
  );
}

export function Check({ dark = false }: { dark?: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      className={`h-4 w-4 flex-none ${dark ? 'text-[#8f86ff]' : 'text-brand-violet'}`}
      aria-hidden="true">
      <circle
        cx="10"
        cy="10"
        r="9"
        fill="currentColor"
        opacity=".15"
      />
      <path
        d="m6 10.2 2.6 2.6L14 7.4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span
      className={`flex items-center gap-2 font-display text-lg font-bold ${light ? 'text-white' : ''}`}>
      <svg
        viewBox="0 0 28 28"
        className="h-7 w-7"
        aria-hidden="true">
        <rect
          width="28"
          height="28"
          rx="8"
          fill="#5b4dff"
        />
        <circle
          cx="14"
          cy="14"
          r="6"
          fill="none"
          stroke="#fff"
          strokeWidth="2"
        />
        <circle
          cx="14"
          cy="14"
          r="2"
          fill="#fff"
        />
      </svg>
      Agentive
    </span>
  );
}
