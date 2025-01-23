import { Link } from "react-router-dom";
import styles from "./Register.module.css";
import { useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, getDocs, collection } from "firebase/firestore";
import { EmailCheckContext } from "../../contexts/emailcheck";
function Register() {
  const [, setCodeConfig] = useContext(EmailCheckContext);

  //Firebase dados
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

  // Inputs de dados
  const [emailInput, setEmailInput] = useState();
  const [passwordInput, setPasswordInput] = useState();
  const [passwordConfirmationInput, setPasswordConfirmationInput] = useState();
  const [ageInput, setAgeInput] = useState();
  const [genderInput, setGenderInput] = useState();
  const [genderMan, setGenderManInput] = useState("#6b717e");
  const [genderWoman, setGenderWomanInput] = useState("#6b717e");
  const [genderNA, setGenderNAInput] = useState("#6b717e");

  // Erros
  const [emailError, setEmailError] = useState({
    messageError: "",
    borderError: "none",
    displayError: "none",
  });
  const [passwordError, setPasswordError] = useState({
    messageError: "",
    borderError: "none",
    displayError: "none",
  });
  const [passwordConfirmationError, setPasswordConfirmationError] = useState({
    messageError: "",
    borderError: "none",
    displayError: "none",
  });
  const [ageError, setAgeError] = useState({
    messageError: "",
    borderError: "none",
    displayError: "none",
  });

  async function CodeSet() {
    const generatedCode = CodeGenerate();
    if (generatedCode) {
      setCodeConfig({
        emailuser: emailInput,
        code: generatedCode,
      });
    }
  }

  function CodeGenerate() {
    const codeGenerate = Math.floor(1000 + Math.random() * 9000);
    return codeGenerate;
  }

  async function GetDataBaseUsers() {
    const collectionRef = collection(db, "users");
    const data = await getDocs(collectionRef);
    const users = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    return users;
  }
  async function CheckUser() {
    const users = await GetDataBaseUsers();
    if (!emailInput) {
      setEmailError({
        messageError: "Digite um email",
        borderError: "2px solid red",
      });
    } else if (!String(emailInput).endsWith("@gmail.com")) {
      setEmailError({
        messageError: "Este email não é valido!",
        borderError: "2px solid red",
      });
    } else if (users.find((user) => user.email == emailInput)) {
      setEmailError({
        messageError: "Já existe um conta com esse email",
        borderError: "2px solid red",
      });
    } else if (emailInput == "@gmail.com") {
      setEmailError({
        messageError: "Email incompleto ",
        borderError: "2px solid red",
      });
    } else {
      setEmailError({
        messageError: "",
        borderError: "",
      });
    }
    if (String(passwordInput).length < 8) {
      setPasswordError({
        messageError: "A senha deve conter no minimo 8 caracteres!",
        borderError: "2px solid red",
      });
    } else if (!/[A-Z]/.test(String(passwordInput))) {
      setPasswordError({
        messageError: "A senha deve conter letras maiuscula!",
        borderError: "2px solid red",
      });
    } else if (!/[a-z]/.test(String(passwordInput))) {
      setPasswordError({
        messageError: "A senha deve conter letras minuscula!",
        borderError: "2px solid red",
      });
    } else if (!/[0-9]/.test(String(passwordInput))) {
      setPasswordError({
        messageError: "A senha deve conter pelo menos um numero!",
        borderError: "2px solid red",
      });
    } else {
      setPasswordError({
        messageError: "",
        borderError: "",
      });
    }
    if (!passwordConfirmationInput) {
      setPasswordConfirmationError({
        messageError: "Confirme sua senha!",
        borderError: "2px solid red",
      });
    } else if (passwordConfirmationInput !== passwordInput) {
      setPasswordConfirmationError({
        messageError: "As senhas não coincidem",
        borderError: "2px solid red",
      });
    } else {
      setPasswordConfirmationError({
        messageError: "",
        borderError: "",
      });
    }
  }

  function GenderSelect(gender) {
    if (gender == "1") {
      setGenderManInput("#042c83");
      setGenderWomanInput("#6b717e");
      setGenderNAInput("#6b717e");
    } else if (gender == "2") {
      setGenderManInput("#6b717e");
      setGenderWomanInput("#042c83");
      setGenderNAInput("#6b717e");
    } else if (gender == "3") {
      setGenderManInput("#6b717e");
      setGenderWomanInput("#6b717e");
      setGenderNAInput("#042c83");
    }
  }
  return (
    <main className={styles.RegisterPage}>
      <h2 className={styles.PageTitle}> Criar Conta </h2>
      <section className={styles.ContainerForm}>
        <div className={styles.UserInfo}>
          <label className={styles.EmailArea}>
            E-mail
            <input
              type="email"
              placeholder="Insira seu email"
              onChange={(e) => setEmailInput(e.target.value)}
              style={{ border: emailError.borderError }}
            />
            <p className={styles.MessageError}>{emailError.messageError}</p>
          </label>

          <label className={styles.PasswordArea}>
            Senha
            <input
              type="password"
              placeholder="Insira sua senha"
              onChange={(e) => setPasswordInput(e.target.value)}
              style={{ border: passwordError.borderError }}
            />
            <p className={styles.MessageError}>{passwordError.messageError}</p>
          </label>

          <label className={styles.PasswordConfirmationArea}>
            Confirmação de senha
            <input
              type="password"
              placeholder="Confirme sua senha"
              onChange={(e) => setPasswordConfirmationInput(e.target.value)}
              style={{ border: passwordConfirmationError.borderError }}
            />
            <p className={styles.MessageError}>
              {passwordConfirmationError.messageError}
            </p>
          </label>
        </div>

        <section className={styles.UserData}>
          <p> Qual seu sexo? </p>
          <div className={styles.GenderArea}>
            <button
              onClick={() => GenderSelect("1")}
              style={{ backgroundColor: genderMan }}
            >
              Masculino
            </button>
            <button
              onClick={() => GenderSelect("2")}
              style={{ backgroundColor: genderWoman }}
            >
              Feminino
            </button>
            <button
              onClick={() => GenderSelect("3")}
              style={{ backgroundColor: genderNA }}
            >
              Prefiro não dizer
            </button>
          </div>
          <div className={styles.AgeArea}>
            <p>Qual a sua idade?</p>
            <span> (Isso não limitara suas interações)</span>
            <input
              className={styles.InputAge}
              type="text"
              maxLength={3}
              onChange={(e) => setAgeInput(e.target.value)}
            />
          </div>
          <nav className={styles.UserNavigation}>
            <button
              className={styles.ConfirmButton}
              onClick={() => CheckUser()}
            >
              Criar
            </button>

            <Link to="/">
              <button className={styles.ConfirmButton}> Já tenho conta </button>
            </Link>
          </nav>
        </section>
      </section>
    </main>
  );
}

export default Register;
