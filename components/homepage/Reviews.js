import classes from "./Reviews.module.css";
import ReviewsCard from "./ReviewsCard";

export default function Reviews() {
  return (
    <>
      <div className={classes.container}>
        <p className={classes.upText}>Google</p>
        <h3 className={classes.header}>Opinie z profilu firmowego.</h3>
        <p className={classes.text}>
          Podziel się swoją opinią, aby pomóc innym użytkownikom! Twoja opinia
          to wirtualny drogowskaz dla innych.
        </p>
        <div className={classes.buttonContainer}>
          <a
            className={classes.button}
            href="https://g.page/r/CT8XYmYaAmICEBM/review"
          >
            Zostaw Opinię!
          </a>
        </div>
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
