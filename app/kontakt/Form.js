"use client";
import classes from "./Form.module.css";
import { useState } from "react";

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
      setFormError("Please fill in all required fields.");
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
        console.log("Form submitted succesfully");
        setFormSubmitted(true);
        setFormError(null);
        setEmail("");
        setFullName("");
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
    <div className={classes.containerLeft}>
      <h3 className={classes.header3}>
        Jak Mozemy Ci <span>Pomóc?</span>
      </h3>
      {formError && <p style={{ color: "red" }}>{formError}</p>}

      <p className={classes.text}>
        Potrzebujesz strony internetowej? aplikacji? pomocy IT? - po prostu
        podaj więcej szczegółów i pomysłów. A my przyjdziemy z pomocą do Ciebie.
      </p>

      {formSubmitted && (
        <p className={classes.submitted}>
          Dziekuje za przeslanie formularza! Odpowiem najszybciej jak to
          mozliwe!
        </p>
      )}

      <form onSubmit={sendMail}>
        <label htmlFor="fullName">Imię:</label>
        <input
          type="text"
          id="fullName"
          placeholder="Podaj swoje imie"
          value={fullName}
          onChange={(e) => {
            setFullName(e.target.value);
          }}
          name="fullName"
          style={{
            border: errorFields.includes("fullName") ? "1px solid red" : "0",
          }}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Podaj swoj email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          style={{
            border: errorFields.includes("email") ? "1px solid red" : "0",
          }}
        />
        <label htmlFor="services">Jakiej uslugi potrzebujesz?</label>
        <input
          type="text"
          id="services"
          name="services"
          placeholder="Podaj jakiej uslugi potrzebujesz"
          value={services}
          onChange={(e) => {
            setServices(e.target.value);
          }}
          style={{
            border: errorFields.includes("services") ? "1px solid red" : "0",
          }}
        />
        <label htmlFor="text">Twoja Wiadomosc:</label>
        <textarea
          id="text"
          name="text"
          placeholder="Napisz swoja wiadomosc"
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
            Send Message!
          </button>
        </div>
      </form>
    </div>
  );
}
