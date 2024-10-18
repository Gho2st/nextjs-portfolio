import classes from "./page.module.css";
import Image from "next/image";
import Footer from "@/components/ui/Footer";
import Socials from "@/components/ui/Socials";

export const metadata = {
  title:
    "Strona autora - Specjalista ds. tworzenia stron internetowych i SEO | Domiweb ",
  description:
    "Poznaj autora strony Domiweb, specjalizującego się w tworzeniu i optymalizacji stron internetowych oraz pozycjonowaniu SEO.",
  alternates: {
    canonical: "https://www.domiweb.pl/autor",
  },
};

export default function Autor() {
  return (
    <>
      <main>
        <section>
          <h1 className={classes.header}>
            Dowiedz się trochę <span>więcej!</span>
          </h1>
          <div className={classes.container}>
            <div className={classes.innerContainer}>
              <div className={classes.imageContainer}>
                <Image
                  width={450}
                  height={450}
                  layout="responsive"
                  alt="Avatar"
                  src={"/avatar.png"}
                ></Image>
              </div>
              <div className={classes.info}>
                <h2>Hej, Jestem Dominik.</h2>
                <p>
                  Jestem studentem bionformatyki. Wolny czas wykorzystuję na
                  samorozwój i nieustanne zdobywanie wiedzy. Wierzę w siłę
                  nowych mediów i ich potencjał do przekazywania informacji i
                  inspiracji.
                </p>
                <p>
                  Jestem gotowy, by podzielić się swoją pasją i umiejętnościami
                  z Tobą. Razem możemy stworzyć wyjątkową stronę internetową,
                  która w pełni odzwierciedli Twoją wizję i przyciągnie uwagę
                  online.💪✨.{" "}
                </p>
                <div className={classes.buttonContainer}>
                  <a
                    className={classes.button}
                    href="/cv-dominik-jojczyk.pdf"
                    download="Dominik-CV"
                    target="_blank "
                  >
                    Pobierz CV
                  </a>
                </div>
              </div>
            </div>
          </div>
          <Socials />
        </section>
      </main>
      <Footer />
    </>
  );
}
