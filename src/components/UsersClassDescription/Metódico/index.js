import styles from "./Metódico.module.css";

function MetódicoClass({ children }) {
  return (
    <main className={styles.ClassBackground}>
      <section className={styles.ClassMetódico}>
        <div className={styles.ButtonClose}>{children}</div>
        <h1 className={styles.ClassSelected}>Metódico</h1>
        <h2> Descrição </h2>
        <p className={styles.ClassDescription}>
          Aquele que encontra força na disciplina e na organização, mantendo uma
          rotina estruturada para cumprir responsabilidades com precisão e foco.
          Ideal para quem busca apenas seguir sua rotina, independentemente da
          meta
        </p>
        <h2> Atributos </h2>
        <p>
          <ul className={styles.ClassAttributesList}>
            <li> Pontos de XP dobrados </li>
            <li> Apenas dois bloqueios de tarefas por dia</li>
          </ul>
        </p>
        <h2> Maestria da classe </h2>
        <p className={styles.ClassMaestria}> Ritmista Exemplar </p>
      </section>
    </main>
  );
}

export default MetódicoClass;
