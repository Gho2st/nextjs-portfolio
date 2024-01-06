import classes from "./Portfolio.module.css";
import PortfolioItem from "./PortfolioItem";


export default function Portfolio() {
  return (
    <>
      <div className={classes.container}>
        <div>
          <p className={classes.text}>Zobacz, co udało nam się stworzyć!</p>
          <h3 className={classes.header}>Przykładowe realizacje</h3>
        </div>
        <div className={classes.switch}>
          <p>All works</p>
          {/* <p>All works</p>
          <p>All works</p> */}
        </div>
      </div>
      <div className={classes.itemContainer}>
        <PortfolioItem source="/optyk.png" href="https://optyk-andrzej.pl/" title="Optyk - Andrzej Świerczek 1980" text="Strona internetowa wykonana w całości z uzyciem Bootstrapa." />
        <PortfolioItem source="/beata3.png" href="https://beatalakota.pl/" title="Beata Łakota - marka" text="Strona internetowa z wykorzystaniem TypeJS." />
        <PortfolioItem source="/ozonowanie.png" href="https://eos-ozonowanie.pl/" title="EOS - ozonowanie | Kraków" text="Strona Główna z formularzem kontaktowym PHPMAILER." />
        <PortfolioItem source="/ptaki.png" href="https://nshkipe.com.pl/" title="NSHKiPE - Nowy Sącz" text="Strona wraz z panelem admina napisanym w PHP + mySQL." />
        <PortfolioItem source="/ericar.png" href="https://github.com/Gho2st" title="Ericar - Github." text="Projekt w którym wykorzystany był php, baza danych. Znajduje sie na github." />
        <PortfolioItem source="/dominik.png" href="https://dominikjojczyk.pl/" title="Dominik Jojczyk - portfolio" text="Mój projekt portfolio napisany całkowicie od zera w HTMl, CSS, JS." />
      </div>
    </>
  );
}
