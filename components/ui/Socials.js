import classes from "./Socials.module.css";
import { FaFacebook } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function Socials() {
  return (
    <>
      <div className={classes.container}>
        <Link href={"https://www.facebook.com/profile.php?id=100001548255715"}>
          <FaFacebook />
        </Link>
        <Link href={"https://www.instagram.com/dominik_jojczyk_/"}>
          <FiInstagram />
        </Link>
        <Link href={"https://www.linkedin.com/in/dominikjojczyk/"}>
          <FaLinkedinIn />
        </Link>
        <Link href={"https://github.com/Gho2st"}>
          <FaGithub />
        </Link>
      </div>
    </>
  );
}
