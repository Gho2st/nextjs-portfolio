import classes from "./Portfolio.module.css";
import PortfolioItem from "./PortfolioItem";

export default function Portfolio() {
  return (
    <>
      <div className={classes.container}>
        <div>
          <p className={classes.text}>Zobacz, co udało mi się stworzyć!</p>
          <h3 className={classes.header}>Przykładowe realizacje</h3>
        </div>
        {/* <div className={classes.switch}>
          <p>All works</p>
          <p>All works</p>
          <p>All works</p>
        </div> */}
      </div>
      <div className={classes.itemContainer}>
        <PortfolioItem
          source="/optyk.png"
          href="https://optyk-andrzej.pl/"
          title="Optyk - Andrzej Świerczek 1980"
          text="Strona internetowa wykonana w całości z uzyciem Bootstrapa."
        />
        <PortfolioItem
          source="/hukimuki.png"
          href="https://hukimuki.pl"
          title="Huki Muki"
          text="Projekt w NextJS dla krakowskiego pubu. Integracja płatności stripe, postgres, system rezerwacji"
        />
        <PortfolioItem
          source="/beata3.png"
          href="https://beatalakota.pl/"
          title="Beata Łakota"
          text="Strona internetowa z wykorzystaniem TypeJS."
        />
        <PortfolioItem
          source="/ozonowanie.png"
          href="https://eos-ozonowanie.pl/"
          title="EOS - ozonowanie | Kraków"
          text="Strona Główna z formularzem kontaktowym PHPMAILER."
        />
        <PortfolioItem
          source="/ptaki.png"
          href="https://nshkipe.com.pl/"
          title="NSHKiPE - Nowy Sącz"
          text="Strona wraz z panelem admina napisanym w PHP + mySQL."
        />
        <PortfolioItem
          source="/dominik.png"
          href="https://dominikjojczyk.pl/"
          title="Dominik Jojczyk - portfolio"
          text="Mój projekt portfolio - więcej informacji o mnie..."
        />
        <PortfolioItem
          source="/olmart.png"
          href="https://olmart-ns.pl/"
          title="Olmart - Zakład Zduński"
          text="Strona z wykorzystaniem Bootstrapa i JQuery."
        />
        <PortfolioItem
          source="/dna.png"
          href="https://github.com/Gho2st"
          title="Analiza sekwencji DNA"
          text="Aplikacja stworzona jako projekt bioinformatyczny."
        />
        <PortfolioItem
          source="/telmech.png"
          href="https://telmech.com"
          title="Telmech - obróbka metali"
          text="PHP, zdjęcia generowane przez AI."
        />
        <PortfolioItem
          source="/tomy.png"
          href="https://tomy-myje-remontuje.pl"
          title="ToMy - Myje & Remontuje"
          text="Strona dla firmy zajmującej sie pracami porządkowymi."
        />
        <PortfolioItem
          source="/wesolewygibasy.png"
          href="https://wesolewygibasy.pl"
          title="Żłobki Wesołe Wygibasy"
          text="Projekt w NextJS dla krakowskiej firmy."
        />
      </div>
    </>
  );
}
