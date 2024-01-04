import classes from "./page.module.css";
import Image from "next/image";

export default function Autor() {
  return (
    <>
      <h1 className={classes.header}>
        Dowiedz się troche <span>wiecej!</span>
      </h1>
      <div className={classes.container}>
        <div className={classes.innerContainer}>
          <div className={classes.imageContainer}>
            <Image
              width={450}
              height={450}
              alt="Avatar"
              src={"/avatar.png"}
            ></Image>
          </div>
          <div className={classes.info}>
            <h2>Hej, Jestem Dominik.</h2>
            <p>
              Jestem studentem bionformatyki. Wolny czas
              wykorzystuję na samorozwój i nieustanne zdobywanie wiedzy. Wierzę
              w siłę nowych mediów i ich potencjał do przekazywania informacji i
              inspiracji.
            </p>
            <p>
              Jestem gotowy, by podzielić się swoją pasją i umiejętnościami z
              Tobą. Razem możemy stworzyć wyjątkową stronę internetową, która w
              pełni odzwierciedli Twoją wizję i przyciągnie uwagę online.💪✨.{" "}
            </p>
            <button className={classes.button}>Pobierz CV</button>
          </div>
        </div>
      </div>
    </>
  );
}
