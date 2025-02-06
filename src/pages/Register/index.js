import { Link, useNavigate } from "react-router-dom";
import styles from "./Register.module.css";
import { useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, getDocs, collection } from "firebase/firestore";
import { EmailCheckContext } from "../../contexts/emailcheck";
import { DataUserContext } from "../../contexts/userData";
function Register() {
  const [, setDataUser] = useContext(DataUserContext);
  const [, setCodeConfig] = useContext(EmailCheckContext);
  const navigate = useNavigate();
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
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [passwordConfirmationInput, setPasswordConfirmationInput] =
    useState("");
  const [ageInput, setAgeInput] = useState("");
  const [genderInput, setGenderInput] = useState();
  const [genderManInput, setGenderManInput] = useState("#6b717e");
  const [genderWomanInput, setGenderWomanInput] = useState("#6b717e");
  const [genderNAInput, setGenderNAInput] = useState("#6b717e");
  const [genderName, setGenderName] = useState("");
  const [signal, setSignal] = useState([
    {
      email: false,
      password: false,
      gender: false,
      age: false,
      passwordConfirmation: false,
      create: false,
    },
  ]);
  const [checkSignal, setCheckSignal] = useState();
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
  const [genderError, setGenderError] = useState({
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
        messageError: "Informe seu email",
        borderError: "2px solid red",
      });
    } else if (!String(emailInput).endsWith("@gmail.com")) {
      setEmailError({
        messageError: "Este e-mail não é aceito",
        borderError: "2px solid red",
      });
    } else if (users.find((user) => user.email == emailInput)) {
      setEmailError({
        messageError: "Já existe uma conta com esse e-mail",
        borderError: "2px solid red",
      });
    } else if (emailInput == "@gmail.com") {
      setEmailError({
        messageError: "Email incompleto",
        borderError: "2px solid red",
      });
    } else {
      setEmailError({
        messageError: "",
        borderError: "",
      });

      setSignal((prevSignal) => {
        const updateSignal = { ...prevSignal };
        updateSignal[0] = { ...updateSignal[0], email: true };
        return updateSignal;
      });
    }

    if (String(passwordInput).length < 8) {
      setPasswordError({
        messageError: "Sua senha precisa ter pelo menos 8 caracteres",
        borderError: "2px solid red",
      });
      setSignal((prevSignal) => {
        const updateSignal = { ...prevSignal };
        updateSignal[0] = { ...updateSignal[0], password: false };
        return updateSignal;
      });
    } else if (!/[A-Z]/.test(String(passwordInput))) {
      setPasswordError({
        messageError: "Sua senha precisa ter pelo menos uma letra maiúscula",
        borderError: "2px solid red",
      });
      setSignal((prevSignal) => {
        const updateSignal = { ...prevSignal };
        updateSignal[0] = { ...updateSignal[0], password: false };
        return updateSignal;
      });
    } else if (!/[a-z]/.test(String(passwordInput))) {
      setPasswordError({
        messageError: "Sua senha precisa ter pelo menos uma letra minúscula",
        borderError: "2px solid red",
      });
      setSignal((prevSignal) => {
        const updateSignal = { ...prevSignal };
        updateSignal[0] = { ...updateSignal[0], password: false };
        return updateSignal;
      });
    } else if (!/[0-9]/.test(String(passwordInput))) {
      setPasswordError({
        messageError: "Sua senha precisa ter pelo menos um número",
        borderError: "2px solid red",
      });
      setSignal((prevSignal) => {
        const updateSignal = { ...prevSignal };
        updateSignal[0] = { ...updateSignal[0], password: false };
        return updateSignal;
      });
    } else {
      setPasswordError({
        messageError: "",
        borderError: "",
      });
      setSignal((prevSignal) => {
        const updateSignal = { ...prevSignal };
        updateSignal[0] = { ...updateSignal[0], password: true };
        return updateSignal;
      });
    }
    if (!passwordConfirmationInput) {
      setPasswordConfirmationError({
        messageError: "Confirme sua senha",
        borderError: "2px solid red",
      });
      setSignal((prevSignal) => {
        const updateSignal = { ...prevSignal };
        updateSignal[0] = { ...updateSignal[0], passwordConfirmation: false };
        return updateSignal;
      });
    } else if (passwordConfirmationInput !== passwordInput) {
      setPasswordConfirmationError({
        messageError: "As senhas não coincidem",
        borderError: "2px solid red",
      });
      setSignal((prevSignal) => {
        const updateSignal = { ...prevSignal };
        updateSignal[0] = { ...updateSignal[0], passwordConfirmation: false };
        return updateSignal;
      });
    } else {
      setPasswordConfirmationError({
        messageError: "",
        borderError: "",
      });
      setSignal((prevSignal) => {
        const updateSignal = { ...prevSignal };
        updateSignal[0] = { ...updateSignal[0], passwordConfirmation: true };
        return updateSignal;
      });
    }

    if (String(ageInput).length < 1 || String(ageInput).length == "") {
      setAgeError({
        messageError: "Digite sua idade",
        borderError: "2px solid white",
      });
      setSignal((prevSignal) => {
        const updateSignal = { ...prevSignal };
        updateSignal[0] = { ...updateSignal[0], age: false };
        return updateSignal;
      });
    } else {
      setAgeError({
        messageError: "",
        borderError: "",
      });
      setSignal((prevSignal) => {
        const updateSignal = { ...prevSignal };
        updateSignal[0] = { ...updateSignal[0], age: true };
        return updateSignal;
      });
    }
    if (!genderInput) {
      setGenderError({
        messageError: "Selecione uma opção",
      });
      setSignal((prevSignal) => {
        const updateSignal = { ...prevSignal };
        updateSignal[0] = { ...updateSignal[0], gender: false };
        return updateSignal;
      });
    } else {
      setGenderError({
        messageError: "",
      });
      setSignal((prevSignal) => {
        const updateSignal = { ...prevSignal };
        updateSignal[0] = { ...updateSignal[0], gender: true };
        return updateSignal;
      });
    }
    if (
      signal[0].email &&
      signal[0].password &&
      signal[0].age &&
      signal[0].gender &&
      signal[0].passwordConfirmation
    ) {
      setSignal((prevSignal) => {
        const updateSignal = { ...prevSignal };
        updateSignal[0] = { ...updateSignal[0], create: true };
        return updateSignal;
      });
    }
  }

  function GenderSelect(gender) {
    if (gender == "1") {
      setGenderName("man");
      setGenderManInput("#042c83");
      setGenderWomanInput("#6b717e");
      setGenderNAInput("#6b717e");
    } else if (gender == "2") {
      setGenderName("woman");
      setGenderManInput("#6b717e");
      setGenderWomanInput("#042c83");
      setGenderNAInput("#6b717e");
    } else if (gender == "3") {
      setGenderName("n/a");
      setGenderManInput("#6b717e");
      setGenderWomanInput("#6b717e");
      setGenderNAInput("#042c83");
    }
    setSignal((prevSignal) => {
      const updateSignal = { ...prevSignal };
      updateSignal[0] = { ...updateSignal[0], gender: true };
      return updateSignal;
    });
    setGenderInput(true);
  }
  useEffect(() => {
    if (
      signal[0].email &&
      signal[0].password &&
      signal[0].age &&
      signal[0].gender &&
      signal[0].passwordConfirmation &&
      signal[0].create
    ) {
      navigate("/createuser");
      setDataUser([
        {
          class: "",
          email: emailInput,
          nickname: "",
          password: passwordInput,
          gender: genderName,
          age: ageInput,
        },
      ]);
    }
  }, [signal]);

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
          <p className={styles.MessageError}>{genderError.messageError}</p>
          <div className={styles.GenderArea}>
            <button
              onClick={() => GenderSelect("1")}
              style={{ backgroundColor: genderManInput }}
            >
              Masculino
            </button>
            <button
              onClick={() => GenderSelect("2")}
              style={{ backgroundColor: genderWomanInput }}
            >
              Feminino
            </button>
            <button
              onClick={() => GenderSelect("3")}
              style={{ backgroundColor: genderNAInput }}
            >
              Prefiro não dizer
            </button>
          </div>
          <div className={styles.AgeArea}>
            <p>Qual a sua idade?</p>

            <p className={styles.MessageError}>{ageError.messageError}</p>
            <input
              className={styles.InputAge}
              type="text"
              maxLength={3}
              onChange={(e) => setAgeInput(e.target.value)}
              style={{ border: ageError.borderError }}
            />
          </div>
          <nav className={styles.UserNavigation}>
            <button
              className={styles.ConfirmButton0}
              onClick={() => CheckUser()}
            >
              Criar
            </button>

            <Link to="/">
              <button className={styles.ConfirmButton1}> Já tenho conta</button>
            </Link>
          </nav>
        </section>
      </section>
    </main>
  );
}

export default Register;
