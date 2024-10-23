"use client";
import classes from "./Form.module.css";
import { useState } from "react";
import Image from "next/image";

export default function Form() {
  const [services, setServices] = useState("");
  const [text, setText] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(null);
  const [errorFields, setErrorFields] = useState([]);

  const sendMail = async (e) => {
    e.preventDefault();
    const fieldsToCheck = { fullName, email, services, text };
    const emptyFields = Object.entries(fieldsToCheck)
      .filter(([key, value]) => !value)
      .map(([key]) => key);
    setErrorFields(emptyFields);

    if (emptyFields.length > 0) {
      setFormError("Proszę uzupełnij wszystkie wymagane pola.");
      return;
    }

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          services,
          text,
          fullName,
          email,
        }),
      });

      if (response.ok) {
        // console.log("Form submitted succesfully");
        setFormSubmitted(true);
        setFormError(null);
        setEmail("");
        setFullName(fieldsToCheck.fullName);
        setText("");
        setServices("");
      } else {
        const errorData = await response.json();
        setFormError(`Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      setFormError("Unexpected error occurred.");
    }
  };

  return (
    <>
      {!formSubmitted ? (
        <div className={classes.containerLeft}>
          <h1 className={classes.header3}>
            Jak Mogę Ci <span>Pomóc?</span>
          </h1>
          {formError && <p style={{ color: "red" }}>{formError}</p>}

          <p className={classes.text}>
            Potrzebujesz strony internetowej? aplikacji? pomocy IT? - po prostu
            podaj więcej szczegółów i pomysłów. A ja przyjdę z pomocą do Ciebie.
          </p>

          <form onSubmit={sendMail} className={classes.form}>
            <label htmlFor="fullName">Imię:</label>
            <input
              type="text"
              id="fullName"
              placeholder="Podaj Swoje Imię"
              value={fullName}
              onChange={(e) => {
                setFullName(e.target.value);
              }}
              name="fullName"
              style={{
                border: errorFields.includes("fullName")
                  ? "1px solid red"
                  : "0",
              }}
            />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Podaj Swój Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              style={{
                border: errorFields.includes("email") ? "1px solid red" : "0",
              }}
            />
            <label htmlFor="services">Jakiej usługi potrzebujesz?</label>
            <input
              type="text"
              id="services"
              name="services"
              placeholder="Podaj jakiej usługi potrzebujesz"
              value={services}
              onChange={(e) => {
                setServices(e.target.value);
              }}
              style={{
                border: errorFields.includes("services")
                  ? "1px solid red"
                  : "0",
              }}
            />
            <label htmlFor="text">Twoja Wiadomość:</label>
            <textarea
              id="text"
              name="text"
              placeholder="Napisz Swoją wiadomość"
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
              style={{
                border: errorFields.includes("text") ? "1px solid red" : "0",
              }}
            />
            <div className={classes.buttonContainer}>
              <button type="submit" className={classes.button}>
                Wyślij wiadomość!
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div>
          <h3 className={classes.header3}>
            Dziękuję za przesłanie formularza!
          </h3>
          <p className={classes.text}>
            <span>{fullName}</span> - Oto kwiatki dla Ciebie w zamian za
            wiadomość - wirtualnie, ale z sercem! Postaram się odpowiedzieć tak
            szybko, jak to możliwe, aby kwiatki nie zwiędły.
          </p>
          <Image
            src={"/dziekuje.png"}
            width={200}
            height={200}
            layout="responsive"
            alt="Moj avatar trzymajacy kwiaty"
          />
        </div>
      )}
    </>
  );
}
