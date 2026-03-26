"use client";

export default function DemoBanner() {
  return (
    <div className="w-full bg-darkgreen text-white py-2 px-4 text-center text-sm font-serif-alt z-[100] relative">
      <span className="opacity-80">Dies ist eine Demo von </span>
      <a
        href="https://stratify.at"
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-gold hover:text-gold-light underline underline-offset-2 transition-colors"
      >
        Stratify – stratify.at
      </a>
    </div>
  );
}
