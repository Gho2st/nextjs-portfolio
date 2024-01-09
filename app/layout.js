import { Poppins } from "@next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";
import { Analytics } from "@vercel/analytics/react";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600"],
  subsets: ["latin"],
});

export const metadata = {
  title: "DJJ Software - Agencja Interaktywna",
  description: "Potrzebujesz Strony Internetowej? Zapraszamy do kontaktu!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className={poppins.className}>
        <Header />
        {children}
        <Analytics />
        <script src="https://3Dmol.org/build/3Dmol-min.js"></script>
        <script src="https://3Dmol.org/build/3Dmol.ui-min.js"></script>
      </body>
    </html>
  );
}
