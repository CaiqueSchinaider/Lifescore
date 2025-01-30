import styles from "./ButtonClose.module.css";

function ButtonClose({ close }) {
  return (
    <button className={styles.CloseButton} onClick={close}>
      <img src="/close.png" alt="close" />
    </button>
  );
}

export default ButtonClose;
