import classes from "./Price.module.css";
import PriceItem from "./PriceItem";
export default function Price() {
  return (
    <>
      <section className={classes.container}>
        <h2>Najczęściej Zadawane Pytania – Projektowanie Stron i SEO</h2>
        <div>
          <PriceItem
            header="Jaki jest koszt strony internetowej?"
            text="Koszt projektu polegającego na stworzeniu strony internetowej na zamówienie zaczyna się od 600zł.
          Preferuje wycenę na zamówienie indywidualnie po omówieniu całościowego zakresu projektu."
          />
          <PriceItem
            header="Jaki jest czas realizacji projektu?"
            text="Zazwyczaj czas od planowania do zrealizowania projektu wynosi do 2 tygodni. "
          />
          <PriceItem
            header="Ile kosztuje utrzymanie witryny internetowej?"
            text="Ceny hostingu + certyfikat SSL to ok. 120-150zł rocznie, domeny 70zł rocznie."
          />
          <PriceItem
            header="Ile trzeba czekać na odpowiedź?"
            text="W większości przypadków odpowiadam od razu, maksymalnie do paru godzin."
          />
          <PriceItem
            header="Czy strona będzie wyświetlać się użytkownikom?"
            text="Tak, dbam o pozycjonowanie i indeksowanie witryny aby plasowała się na samej górze wyszukiwarki. Dodaje witrynę do GSC i analizuje dane każdego dnia."
          />
          <PriceItem
            header="Czy strona będzie zoptymalizowana pod kątem SEO?"
            text="Tak, oferujemy optymalizację SEO, w tym odpowiednie meta tagi, szybkość ładowania strony i dostosowanie treści."
          />
          <PriceItem
            header="Czy strona będzie responsywna?"
            text="Tak, wszystkie nasze strony są responsywne, co oznacza, że będą dobrze wyświetlać się na komputerach, tabletach i smartfonach."
          />
          <PriceItem
            header="Jakie są opcje bezpieczeństwa strony?"
            text="Strona będzie zabezpieczona certyfikatem SSL, a także oferujemy regularne kopie zapasowe, zabezpieczenia antywirusowe i monitoring zagrożeń."
          />
          <PriceItem
            header="Jak wygląda proces aktualizacji treści lub funkcji na stronie?"
            text="Możesz samodzielnie aktualizować treści poprzez panel admina, a jeśli potrzebujesz pomocy, oferujemy wsparcie techniczne."
          />
        </div>
      </section>
    </>
  );
}
