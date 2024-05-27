import ServiceItem from "@/components/homepage/ServiceItem";
import classes from "./Services.module.css";
import { IoCodeSlash } from "react-icons/io5";
import { IoLogoWebComponent } from "react-icons/io5";
import { CiMobile1 } from "react-icons/ci";

export default function Services() {
  return (
    <>
      
      <div className={classes.itemContainer}>
        <ServiceItem
          title="Strony internetowe"
          icon={<IoCodeSlash />}
          background="green"
          description="Oferuję strony internetowe, które zamierzam rozwijać wspólnie od pierwszego kontaktu do samego końca. Każda witryna powinna mieć w sobie coś wyróżniającego."
        />
        <ServiceItem
          title="Pozycjonowanie"
          icon={<IoLogoWebComponent />}
          background="red"
          description="Moim celem jest stworzenie strony internetowej na pierwszym miejscu w rankingu wyszukiwarek. Przedewszystkim daje wsparcie klientowi jak to uzyskać i przebić się na podium."
        />
        <ServiceItem
          title="Wsparcie"
          icon={<CiMobile1 />}
          background="blue"
          description="Bez względu na to, czy jesteś moim klientem, znajomym czy po prostu masz pytanie, mozesz liczyć na moją empatię i zaangażowanie w to co chcesz osiągnąć."
        />
      </div>
    </>
  );
}
