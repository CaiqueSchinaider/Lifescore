import { Children } from "react";
import styles from "./Aprimorado.module.css";

function AprimoradoClass({ children }) {
  return (
    <main className={styles.ClassBackground}>
      <section className={styles.ClassAprimorado}>
        <div className={styles.ButtonClose}>{children}</div>
        <h1 className={styles.ClassSelected}>Aprimorado</h1>
        <h2> Descrição </h2>
        <p className={styles.ClassDescription}>
          Aquele que busca constantemente evoluir corpo, mente e espírito,
          dominando práticas que fortalecem a saúde, ampliam o conhecimento e
          promovem o equilíbrio. Ideal para os apreciadores da disciplina e
          desenvolvimento pessoal
        </p>
        <h2> Atributos </h2>
        <p>
          <ul className={styles.ClassAttributesList}>
            <li> Mais XP em atividades físicas</li>
            <li> Bloqueio de tarefas</li>
            <li> Missões complexas</li>
          </ul>
        </p>
        <h2> Maestria da classe </h2>
        <p className={styles.ClassMaestria}> Titã Forjado </p>
      </section>
    </main>
  );
}

export default AprimoradoClass;
