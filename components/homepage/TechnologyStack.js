"use client";
import { useState } from "react";
import classes from "./TechnologyStack.module.css";
import { TbBrandNextjs } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { FaWordpressSimple } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
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
    name: "Bootstrap",
    icon: <FaBootstrap />,
    text: "Bootstrap to popularny framework front-endowy oparty na HTML, CSS i JavaScript, stworzony przez zespół programistyczny Twittera. Głównym celem Bootstrapa jest ułatwienie projektowania responsywnych i estetycznych stron internetowych. ",
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
      <h4 className={classes.header}>Stack Technologiczny</h4>
      <div className={classes.itemsContainer}>
        {technologiesData.map((tech) => (
          <TechnologyItem
            key={tech.name}
            style={
              activeTechnology === tech.name ? { background: "#8be5e3" } : {}
            }
            icon={tech.icon}
            onClick={() => handleItemClick(tech.name)}
          />
        ))}
      </div>
      {activeTechnology && (
        <div>
          <h5 className={classes.header5}>{activeTechnology}</h5>
          <p className={classes.text}>
            {
              technologiesData.find((tech) => tech.name === activeTechnology)
                .text
            }
          </p>
        </div>
      )}
    </>
  );
}
