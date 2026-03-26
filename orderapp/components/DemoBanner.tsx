"use client";

export default function DemoBanner() {
  return (
    <div className="bg-forest text-white text-center text-sm py-2 px-4 font-medium">
      Dies ist eine{" "}
      <strong className="text-gold">Demo</strong> von{" "}
      <a
        href="https://stratify.at"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gold underline underline-offset-2 hover:text-gold-light transition-colors"
      >
        Stratify – stratify.at
      </a>
    </div>
  );
}
