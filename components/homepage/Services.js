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
          description="Oferuję nietypowe strony internetowe, które są jak najnowszy model smartfona - nowoczesne, funkcjonalne i urzekające. Twoja strona będzie przepiękna, łatwa w obsłudze i przyjazna dla Google!"
        />
        <ServiceItem
          title="Oprogramowanie"
          icon={<IoLogoWebComponent />}
          background="red"
          description="Moim celem jako programisty jest tworzenie oprogramowania, które nie tylko spełnia oczekiwania, ale także stawia nowe standardy innowacji. Zastanówmy się nad automazacją Twojej działałności."
        />
        <ServiceItem
          title="Aplikacje Mobilne"
          icon={<CiMobile1 />}
          background="blue"
          description="Bez względu na to, czy potrzebujesz aplikacji biznesowej, edukacyjnej czy rozrywkowej, jestem gotowy przekształcić Twoje pomysły w interaktywne i intrygujące doświadczenia mobilne."
        />
      </div>
    </>
  );
}
