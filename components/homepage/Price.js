"use client";
import classes from "./Price.module.css";
import { useState } from "react";
export default function Price() {
  const [isTextVisible, SetIsTextVisible] = useState(false);

  function clickHandler() {
    SetIsTextVisible(!isTextVisible);
  }

  return (
    <div className={classes.container}>
      <h6 className={classes.header} onClick={clickHandler}>
        Jakie są koszta indywidualnej strony na zamówienie?
      </h6>
      {isTextVisible && (
        <p className={classes.text}>
          Koszt projektu tworzenia strony internetowej na zamówienie zaczyna się od <span> 600zł</span>, jednak zależy od wielu
          czynników, takich jak:
          <ul className={classes.list}>
            <li>rodzaj i złożoność witryny,</li>
            <li>złożoność projektu UX/UI,</li>
            <li>wielkość zespołu deweloperskiego,</li>
          </ul>
          Z tego względu preferujemy indywidualne wyceny po omówieniu pełnego
          zakresu projektu. Jeśli jesteś zainteresowany dowiedzeniem się więcej
          na temat szacunków i ogólnych cen - czeka na Ciebie formularz kontaktowy!
        </p>
      )}
    </div>
  );
}
