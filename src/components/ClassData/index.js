import { useContext } from "react";
import styles from "./ClassData.module.css";
import { DataUserContext } from "../../contexts/userData";

function ClassData({ children, name, description, attributes, mastery }) {
  const [dataUser, setDataUser] = useContext(DataUserContext);
  function Select(nameClass) {
    setDataUser((prevDataUser) => {
      const updateDataUser = { ...prevDataUser };
      updateDataUser[0] = { ...updateDataUser[0], class: nameClass };
      return updateDataUser;
    });
    console.log(dataUser);
  }
  return (
    <main className={styles.ClassBackground}>
      <section className={styles.ClassDataClass}>
        <div className={styles.ButtonClose}>{children}</div>
        <h1 className={styles.ClassSelected}>{name}</h1>
        <h2> Descrição </h2>
        <p className={styles.ClassDescription}>{description}</p>
        <h2> Atributos </h2>
        <p>
          <ul className={styles.ClassAttributesList}>
            {attributes.map((att) => {
              return <li> {att.attribute} </li>;
            })}
          </ul>
        </p>
        <h2> Maestria da classe </h2>
        <div className={styles.MasteryBox}>
          <p className={styles.ClassMaestria}> {mastery} </p>
          <button
            className={styles.Select}
            onClick={() => {
              Select(name);
            }}
          >
            {" "}
            Selecionar
          </button>
        </div>
      </section>
    </main>
  );
}

export default ClassData;
