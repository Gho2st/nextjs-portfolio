import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";
import { Analytics } from "@vercel/analytics/react";

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500"],
  subsets: ["latin"],
});

export const metadata = {
  title: "DJJ Software - Agencja Interaktywna",
  description: "Potrzebujesz Strony Internetowej? Zapraszamy do kontaktu!",
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
