import styles from "./note.module.css";

const Note = () => {
  return (
    <div className={styles.note}>
      <div className={styles["note__box"]}>
        <h1 className={styles["note__title"]}>Title</h1>
        <p className={styles["note__info"]}>Info</p>
      </div>
    </div>
  );
};

export default Note;
