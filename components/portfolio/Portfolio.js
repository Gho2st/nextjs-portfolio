import classes from "./Portfolio.module.css";
import PortfolioItem from "./PortfolioItem";

export default function Portfolio() {
  return (
    <>
      <section>
        <div className={classes.wrapper}>
          <div className={classes.container}>
            <div>
              <p className={classes.text}>Zobacz, co udało mi się stworzyć!</p>
              <h2 className={classes.header}>
                Nasze Projekty – Zrealizowane Strony Internetowe i Kampanie SEO
              </h2>
            </div>

            <div className={classes.itemContainer}>
              <PortfolioItem
                source="/optyk.png"
                href="https://optyk-andrzej.pl/"
                title="Optyk - Andrzej Świerczek 1980"
                text="Stworzyliśmy responsywną stronę internetową dla lokalnego optyka, która została zaprojektowana w technologii Bootstrap. Dzięki optymalizacji SEO, strona zwiększyła widoczność w wynikach wyszukiwarek, a użytkownicy mogą łatwo umawiać wizyty online."
              />
              <PortfolioItem
                source="/hukimuki.png"
                href="https://hukimuki.pl"
                title="Huki Muki"
                text="Dla krakowskiego pubu Huki Muki stworzyliśmy nowoczesną stronę w technologii Next.js, z integracją płatności Stripe i bazą danych PostgreSQL. Strona zawiera również system rezerwacji online."
              />
              <PortfolioItem
                source="/beata3.png"
                href="https://beatalakota.pl/"
                title="Beata Łakota"
                text="Profesjonalna strona internetowa stworzona z wykorzystaniem bootstrapa. Skoncentrowana na optymalizacji SEO i łatwej nawigacji."
              />
              <PortfolioItem
                source="/ozonowanie.png"
                href="https://eos-ozonowanie.pl/"
                title="EOS - Ozonowanie | Kraków"
                text="Dla firmy EOS stworzyliśmy stronę z formularzem kontaktowym opartym na PHP Mailer, zoptymalizowaną pod kątem lokalnych usług ozonowania, co zwiększyło jej widoczność w wynikach wyszukiwania."
              />
              <PortfolioItem
                source="/ptaki.png"
                href="https://nshkipe.com.pl/"
                title="NSHKiPE - Nowy Sącz"
                text="Dynamiczna strona internetowa z panelem administracyjnym stworzona w PHP i MySQL, która umożliwia łatwe zarządzanie treścią i użytkownikami, a także szybki dostęp do aktualizacji."
              />
              <PortfolioItem
                source="/dominik.png"
                href="https://dominikjojczyk.pl/"
                title="Dominik Jojczyk - Portfolio"
                text="Osobiste portfolio Dominika Jojczyka - autora Domiweb, które przedstawia jego umiejętności i projekty. Zoptymalizowane dla wyszukiwarek, co zwiększa szanse na dotarcie do potencjalnych klientów."
              />
              <PortfolioItem
                source="/olmart.png"
                href="https://olmart-ns.pl/"
                title="Olmart - Zakład Zduński"
                text="Strona internetowa wykorzystująca Bootstrap i jQuery, prezentująca ofertę usług zduńskich, z naciskiem na SEO i widoczność w sieci."
              />
              <PortfolioItem
                source="/dna.png"
                href="https://github.com/Gho2st"
                title="Analiza Sekwencji DNA"
                text="Zaawansowana aplikacja bioinformatyczna do analizy sekwencji DNA, stworzona przy użyciu nowoczesnych technologii JavaScript + Python."
              />
              <PortfolioItem
                source="/telmech.png"
                href="https://telmech.com"
                title="Telmech - Obróbka Metali"
                text="Strona internetowa dla firmy Telmech zajmującej się obróbką metali, zoptymalizowana pod kątem SEO i używająca generowanych przez AI zdjęć."
              />
              <PortfolioItem
                source="/tomy.png"
                href="https://tomy-myje-remontuje.pl"
                title="ToMy - Myje & Remontuje"
                text="Strona internetowa firmy remonoto-sprzątającej, zaprojektowana tak, aby umożliwić łatwy kontakt z klientami oraz przedstawienie oferty usług porządkowych."
              />
              <PortfolioItem
                source="/wesolewygibasy.png"
                href="https://wesolewygibasy.pl"
                title="Żłobki Wesołe Wygibasy"
                text="Nowoczesny projekt w Next.js dla krakowskiej firmy żłobkowej. Strona stworzona z myślą o łatwej nawigacji i dostępności dla rodziców."
              />
              <PortfolioItem
                source="/szlafroki.png"
                href="https://www.szlafroki.krakow.pl"
                title="Sklep Specjalistyczny SzlafrO.K."
                text="Projekt zawiera galerię, która prezentuje różnorodne modele szlafroków, a także informacje o firmie i jej usługach. Dzięki integracji z AWS, strona zapewnia szybkie ładowanie i wysoką dostępność. Użytkownicy mogą łatwo przeglądać ofertę, a responsywny design gwarantuje wygodę na różnych urządzeniach."
              />
              <PortfolioItem
                source="/barbarapiekos.png"
                href="https://www.barbarapiekos.pl"
                title="Barbara Piękoś - Artystka."
                text="Strona internetowa stworzona w Next.js dla utalentowanej artystki, Barbary Piękoś. Projekt charakteryzuje się eleganckim, minimalistycznym designem, który doskonale prezentuje prace artystki."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
