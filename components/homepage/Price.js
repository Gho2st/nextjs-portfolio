import classes from "./Price.module.css";
import PriceItem from "./PriceItem";
export default function Price() {
  return (
    <>
      <div className={classes.container}>
        <PriceItem
          header="Jaki jest koszt strony internetowej?"
          text="Koszt projektu polegającego na stworzeniu strony internetowej na zamówienie zaczyna się od 600zł.
          Preferuje wycenę na zamówienie indywidualnie po omówieniu całościowego zakresu projektu. Jeśli chcesz dowiedzieć się więcej na temat szacunków czeka na Ciebie formularz kontaktowy!"
        />
        <PriceItem
          header="Jaki jest czas realizacji projektu?"
          text="Zazwyczaj czas od planowania do zrealizowania projektu wynosi do tygodnia czasu. "
        />
        <PriceItem
          header="Ile kosztuje utrzymanie witryny internetowej?"
          text="Ceny hostingu + certyfikat SSL to ok. 120-150zł rocznie, domeny 50zł rocznie."
        />
        <PriceItem
          header="Ile trzeba czekać na odpowiedź?"
          text="W większości przypadków odpowiadam od razu, maksymalnie do paru godzin."
        />
      </div>
    </>
  );
}
