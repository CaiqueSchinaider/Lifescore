import styles from "./Psicomante.module.css";

function PsicomanteClass({ children }) {
  return (
    <main className={styles.ClassBackground}>
      <section className={styles.ClassPsicomante}>
        <div className={styles.ButtonClose}>{children}</div>
        <h1 className={styles.ClassSelected}>Psicomante</h1>
        <h2> Descrição </h2>
        <p className={styles.ClassDescription}>
          Aquele que domina os mistérios da mente, canalizando pensamentos e
          emoções para alcançar clareza, sabedoria e o poder de moldar a
          realidade. Ideal para quem busca encontrar o equilíbrio mental
        </p>
        <h2> Atributos </h2>
        <p>
          <ul className={styles.ClassAttributesList}>
            <li> Atividades mais relaxantes</li>
            <li> Ampla gama de missões</li>
            <li> Bloqueio de tarefas reduzidos </li>
          </ul>
        </p>
        <h2> Maestria da classe </h2>
        <p className={styles.ClassMaestria}> Sábio Psíquico </p>
      </section>
    </main>
  );
}

export default PsicomanteClass;
