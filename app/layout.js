import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";
import { Analytics } from "@vercel/analytics/react";

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500"],
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://djj-software.pl"),
  title: {
    default: "DJJ Software - Agencja Interaktywna",
    template: "%s - DJJ Software - Agencja Interaktywna",
  },
  description:
    "W poszukiwaniu responsywnej strony internetowej? Zapraszamy do skorzystania z naszej oferty - tania i zoptymalizowana pod kątem pozycjonowania witryna jest już dla Ciebie dostępna!",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    images: "/opengraph-image.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className={montserrat.className}>
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
