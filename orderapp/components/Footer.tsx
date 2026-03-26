"use client";

export default function Footer() {
  return (
    <footer className="bg-forest text-white mt-12">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center text-xl font-bold">
                K
              </div>
              <div>
                <h3 className="font-bold">Koc Kebap & Pizza</h3>
                <p className="text-green-300 text-xs">Baden</p>
              </div>
            </div>
            <p className="text-green-200 text-sm">
              Authentische türkische Küche und frische Pizza in Baden.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-gold mb-3">Kontakt</h4>
            <ul className="space-y-2 text-sm text-green-200">
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>Josefsplatz 3, Top 5<br />2500 Baden, NÖ</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span>
                <a href="tel:06601414666" className="hover:text-gold transition-colors">
                  0660 1414666
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-bold text-gold mb-3">Öffnungszeiten</h4>
            <ul className="space-y-1 text-sm text-green-200">
              <li className="flex justify-between">
                <span>Täglich</span>
                <span className="font-medium">11:00 – 21:00</span>
              </li>
              <li className="flex items-center gap-2 mt-2">
                <span className="text-yellow-400">⭐</span>
                <span>4.8 · 234 Bewertungen auf Lieferando</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-700 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-green-400">
          <p>© 2026 Koc Kebap & Pizza Baden. Alle Rechte vorbehalten.</p>
          <a
            href="https://stratify.at"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gold hover:text-gold-light transition-colors font-medium"
          >
            <span>⚡</span>
            Powered by Stratify
          </a>
        </div>
      </div>
    </footer>
  );
}
