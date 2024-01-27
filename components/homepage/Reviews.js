"use client";
import classes from "./Reviews.module.css";
import ReviewsCard from "./ReviewsCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Reviews() {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

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
      <Slider {...carouselSettings} className={classes.slider}>
        <ReviewsCard
          text="Dzięki stronie internetowej moimi usługami zainteresowało się wiele nowych klientów.
                Strona jest przejrzysta i prosta w obsłudze a na tym najbardziej mi zależało.
                Polecam!"
          autor="Jakub Oleś"
        />
        <ReviewsCard
          text="Pierwszorzędnie wykonane usługi. Pełen profesjonalizm"
          autor="Jan Podwyszyński"
        />
        <ReviewsCard
          text="Profesjonalna pomoc w doborze hostingu, domeny i administracji strony w zakresie usługi.
                Konkurecyjne wyceny! Pomoc w zakresie social media w cenie. Dziekuje."
          autor="Julia Płachecka"
        />
        <ReviewsCard
          text="Bardzo polecam, rzetelnie i profesjonalnie wykonana usługa, napewno wrócę w przyszłości."
          autor="Eryk Szkred"
        />
        <ReviewsCard
          autor="Milena Głowacka"
          text="Jestem bardzo zadowolona z całokształtu wykonanego projektu.
                Pan Dominik jest miłą osobą z poczuciem humoru, widać że ma wiedzę niezbędną do wykonywania swojej pracy :)"
        />
        <ReviewsCard
          text="Polecam, profesjonalna obsługa, strona przemyślana i miła dla oka:)"
          autor="Dominik Cebula"
        />
      </Slider>
    </>
  );
}
