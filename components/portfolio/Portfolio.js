import classes from "./Portfolio.module.css";
import PortfolioItem from "./PortfolioItem";

export default function Portfolio() {
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <div>
            <p className={classes.text}>Zobacz, co udało mi się stworzyć!</p>
            <h2 className={classes.header}>Przykładowe realizacje</h2>
          </div>

          <div className={classes.itemContainer}>
            <PortfolioItem
              source="/optyk.png"
              href="https://optyk-andrzej.pl/"
              title="Optyk - Andrzej Świerczek 1980"
              text="Responsywna strona internetowa dla lokalnego optyka, stworzona z użyciem Bootstrapa. Zwiększa widoczność w wyszukiwarkach i umożliwia łatwe umawianie wizyt online."
            />
            <PortfolioItem
              source="/hukimuki.png"
              href="https://hukimuki.pl"
              title="Huki Muki"
              text="Nowoczesny projekt w Next.js dla krakowskiego pubu. Zawiera integrację płatności Stripe, bazę danych PostgreSQL oraz system rezerwacji online."
            />
            <PortfolioItem
              source="/beata3.png"
              href="https://beatalakota.pl/"
              title="Beata Łakota"
              text="Profesjonalna strona internetowa stworzona z wykorzystaniem TypeScript. Skoncentrowana na optymalizacji SEO i łatwej nawigacji."
            />
            <PortfolioItem
              source="/ozonowanie.png"
              href="https://eos-ozonowanie.pl/"
              title="EOS - Ozonowanie | Kraków"
              text="Strona główna z formularzem kontaktowym opartym na PHP Mailer. Zoptymalizowana pod kątem lokalnych usług ozonowania."
            />
            <PortfolioItem
              source="/ptaki.png"
              href="https://nshkipe.com.pl/"
              title="NSHKiPE - Nowy Sącz"
              text="Dynamiczna strona internetowa z panelem administracyjnym napisaną w PHP i MySQL. Umożliwia łatwe zarządzanie treścią i użytkownikami."
            />
            <PortfolioItem
              source="/dominik.png"
              href="https://dominikjojczyk.pl/"
              title="Dominik Jojczyk - Portfolio"
              text="Osobiste portfolio z informacjami o moich umiejętnościach i projektach. Zoptymalizowane dla wyszukiwarek, aby przyciągnąć potencjalnych klientów."
            />
            <PortfolioItem
              source="/olmart.png"
              href="https://olmart-ns.pl/"
              title="Olmart - Zakład Zduński"
              text="Estetyczna strona internetowa wykorzystująca Bootstrapa i jQuery, przedstawiająca ofertę usług zduńskich. Zwiększa widoczność firmy w internecie."
            />
            <PortfolioItem
              source="/dna.png"
              href="https://github.com/Gho2st"
              title="Analiza Sekwencji DNA"
              text="Aplikacja bioinformatyczna do analizy sekwencji DNA, stworzona w technologii JavaScript. Zastosowanie nowoczesnych rozwiązań technologicznych."
            />
            <PortfolioItem
              source="/telmech.png"
              href="https://telmech.com"
              title="Telmech - Obróbka Metali"
              text="Strona internetowa zrealizowana w PHP, wykorzystująca generowane przez AI zdjęcia. Skoncentrowana na prezentacji usług obróbki metali."
            />
            <PortfolioItem
              source="/tomy.png"
              href="https://tomy-myje-remontuje.pl"
              title="ToMy - Myje & Remontuje"
              text="Strona internetowa dla firmy sprzątającej, zaprojektowana w celu łatwego kontaktu z klientami oraz przedstawienia oferty usług porządkowych."
            />
            <PortfolioItem
              source="/wesolewygibasy.png"
              href="https://wesolewygibasy.pl"
              title="Żłobki Wesołe Wygibasy"
              text="Nowoczesny projekt w Next.js dla krakowskiej firmy żłobkowej. Strona stworzona z myślą o łatwej nawigacji i dostępności dla rodziców."
            />
          </div>
        </div>
      </div>
    </>
  );
}
