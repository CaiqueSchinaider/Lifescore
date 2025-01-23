import { useContext, useEffect, useState } from "react";
import styles from "./EmailConfirm.module.css";
import { EmailCheckContext } from "../../contexts/emailcheck";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
function EmailConfirm() {
  const [codeConfig] = useContext(EmailCheckContext);
  const [userCode, setUserCode] = useState();
  const [inputNone, setInputNone] = useState("none");
  const navigate = useNavigate();

  useEffect(() => {
    if (!codeConfig) {
      navigate("/");
    } else {
      const emailConfig = {
        useremail: codeConfig.emailuser,
        code: codeConfig.code,
      };

      emailjs.send(
        "service_ttkesxl",
        "template_tuasxgj",
        emailConfig,
        "EkUYr-ANKIPXaINm6"
      );

      // useEffect(() => {
      //   const userCodeFormat = String(userCode);
      //   if (userCodeFormat.length < 4) {
      //     setInputNone("none");
      //   } else {
      //     setInputNone("block");
      //   }
      // }, [userCode]);
    }
  }, []);
  function CodeCheck() {
    if (userCode == codeConfig.code) {
      console.log("Codigo Certo");
    } else {
      console.log("Codigo Errado");
    }
  }

  return (
    <main className={styles.EmailConfirmPage}>
      <section className={styles.CodeVerification}>
        <h1 className={styles.Title}>Confirme o Código</h1>
        <p className={styles.p1}>
          {" "}
          Um código de confirmação foi enviado para seu email
        </p>
        <p className={styles.p2}>Digite o código</p>
        <input
          onChange={(e) => setUserCode(e.target.value)}
          type="text"
          maxLength={4}
        />

        <button onClick={() => CodeCheck()}>Verificar</button>
      </section>
    </main>
  );
}

export default EmailConfirm;
