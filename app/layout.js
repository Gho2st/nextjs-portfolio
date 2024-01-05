import { Poppins } from "@next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";

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
    <html lang="en">
      <body
        className={poppins.className}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
