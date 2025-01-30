import styles from "./Reservado.module.css";

function ReservadoClass({ children }) {
  return (
    <main className={styles.ClassBackground}>
      <section className={styles.ClassReservado}>
        <div className={styles.ButtonClose}>{children}</div>
        <h1 className={styles.ClassSelected}>Reservado</h1>
        <h2> Descrição </h2>
        <p className={styles.ClassDescription}>
          Aquele que busca o autodesenvolvimento através da introspecção,
          preservando sua energia para si mesmo, mas sem abrir mão de um espaço
          social sutil e respeitoso. Ideal para quem valoriza a própria
          companhia
        </p>
        <h2> Atributos </h2>
        <p>
          <ul className={styles.ClassAttributesList}>
            <li> Tarefas com menos interação social</li>
            <li> Muitas tarefas</li>
            <li> Mais flexibilidade de missões</li>
          </ul>
        </p>
        <h2> Maestria da classe </h2>
        <p className={styles.ClassMaestria}> Sombra Enigmática</p>
      </section>
    </main>
  );
}

export default ReservadoClass;
