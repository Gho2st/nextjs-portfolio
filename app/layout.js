import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";
import { Analytics } from "@vercel/analytics/react";
import Navigation from "@/components/ui/Navigation";

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500"],
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://wwwdomiweb.pl"),
  title: {
    default: "Domiweb - Pozycjonowanie, Audyt i Tworzenie Stron Internetowych",
  },
  description:
    "W poszukiwaniu responsywnej strony internetowej? Zapraszamy do skorzystania z naszej oferty - tania i zoptymalizowana pod kątem pozycjonowania witryna jest już dla Ciebie dostępna!",
  alternates: {
    canonical: "https://www.domiweb.pl/",
  },
  openGraph: {
    type: "website",
    url: "https://www.domiweb.pl/",
    title: "Domiweb - Strony Internetowe",
    description:
      "W poszukiwaniu responsywnej strony internetowej? Zapraszamy do skorzystania z naszej oferty - tania i zoptymalizowana pod kątem pozycjonowania witryna jest już dla Ciebie dostępna!",
    images: "/opengraph-image.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className={montserrat.className}>
        {/* <Header /> */}
        <Navigation />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
