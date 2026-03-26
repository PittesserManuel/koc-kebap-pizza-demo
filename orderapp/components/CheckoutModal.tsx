"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/data/menu";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type OrderType = "lieferung" | "abholung";
type PaymentMethod = "barzahlung" | "kartenzahlung";
type Step = 1 | 2 | 3 | 4;

interface FormData {
  orderType: OrderType;
  name: string;
  telefon: string;
  strasse: string;
  ort: string;
  plz: string;
  anmerkungen: string;
  paymentMethod: PaymentMethod;
}

const DELIVERY_FEE = 2.5;

export default function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
  const { state, subtotal, clearCart } = useCart();
  const [step, setStep] = useState<Step>(1);
  const [formData, setFormData] = useState<FormData>({
    orderType: "lieferung",
    name: "",
    telefon: "",
    strasse: "",
    ort: "Baden",
    plz: "2500",
    anmerkungen: "",
    paymentMethod: "barzahlung",
  });

  const [orderNumber] = useState(() =>
    Math.floor(10000 + Math.random() * 90000).toString()
  );

  const total =
    subtotal + (formData.orderType === "lieferung" ? DELIVERY_FEE : 0);

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (step < 4) setStep((prev) => (prev + 1) as Step);
  };

  const handleBack = () => {
    if (step > 1) setStep((prev) => (prev - 1) as Step);
  };

  const handleOrder = () => {
    setStep(4);
    clearCart();
  };

  const handleClose = () => {
    setStep(1);
    setFormData({
      orderType: "lieferung",
      name: "",
      telefon: "",
      strasse: "",
      ort: "Baden",
      plz: "2500",
      anmerkungen: "",
      paymentMethod: "barzahlung",
    });
    onClose();
  };

  const isStep2Valid =
    formData.name.trim().length > 1 &&
    formData.telefon.trim().length > 5 &&
    (formData.orderType === "abholung" ||
      (formData.strasse.trim().length > 2 && formData.plz.trim().length >= 4));

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-60 flex items-end sm:items-center justify-center p-0 sm:p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60"
        onClick={step < 4 ? handleClose : undefined}
      />

      {/* Modal */}
      <div className="relative bg-white w-full sm:max-w-lg sm:rounded-2xl shadow-2xl flex flex-col max-h-[95vh] rounded-t-2xl">
        {/* Header */}
        <div className="bg-paprika text-white px-6 py-4 flex items-center justify-between rounded-t-2xl">
          <div>
            <h2 className="font-bold text-lg">
              {step === 1 && "Bestellart wählen"}
              {step === 2 && "Kontaktdaten"}
              {step === 3 && "Zahlungsart"}
              {step === 4 && "Bestellung bestätigt!"}
            </h2>
            {step < 4 && (
              <div className="flex gap-1 mt-2">
                {([1, 2, 3] as const).map((s) => (
                  <div
                    key={s}
                    className={`h-1 rounded-full transition-all ${
                      s <= step ? "bg-gold" : "bg-white/30"
                    } ${s === step ? "w-8" : "w-4"}`}
                  />
                ))}
              </div>
            )}
          </div>
          {step < 4 && (
            <button
              onClick={handleClose}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors text-xl"
            >
              ×
            </button>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {/* Step 1: Order type */}
          {step === 1 && (
            <div className="space-y-4">
              <p className="text-gray-600 text-sm mb-6">
                Möchten Sie Ihre Bestellung liefern lassen oder selbst abholen?
              </p>

              <button
                onClick={() => updateField("orderType", "lieferung")}
                className={`w-full border-2 rounded-xl p-4 text-left transition-all ${
                  formData.orderType === "lieferung"
                    ? "border-paprika bg-red-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🛵</span>
                  <div>
                    <p className="font-bold text-gray-900">Lieferung</p>
                    <p className="text-gray-500 text-sm">
                      Nach Hause liefern lassen (+{formatPrice(DELIVERY_FEE)} Liefergebühr)
                    </p>
                  </div>
                  {formData.orderType === "lieferung" && (
                    <div className="ml-auto w-5 h-5 rounded-full bg-paprika flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  )}
                </div>
              </button>

              <button
                onClick={() => updateField("orderType", "abholung")}
                className={`w-full border-2 rounded-xl p-4 text-left transition-all ${
                  formData.orderType === "abholung"
                    ? "border-paprika bg-red-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🏪</span>
                  <div>
                    <p className="font-bold text-gray-900">Selbst abholen</p>
                    <p className="text-gray-500 text-sm">
                      Josefsplatz 3, Top 5, 2500 Baden
                    </p>
                  </div>
                  {formData.orderType === "abholung" && (
                    <div className="ml-auto w-5 h-5 rounded-full bg-paprika flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  )}
                </div>
              </button>

              {/* Order summary mini */}
              <div className="bg-gray-50 rounded-xl p-4 mt-4">
                <h3 className="font-semibold text-gray-700 text-sm mb-2">Ihre Bestellung</h3>
                <div className="space-y-1">
                  {state.items.map(({ item, quantity }) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span className="text-gray-600">
                        {quantity}× {item.name}
                      </span>
                      <span className="text-gray-900 font-medium">
                        {formatPrice(item.price * quantity)}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-gray-200 mt-3 pt-3 flex justify-between font-bold">
                  <span>Gesamt</span>
                  <span className="text-paprika">{formatPrice(total)}</span>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Contact info */}
          {step === 2 && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  placeholder="Vor- und Nachname"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-paprika focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Telefonnummer *
                </label>
                <input
                  type="tel"
                  value={formData.telefon}
                  onChange={(e) => updateField("telefon", e.target.value)}
                  placeholder="z.B. 0660 1234567"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-paprika focus:border-transparent"
                />
              </div>

              {formData.orderType === "lieferung" && (
                <>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Straße & Hausnummer *
                    </label>
                    <input
                      type="text"
                      value={formData.strasse}
                      onChange={(e) => updateField("strasse", e.target.value)}
                      placeholder="z.B. Hauptstraße 12"
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-paprika focus:border-transparent"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        PLZ *
                      </label>
                      <input
                        type="text"
                        value={formData.plz}
                        onChange={(e) => updateField("plz", e.target.value)}
                        placeholder="2500"
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-paprika focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Ort
                      </label>
                      <input
                        type="text"
                        value={formData.ort}
                        onChange={(e) => updateField("ort", e.target.value)}
                        placeholder="Baden"
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-paprika focus:border-transparent"
                      />
                    </div>
                  </div>
                </>
              )}

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Anmerkungen (optional)
                </label>
                <textarea
                  value={formData.anmerkungen}
                  onChange={(e) => updateField("anmerkungen", e.target.value)}
                  placeholder="z.B. kein Zwiebel, scharf, ..."
                  rows={3}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-paprika focus:border-transparent resize-none"
                />
              </div>
            </div>
          )}

          {/* Step 3: Payment */}
          {step === 3 && (
            <div className="space-y-4">
              <p className="text-gray-600 text-sm mb-6">
                Wählen Sie Ihre bevorzugte Zahlungsart.
              </p>

              <button
                onClick={() => updateField("paymentMethod", "barzahlung")}
                className={`w-full border-2 rounded-xl p-4 text-left transition-all ${
                  formData.paymentMethod === "barzahlung"
                    ? "border-paprika bg-red-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl">💵</span>
                  <div>
                    <p className="font-bold text-gray-900">Barzahlung</p>
                    <p className="text-gray-500 text-sm">
                      {formData.orderType === "lieferung"
                        ? "Bezahlen bei Lieferung"
                        : "Bezahlen bei Abholung"}
                    </p>
                  </div>
                  {formData.paymentMethod === "barzahlung" && (
                    <div className="ml-auto w-5 h-5 rounded-full bg-paprika flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  )}
                </div>
              </button>

              <button
                onClick={() => updateField("paymentMethod", "kartenzahlung")}
                className={`w-full border-2 rounded-xl p-4 text-left transition-all ${
                  formData.paymentMethod === "kartenzahlung"
                    ? "border-paprika bg-red-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl">💳</span>
                  <div>
                    <p className="font-bold text-gray-900">Kartenzahlung</p>
                    <p className="text-gray-500 text-sm">
                      Visa, Mastercard, Debit
                    </p>
                  </div>
                  {formData.paymentMethod === "kartenzahlung" && (
                    <div className="ml-auto w-5 h-5 rounded-full bg-paprika flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  )}
                </div>
              </button>

              {/* Final summary */}
              <div className="bg-gray-50 rounded-xl p-4 mt-4">
                <h3 className="font-semibold text-gray-700 text-sm mb-3">Bestellübersicht</h3>
                <div className="space-y-1.5">
                  {state.items.map(({ item, quantity }) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span className="text-gray-600">
                        {quantity}× {item.name}
                      </span>
                      <span className="font-medium">
                        {formatPrice(item.price * quantity)}
                      </span>
                    </div>
                  ))}
                  {formData.orderType === "lieferung" && (
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>Liefergebühr</span>
                      <span>{formatPrice(DELIVERY_FEE)}</span>
                    </div>
                  )}
                </div>
                <div className="border-t border-gray-200 mt-3 pt-3 flex justify-between font-bold text-base">
                  <span>Gesamt</span>
                  <span className="text-paprika">{formatPrice(total)}</span>
                </div>
                <div className="mt-2 text-xs text-gray-500">
                  {formData.orderType === "lieferung" ? "🛵 Lieferung" : "🏪 Abholung"} ·{" "}
                  {formData.paymentMethod === "barzahlung" ? "💵 Bar" : "💳 Karte"} ·{" "}
                  {formData.name}
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Confirmation */}
          {step === 4 && (
            <div className="text-center py-4">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">✅</span>
              </div>
              <h3 className="font-bold text-2xl text-gray-900 mb-2">Vielen Dank!</h3>
              <p className="text-gray-600 mb-1">Ihre Bestellung wurde aufgenommen.</p>
              <div className="bg-paprika/10 rounded-xl p-4 my-6 text-left">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600 text-sm">Bestellnummer</span>
                  <span className="font-bold text-paprika text-lg">#{orderNumber}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600 text-sm">Bestellart</span>
                  <span className="font-medium text-sm">
                    {formData.orderType === "lieferung" ? "🛵 Lieferung" : "🏪 Abholung"}
                  </span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600 text-sm">Zahlung</span>
                  <span className="font-medium text-sm">
                    {formData.paymentMethod === "barzahlung" ? "💵 Barzahlung" : "💳 Kartenzahlung"}
                  </span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600 text-sm">Name</span>
                  <span className="font-medium text-sm">{formData.name}</span>
                </div>
                <div className="border-t border-paprika/20 mt-3 pt-3 flex justify-between">
                  <span className="font-bold text-gray-900">Gesamtbetrag</span>
                  <span className="font-bold text-paprika text-lg">{formatPrice(total)}</span>
                </div>
              </div>
              <p className="text-gray-500 text-sm mb-2">
                {formData.orderType === "lieferung"
                  ? "Geschätzte Lieferzeit: 30–45 Minuten"
                  : "Ihre Bestellung ist in ca. 20 Minuten abholbereit"}
              </p>
              <p className="text-gray-400 text-xs">
                Bei Fragen: <strong>0660 1414666</strong>
              </p>

              <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-xl p-3">
                <p className="text-yellow-700 text-xs font-medium">
                  Demo-Hinweis: Dies ist eine Demo-Bestellung. Keine echte Bestellung wurde aufgegeben.
                </p>
              </div>

              <button
                onClick={handleClose}
                className="w-full mt-6 bg-paprika text-white py-3.5 rounded-xl font-bold hover:bg-paprika-dark transition-colors"
              >
                Neue Bestellung starten
              </button>
            </div>
          )}
        </div>

        {/* Footer buttons */}
        {step < 4 && (
          <div className="px-6 py-4 border-t border-gray-100 flex gap-3">
            {step > 1 && (
              <button
                onClick={handleBack}
                className="flex-1 border-2 border-gray-200 text-gray-700 py-3 rounded-xl font-semibold hover:border-gray-300 transition-colors"
              >
                Zurück
              </button>
            )}
            {step < 3 && (
              <button
                onClick={handleNext}
                disabled={step === 2 && !isStep2Valid}
                className="flex-1 bg-paprika text-white py-3 rounded-xl font-bold hover:bg-paprika-dark disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Weiter
              </button>
            )}
            {step === 3 && (
              <button
                onClick={handleOrder}
                className="flex-1 bg-gold text-white py-3 rounded-xl font-bold hover:bg-gold-dark transition-colors shadow-md"
              >
                Jetzt bestellen – {formatPrice(total)}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
