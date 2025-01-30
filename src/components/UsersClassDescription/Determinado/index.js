import styles from "./Determinado.module.css";

function DeterminadoClass({ children }) {
  return (
    <main className={styles.ClassBackground}>
      <section className={styles.ClassDeterminado}>
        <div className={styles.ButtonClose}>{children}</div>
        <h1 className={styles.ClassSelected}>Determinado</h1>
        <h2> Descrição </h2>
        <p className={styles.ClassDescription}>
          Aquele que estabelece metas pessoais e se dedica incansavelmente a
          alcançá-las, superando desafios e se adaptando às circunstâncias para
          conquistar seus objetivos. Ideal para quem busca alcançar uma meta
          pessoal
        </p>
        <h2> Atributos </h2>
        <p>
          <ul className={styles.ClassAttributesList}>
            <li> Flexibilidade Total</li>
            <li> Nenhum bloqueio de tarefas</li>
            <li> Maestria ilimitadas</li>
          </ul>
        </p>
        <h2> Maestria da classe </h2>
        <p className={styles.ClassMaestria}> Conquistador </p>
      </section>
    </main>
  );
}

export default DeterminadoClass;
