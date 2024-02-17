import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import classes from "./PortfolioContainer.module.css";

export default function PortfolioContainer() {
  return (
    <div className={classes.Container}>
      <div className={classes.imageContainer}>
        <Image src={"/dna.png"} width={100} height={100} layout="responsive" />
        {/* <Image src={"/beata-smartfon.png"} width={110} height={220} /> */}
      </div>
      <div className={classes.portfolioItemInfo}>
        <div className={classes.left}>
          <h3>Analizator DNA</h3>
          <div className={classes.category}>
            <h4>Bioinformatyka</h4>
          </div>
        </div>
        <div className={classes.right}>
          <p className={classes.description}>
            Projekt ten jest narzędziem do analizy bioinformatycznej opracowanym
            w języku Python (przy użyciu Biopython) w celu przetwarzania i
            analizowania danych biologicznych. Analiza obejmuje pliki PDB
            (Protein Data Bank), pliki FASTA i sekwencje DNA. Dodatkowo dostępny
            jest interfejs sieciowy zbudowany w Next.js, zapewniający przyjazną
            dla użytkownika interakcję z narzędziem.
          </p>
          <a>
            Zobacz projekt <FaArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
}
