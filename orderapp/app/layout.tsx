import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";

export const metadata: Metadata = {
  title: "Koc Kebap & Pizza Baden – Online Bestellen",
  description:
    "Bestellen Sie online bei Koc Kebap & Pizza Baden. Dürüm, Döner, Pizza, Pide und mehr – täglich von 11:00 bis 21:00 Uhr.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
