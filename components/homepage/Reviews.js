import classes from "./Reviews.module.css";
import ReviewsCard from "./ReviewsCard";

export default function Reviews() {
  return (
    <>
      <div className={classes.container}>
        <p className={classes.upText}>Testimonial</p>
        <h3 className={classes.header}>From Getting Started</h3>
        <p className={classes.text}>
          Projekt w którym wykorzystany był php, baza danych. Projekt w którym
          wykorzystany był php, baza danych.
        </p>
      </div>

      <div className={classes.cardContainer}>
        <ReviewsCard
          text="Dzięki stronie internetowej moimi usługami zainteresowało się wiele nowych klientów.
                Strona jest przejrzysta i prosta w obsłudze a na tym najbardziej mi zależało.
                Polecam!"
          autor="Jakub Oleś"
        />
        <ReviewsCard
          autor="Milena Głowacka"
          text="Jestem bardzo zadowolona z całokształtu wykonanego projektu.
Pan Dominik jest miłą osobą z poczuciem humoru, widać że ma wiedzę niezbędną do wykonywania swojej pracy :)"
        />
        <ReviewsCard
          text="Profesjonalna pomoc w doborze hostingu, domeny i administracji strony w zakresie usługi.
        Konkurecyjne wyceny! Pomoc w zakresie social media w cenie. Dziekuje."
          autor="Julia Płachecka"
        />
      </div>
    </>
  );
}
