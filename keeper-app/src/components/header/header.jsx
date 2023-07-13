import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles["header__title"]}>Keeper App</h1>
    </div>
  );
};

export default Header;
