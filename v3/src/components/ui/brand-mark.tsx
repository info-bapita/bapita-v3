export function BrandMark({ className }: { className?: string }) {
  return (
    <svg
      width="108"
      height="28"
      viewBox="0 0 108 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Bapita"
      className={className}
    >
      {/* Five-dot constellation mark — one dot per product (glow wheel) */}
      <circle cx="6" cy="14" r="3" fill="#f0743a" />
      <circle cx="13" cy="7" r="2.5" fill="#2bc487" />
      <circle cx="13" cy="21" r="2.5" fill="#4e86ff" />
      <circle cx="20" cy="10" r="2" fill="#9277ff" />
      <circle cx="20" cy="18" r="2" fill="#f2628f" />
      {/* Connecting lines */}
      <line x1="6" y1="14" x2="13" y2="7" stroke="#ffffff" strokeOpacity="0.2" strokeWidth="1" />
      <line x1="6" y1="14" x2="13" y2="21" stroke="#ffffff" strokeOpacity="0.2" strokeWidth="1" />
      <line x1="13" y1="7" x2="20" y2="10" stroke="#ffffff" strokeOpacity="0.2" strokeWidth="1" />
      <line x1="13" y1="21" x2="20" y2="18" stroke="#ffffff" strokeOpacity="0.2" strokeWidth="1" />
      {/* Wordmark */}
      <text
        x="28"
        y="19"
        fontFamily="Heebo, ui-sans-serif, system-ui, sans-serif"
        fontSize="17"
        fontWeight="800"
        fill="currentColor"
        letterSpacing="-0.03em"
      >
        bapita
      </text>
    </svg>
  );
}
