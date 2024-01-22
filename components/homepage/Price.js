import classes from "./Price.module.css";
import PriceItem from "./PriceItem";
export default function Price() {
  return (
    <>
      <div className={classes.container}>
        <PriceItem
          header="Jaki jest koszt strony internetowej?"
          text="Koszt projektu polegającego na stworzeniu strony internetowej na zamówienie zaczyna się od 600zł. Jednak zależy od wielu czynników, m.in.:

— rodzaj i funkcjonalność,

— złożoność projektu UX/UI,

Z tego względu preferujemy wycenę na zamówienie indywidualnie po omówieniu całościowego zakresu projektu. Jeśli chcesz dowiedzieć się więcej na temat szacunków czeka na Ciebie formularz kontaktowy!"
        />
        <PriceItem
          header="Jaki jest czas realizacji projektu?"
          text="Zazwyczaj czas od planowania do zrealizowania projektu w DJJ Software wynosi do tygodnia czasu. "
        />
        <PriceItem
          header="Ile kosztuje utrzymanie witryny internetowej?"
          text="ceny hostingu (ok. 120-150zł rocznie), domeny (50zł rocznie). Cena zarejestrowania domeny na pierwszy rok jest -50%. "
        />
      </div>
    </>
  );
}
