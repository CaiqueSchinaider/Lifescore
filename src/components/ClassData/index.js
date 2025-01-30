import styles from "./ClassData.module.css";

function ClassData({ children, name, description, attributes, mastery }) {
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
        <p className={styles.ClassMaestria}> {mastery} </p>
      </section>
    </main>
  );
}

export default ClassData;
