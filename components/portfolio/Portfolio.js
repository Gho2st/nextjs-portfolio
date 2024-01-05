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
        <PortfolioItem source="/optyk.png" title="Optyk - Andrzej Świerczek 1980" text="Strona internetowa wykonana w całości z uzyciem Bootstrapa." />
        <PortfolioItem source="/beata.png" title="Beata Łakota - trenerka osobista" text="Strona internetowa z wykorzystaniem TypeJS." />
        <PortfolioItem source="/ozonowanie.png" title="EOS - ozonowanie | Kraków" text="Strona Główna z formularzem kontaktowym PHPMAILER." />
        <PortfolioItem source="/ptaki.png" title="NSHKiPE - Nowy Sącz" text="Strona wraz z panelem admina napisanym w PHP + mySQL." />
        <PortfolioItem source="/ericar.png" title="Ericar - dealer samochodowy." text="Projekt w którym wykorzystany był php, baza danych." />
        <PortfolioItem source="/dominik.png" title="Dominik Jojczyk - portfolio" text="Mój projekt portfolio napisany całkowicie od zera w HTMl, CSS, JS." />
      </div>
    </>
  );
}
