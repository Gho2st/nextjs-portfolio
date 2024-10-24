import ContactItem from "./ContactItem";
import Form from "./Form";
import classes from "./page.module.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import Footer from "@/components/ui/Footer";
import Socials from "@/components/ui/Socials";
import { Metadata } from "next";

export const metadata = {
  title:
    "Skontaktuj się z nami – Profesjonalne tworzenie stron internetowych i SEO z Domiweb",
  description:
    "Skontaktuj się z nami, aby uzyskać więcej informacji na temat naszych usług tworzenia stron internetowych i pozycjonowania SEO. Jesteśmy tutaj, aby pomóc!",
  alternates: {
    canonical: "https://www.domiweb.pl/kontakt",
  },
};

export default function Kontakt() {
  return (
    <>
      <main>
        <section>
          <div className={classes.container}>
            <Form />
            <div className={classes.containerRight}>
              <ContactItem
                icon={<FaLocationDot />}
                header="Lokalizacja:"
                info="Kraków | Nowy Sącz"
              />
              <ContactItem
                icon={<FaPhoneAlt />}
                header="Numer Telefonu:"
                info="+48 576 985 894"
              />
              <ContactItem
                icon={<MdOutlineMailOutline />}
                header="Email:"
                info="domiweb.biuro@gmail.com"
              />
              <div className={classes.map__container}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d327953.3035028416!2d19.67523849478855!3d50.046298870558296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471644c0354e18d1%3A0xb46bb6b576478abf!2zS3Jha8Ozdw!5e0!3m2!1spl!2spl!4v1704144563818!5m2!1spl!2spl"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Socials />
      <Footer />
    </>
  );
}
