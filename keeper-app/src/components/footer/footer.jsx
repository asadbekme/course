import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p className={styles["footer__title"]}>
        Copyright Reserved {new Date().getFullYear()}
      </p>
    </div>
  );
};

export default Footer;
