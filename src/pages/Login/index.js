import { Link } from "react-router-dom";
import styles from "./Login.module.css";

function Login() {
  return (
    <main className={styles.LoginPage}>
      <h2 className={styles.PageTitle}> Conecte-se </h2>
      <section className={styles.ContainerForm}>
        <div className={styles.UserInfo}>
          <label className={styles.EmailArea}>
            E-mail
            <input type="email" placeholder="Insira seu email" />
          </label>
          <label className={styles.PasswordArea}>
            Senha
            <input type="email" placeholder="Insira sua senha" />
          </label>
        </div>

        <nav className={styles.UserNavigation}>
          <Link>
            {" "}
            <button className={styles.ConfirmButton}>Entrar</button>{" "}
          </Link>
          <Link to="/register">
            <button className={styles.ConfirmButton}> Não tenho conta </button>
          </Link>
          <Link className={styles.PasswordForgout}>Esqueci a senha</Link>
        </nav>
      </section>
    </main>
  );
}

export default Login;
