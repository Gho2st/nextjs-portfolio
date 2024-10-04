import Image from "next/image";
import classes from "./Audit.module.css";
import { FaCheck } from "react-icons/fa";
import Link from "next/link";

export default function Audit() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <h2>Darmowy Audyt Twojej Strony Internetowej</h2>
        <div className={classes.contentContainer}>
          <div className={classes.text}>
            <p>
              Firma Domiweb oferuje kompleksowe usługi związane z tworzeniem,
              optymalizacją i utrzymaniem stron internetowych. Nasza oferta
              obejmuje m.in. darmowy audyt Twojej strony internetowej, dzięki
              któremu zidentyfikujemy możliwości optymalizacji oraz wskazówki
              dotyczące poprawy jej wydajności i widoczności w sieci. Naszym
              celem jest zapewnienie najwyższej jakości usług, które pomogą Ci
              osiągnąć sukces online.
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
                Audyt UX/UI – weryfikacja użyteczności i intuicyjności strony
              </li>
              <li>
                <FaCheck />
                Bezpieczeństwo – identyfikacja potencjalnych zagrożeń
              </li>
              <li>
                <FaCheck />
                Rekomendacje dotyczące optymalizacji kodu i struktury strony
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
  );
}
