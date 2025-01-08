import styles from "./Login.module.css";

function Login() {
  return (
    <main className={styles.LoginPage}>
      <section className={styles.ContainerForm}>
        <h2 className={styles.PageTitle}> Login </h2>
        <div className={styles.UserInfo}>
          <label className={styles.EmailArea}>
            Email
            <input type="email" placeholder="Insira seu email" />
          </label>
          <label className={styles.PasswordArea}>
            Senha
            <input type="email" placeholder="Insira sua senha" />
          </label>
        </div>
        <button className={styles.ConfirmButton}>Entrar</button>
      </section>
    </main>
  );
}

export default Login;
