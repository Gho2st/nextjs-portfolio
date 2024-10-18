import MainContent from "@/components/homepage/MainContent";
import classes from "./page.module.css";
import Services from "@/components/homepage/Services";
import Footer from "@/components/ui/Footer";
import Together from "@/components/ui/Together";
import Portfolio from "@/components/portfolio/Portfolio";
import Reviews from "@/components/homepage/Reviews";
import TechnologyStack from "@/components/homepage/TechnologyStack";
import Price from "@/components/homepage/Price";
import Audit from "@/components/homepage/Audit";

export default function Home() {
  return (
    <>
      <main>
        <MainContent />
        <Services />
        <Audit />
        <Portfolio />
        <Price />
        <TechnologyStack />
        <Reviews />
        <Together />
      </main>
      <Footer />
    </>
  );
}
