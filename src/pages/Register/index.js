import { Link } from "react-router-dom";
import styles from "./Register.module.css";

function Register() {
  return (
    <main className={styles.RegisterPage}>
      <section className={styles.ContainerForm}>
        <h2 className={styles.PageTitle}> Registro </h2>
        <div className={styles.UserInfo}>
          <label className={styles.EmailArea}>
            Email
            <input type="email" placeholder="Insira seu email" />
          </label>
          <label className={styles.PasswordArea}>
            Senha
            <input type="password" placeholder="Insira sua senha" />
          </label>
        </div>
        <section className={styles.UserData}>
          <p> Qual seu sexo? </p>
          <div className={styles.GenderArea}>
            <label>
              Masculino:
              <input type="radio" value="Masculino" name="gender" />
            </label>
            <label>
              Feminino:
              <input type="radio" value="Feminino" name="gender" />
            </label>
            <label>
              Prefiro não dizer:
              <input type="radio" value="null" name="gender" />
            </label>
          </div>
          <p>Qual a sua idade?</p>
          <span> (Isso não limitara suas interações)</span>
          <input className={styles.InputAge} type="text" maxLength={3} />
          <nav className={styles.UserNavigation}>
            <button className={styles.ConfirmButton}> Registrar </button>
            <Link to="/">
              <button className={styles.ConfirmButton}> Ja tenho conta </button>
            </Link>
          </nav>
        </section>
      </section>
    </main>
  );
}

export default Register;
