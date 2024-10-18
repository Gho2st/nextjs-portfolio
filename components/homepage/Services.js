import ServiceItem from "@/components/homepage/ServiceItem";
import classes from "./Services.module.css";
import { IoCodeSlash } from "react-icons/io5";
import { IoLogoWebComponent } from "react-icons/io5";
import { CiMobile1 } from "react-icons/ci";

export default function Services() {
  return (
    <>
      <section>
        <div className={classes.itemContainer}>
          <ServiceItem
            title="Tworzenie Nowoczesnych Stron Internetowych"
            icon={<IoCodeSlash />}
            background="green"
            description="Oferujemy nowoczesne strony internetowe, które rozwijamy wspólnie z klientami od pierwszego kontaktu aż do wdrożenia. Każda nasza strona jest unikalna, stworzona tak, by wyróżniać się w sieci i spełniać oczekiwania zarówno użytkowników, jak i wyszukiwarek."
          />
          <ServiceItem
            title="Pozycjonowanie Stron Internetowych (SEO) – Skuteczna Optymalizacja i Wzrost Widoczności"
            icon={<IoLogoWebComponent />}
            background="red"
            description="Naszym celem jest, aby Twoja strona zajmowała czołowe miejsca w wynikach wyszukiwania. Oferujemy pełne wsparcie w zakresie SEO, pomagając Ci osiągnąć sukces i wyprzedzić konkurencję w Google. Dzięki naszym działaniom Twoja strona nie tylko będzie widoczna, ale także zyska większy ruch i lepsze wyniki biznesowe."
          />
          <ServiceItem
            title="Wsparcie Techniczne Stron Internetowych i Aktualizacje"
            icon={<CiMobile1 />}
            background="blue"
            description="Zapewniamy wsparcie techniczne na każdym etapie działania Twojej strony. Niezależnie od tego, czy jesteś naszym klientem, czy dopiero zaczynasz przygodę z naszą firmą, możesz liczyć na naszą pomoc i zaangażowanie. Oferujemy aktualizacje, zabezpieczenia i konserwację stron, dbając o to, by Twoja witryna była zawsze w doskonałej formie."
          />
        </div>
      </section>
    </>
  );
}
