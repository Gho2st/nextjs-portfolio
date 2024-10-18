import Image from "next/image";
import classes from "./Audit.module.css";
import { FaCheck } from "react-icons/fa";
import Link from "next/link";

export default function Audit() {
  return (
    <section>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <h2>
            Bezpłatny Audyt SEO Twojej Strony – Sprawdź, Jak Poprawić Widoczność
          </h2>
          <div className={classes.contentContainer}>
            <div className={classes.text}>
              <p>
                Domiweb oferuje bezpłatny audyt SEO, który pomoże Ci
                zidentyfikować możliwości optymalizacji Twojej strony
                internetowej. Dzięki audytowi otrzymasz szczegółowe rekomendacje
                dotyczące poprawy widoczności, szybkości ładowania oraz
                bezpieczeństwa Twojej witryny. To idealny sposób na zwiększenie
                swojej obecności online.
              </p>
              <ul>
                <li>
                  <FaCheck />
                  Analiza SEO – zidentyfikowanie słów kluczowych i optymalizacja
                  treści
                </li>
                <li>
                  <FaCheck />
                  Ocena wydajności – sprawdzenie szybkości ładowania strony
                </li>
                <li>
                  <FaCheck />
                  Audyt UX/UI – poprawa użyteczności i intuicyjności strony
                </li>
                <li>
                  <FaCheck />
                  Bezpieczeństwo – identyfikacja i eliminacja potencjalnych
                  zagrożeń
                </li>
                <li>
                  <FaCheck />
                  Rekomendacje techniczne – optymalizacja kodu i struktury
                  strony
                </li>
              </ul>
              <div className={classes.linksContainer}>
                <Link href="/kontakt">Kontakt</Link>
                <Link href="/autor">Autor</Link>
              </div>
            </div>
            <div className={classes.imageContainer}>
              <Image
                src="/1.gif"
                width={100}
                height={100}
                layout="responsive"
                alt="grafika przestawiająca Audyt Strony Internetowej"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
