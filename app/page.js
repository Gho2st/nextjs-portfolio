import MainContent from "@/components/homepage/MainContent";
import classes from "./page.module.css";
import Services from "@/components/homepage/Services";
import Footer from "@/components/ui/Footer";
import Together from "@/components/ui/Together";
import Portfolio from "@/components/portfolio/Portfolio";
import Reviews from "@/components/homepage/Reviews";
import TechnologyStack from "@/components/homepage/TechnologyStack";
import Price from "@/components/homepage/Price";


export default function Home() {
  return (
    <>
      <MainContent />
      <Services />
      <Portfolio />
      <Price />
      <TechnologyStack />
      <Reviews />
      <Together />
      <Footer />
    </>
  );
}
