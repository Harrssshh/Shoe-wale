export function Marquee() {
  const brands = [
    "NIKE", "ADIDAS", "JORDAN", "PUMA", "NEW BALANCE",
    "REEBOK", "VANS", "CONVERSE", "SKECHERS", "FILA",
  ];

  const row = brands.map((b, i) => (
    <span key={b} className="flex items-center gap-5">
      {b}
      {i < brands.length - 1 && <span className="text-volt">◆</span>}
    </span>
  ));

  return (
    <div className="overflow-hidden border-y border-volt/20 bg-court py-3">
      <div className="ticker-track flex w-max whitespace-nowrap">
        <div className="flex items-center gap-5 px-5 font-display text-sm tracking-[4px] text-white/30">
          {row}
        </div>
        <div className="flex items-center gap-5 px-5 font-display text-sm tracking-[4px] text-white/30" aria-hidden>
          {row}
        </div>
      </div>
    </div>
  );
}
