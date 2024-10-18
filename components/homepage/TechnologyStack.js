"use client";
import { useState } from "react";
import classes from "./TechnologyStack.module.css";
import { TbBrandNextjs } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { FaWordpressSimple } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import TechnologyItem from "./TechnologyItem";

const technologiesData = [
  {
    name: "NextJS",
    icon: <TbBrandNextjs />,
    text: "Next.js oferuje Server-Side Rendering (SSR) i Static Site Generation (SSG), co przekłada się na szybsze ładowanie stron. Klienci docenią responsywne i efektywne strony, co może przyczynić się do zwiększenia zadowolenia użytkowników.",
  },
  {
    name: "React",
    icon: <FaReact />,
    text: "React to potężna i popularna biblioteka JavaScript do tworzenia interfejsów użytkownika, które pomagają tworzyć wciągające i interaktywne doświadczenia dla użytkowników. Szczególnie dobrze nadaje się do budowy aplikacji jednostronicowych i aplikacji mobilnych.",
  },
  {
    name: "Wordpress",
    icon: <FaWordpressSimple />,
    text: "WordPress jest znany ze swojej łatwości obsługi. Nawigacja w panelu administracyjnym, dodawanie treści i aktualizacja stron są intuicyjne nawet dla osób bez zaawansowanej wiedzy technicznej.",
  },
  {
    name: "Python",
    icon: <FaPython />,
    text: "Python jest używany do różnorodnych zastosowań, takich jak tworzenie oprogramowania, analiza danych, sztuczna inteligencja, uczenie maszynowe, automatyzacja, a także tworzenie stron internetowych.",
  },
];

export default function TechnologyStack() {
  const [activeTechnology, setActiveTechnology] = useState("NextJS");

  const handleItemClick = (technology) => {
    setActiveTechnology((prevTechnology) =>
      prevTechnology === technology ? null : technology
    );
  };

  return (
    <>
      <section className={classes.container}>
        <h2 className={classes.header}>
          Technologie, Które Używamy w Tworzeniu Stron Internetowych
        </h2>
        <div className={classes.itemsContainer}>
          {technologiesData.map((tech) => (
            <TechnologyItem
              key={tech.name}
              style={
                activeTechnology === tech.name ? { background: "red" } : {}
              }
              icon={tech.icon}
              onClick={() => handleItemClick(tech.name)}
              isActive={activeTechnology}
            />
          ))}
        </div>
        {activeTechnology && (
          <div>
            <h3 className={classes.header5}>{activeTechnology}</h3>
            <p className={classes.text}>
              {
                technologiesData.find((tech) => tech.name === activeTechnology)
                  .text
              }
            </p>
          </div>
        )}
      </section>
    </>
  );
}
