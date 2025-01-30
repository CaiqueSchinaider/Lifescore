import { Link } from "react-router-dom";
import styles from "./Login.module.css";
import { useState } from "react";
import { getFirestore, addDoc, getDocs, collection } from "firebase/firestore";
import { initializeApp } from "firebase/app";

function Login() {
  const firebaseConfig = {
    apiKey: "AIzaSyA3TNrkK569r_wZo7_hrGWcapj477pyrPg",
    authDomain: "lifescore-3be81.firebaseapp.com",
    projectId: "lifescore-3be81",
    storageBucket: "lifescore-3be81.firebasestorage.app",
    messagingSenderId: "699091243874",
    appId: "1:699091243874:web:f7a244d6c7ef905d0d923b",
    measurementId: "G-7N57EZJDTQ",
  };
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const collectionRef = collection(db, "users");

  const [emailInput, setEmailInput] = useState();
  const [passwordInput, setPasswordInput] = useState();
  const [emailError, setEmailError] = useState({
    messageError: "",
    borderError: "",
  });
  const [passwordError, setPasswordError] = useState({
    messageError: "",
    borderError: "",
  });
  async function FindUser() {
    const data = await getDocs(collectionRef);
    const users = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    const user = users.find((user) => user.email == emailInput);
    return user;
  }
  async function CheckUser() {
    const user = await FindUser();
    if (!emailInput) {
      setEmailError({
        messageError: "Digite um email!",
        borderError: "2px solid red",
      });
    } else if (!user) {
      setEmailError({
        messageError: "Não existe conta com esse email!",
        borderError: "2px solid red",
      });
    } else {
      setEmailError({
        messageError: "",
        borderError: "",
      });
    }
    if (!passwordInput) {
      setPasswordError({
        messageError: "Senha necessaria!",
        borderError: "2px solid red",
      });
    } else if (user) {
      if (passwordInput !== user.password) {
        setPasswordError({
          messageError: "Senha incorreta!",
          borderError: "2px solid red",
        });
      } else {
        setPasswordError({
          messageError: "",
          borderError: "",
        });
      }
    }
  }
  return (
    <main className={styles.LoginPage}>
      <h2 className={styles.PageTitle}> Conecte-se </h2>
      <section className={styles.ContainerForm}>
        <div className={styles.UserInfo}>
          <label className={styles.EmailArea}>
            E-mail
            <p className={styles.MessageError}>{emailError.messageError}</p>
            <input
              type="email"
              placeholder="Insira seu email"
              onChange={(e) => setEmailInput(e.target.value)}
              style={{ border: emailError.borderError }}
            />
          </label>
          <label className={styles.PasswordArea}>
            Senha
            <p className={styles.MessageError}>{passwordError.messageError}</p>
            <input
              type="email"
              placeholder="Insira sua senha"
              onChange={(e) => setPasswordInput(e.target.value)}
              style={{ border: passwordError.borderError }}
            />
          </label>
        </div>

        <nav className={styles.UserNavigation}>
          <button className={styles.ConfirmButton} onClick={() => CheckUser()}>
            Entrar
          </button>{" "}
          <Link to="/register">
            <button className={styles.ConfirmButton}> Criar conta </button>
          </Link>
          <Link className={styles.PasswordForgout}>Recuperar senha</Link>
        </nav>
      </section>
    </main>
  );
}

export default Login;
