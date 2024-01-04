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
          title="Grafiki"
          icon={<IoLogoWebComponent />}
          background="red"
          description="Grafika ma kluczowe znaczenie dla nowoczesnej reklamy, ponieważ zapewnia elementy wizualne, takie jak obrazy, filmy i ilustracje, które sprawiają, że przekaz zapada w pamięć."
        />
        <ServiceItem
          title="Aplikacje Mobilne"
          icon={<CiMobile1 />}
          background="blue"
          description="Bez względu na to, czy potrzebujesz aplikacji biznesowej, edukacyjnej czy rozrywkowej, jesteśmy gotowi przekształcić Twoje pomysły w interaktywne i intrygujące doświadczenia mobilne."
        />
      </div>
    </>
  );
}
