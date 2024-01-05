import classes from "./ContactItem.module.css";

export default function ContactItem(props) {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.iconContainer}>
          <div className={classes.icon}>{props.icon}</div>
        </div>
        <div className={classes.info}>
          <p className={classes.header}>{props.header}</p>
          <p className={classes.textColor}>{props.info}</p>
        </div>
      </div>
    </>
  );
}
