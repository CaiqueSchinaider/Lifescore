import { useContext, useEffect, useState } from "react";
import styles from "./CreateUser.module.css";
import ButtonClose from "../../components/ButtonClose";
import { DataUserContext } from "../../contexts/userData";
import ClassData from "../../components/ClassData";
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { data } from "react-router-dom";

function CreateUser() {
  const [dataUser, setDataUser] = useContext(DataUserContext);

  // FireStore ///////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////
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
  // const userCollectionRef = collection(db, "users");
  ////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  // States  and Consts //////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////
  const [nicknameInput, setNicknameInput] = useState();
  const [archetypeSelected, setArchetypeSelected] = useState("");
  const [errorNickname, setErrorNickname] = useState({
    message: "",
    border: "",
  });
  const userArchetype = [
    { class: "aprimorado" },
    { class: "determinado" },
    { class: "psicomante" },
    { class: "metódico" },
    { class: "reservado" },
  ];
  const [selectionArchetype, setSelectionArchetype] = useState();
  ////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  // Functions ///////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////
  function classPreview(selectedClass) {
    const archetype = userArchetype.find(
      (classUser) => classUser.class == selectedClass
    );

    if (archetype) {
      setArchetypeSelected(archetype.class);
    }
  }
  ///////////////////////////////////////////////////////////
  async function AddUser() {
    if (!nicknameInput) {
      setErrorNickname({
        message: "Coloque algum Nickname",
        border: "2px solid red",
      });
    } else {
      if (dataUser[0].nickname) {
        await addDoc(collection(db, "users"), {
          dataUser,
        });
      }
    }
  }
  useEffect(() => {
    setDataUser((prevDataUser) => {
      const updateDataUser = { ...prevDataUser };
      updateDataUser[0] = { ...updateDataUser[0], nickname: nicknameInput };
      return updateDataUser;
    });
  }, [nicknameInput]);
  ////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  useEffect(() => {
    if (dataUser[0].class) {
      console.log("rodou");
      const archetypeUser = document.getElementById(dataUser[0].class);
      console.log("DataUser Correta");
      console.log(archetypeUser);
      if (archetypeUser) {
        console.log(dataUser[0].class);
        archetypeUser.style.backgroundColor = "#d2bf0f";
        const seletor = [
          { item: "Aprimorado" },
          { item: "Psicomante" },
          { item: "Metódico" },
          { item: "Reservado" },
          { item: "Determinado" },
        ];
        let seletorFilter = seletor.filter(
          (index) => index.item !== dataUser[0].class
        );
        let i = 0;
        while (i < 4) {
          console.log(seletorFilter);
          let incorrectArchetype = document.getElementById(
            seletorFilter[i].item
          );
          incorrectArchetype.style.backgroundColor = "#a6060600";
          i++;
        }
      }
    } else {
      console.log("DataUser falsa");
    }
  }, [dataUser[0].class]);
  return (
    <main className={styles.CreateUserPage}>
      <div
        className={styles.ContainerArchetype}
        style={{ display: archetypeSelected ? "flex" : "none" }}
      >
        {archetypeSelected ? (
          archetypeSelected == "aprimorado" ? (
            <ClassData
              children={
                <ButtonClose close={() => setArchetypeSelected(false)} />
              }
              name={"Aprimorado"}
              description={
                "Aquele que busca constantemente evoluir corpo, mente e espírito dominando práticas que fortalecem a saúde, ampliam o conhecimento e o equilíbrio. Ideal para os apreciadores da disciplina e desenvolvimento pessoal"
              }
              attributes={[
                { attribute: "Mais XP em atividades físicas" },
                { attribute: "Bloqueio de tarefas" },
                { attribute: "Missões complexas" },
              ]}
              mastery={"Titã Forjado"}
            />
          ) : archetypeSelected == "psicomante" ? (
            <ClassData
              children={
                <ButtonClose close={() => setArchetypeSelected(false)} />
              }
              name={"Psicomante"}
              description={
                "Aquele que domina os mistérios da mente, canalizando pensamentos e emoções para alcançar clareza, sabedoria e o poder de moldar a realidade. Ideal para quem busca encontrar o equilíbrio mental"
              }
              attributes={[
                { attribute: "Atividades mais relaxantes" },
                { attribute: "Ampla gama de missões" },
                { attribute: "Bloqueio de tarefas reduzidos" },
              ]}
              mastery={"Sábio Psíquico"}
            />
          ) : archetypeSelected == "metódico" ? (
            <ClassData
              children={
                <ButtonClose close={() => setArchetypeSelected(false)} />
              }
              name={"Metódico"}
              description={
                " Aquele que encontra força na disciplina e na organização, mantendo uma rotina estruturada para cumprir responsabilidades com precisão e foco. Ideal para quem busca apenas seguir sua rotina, independentemente da meta"
              }
              attributes={[
                { attribute: "Pontos de XP dobrados" },
                { attribute: "Apenas dois bloqueios de tarefas por dia" },
              ]}
              mastery={"Ritmista Exemplar"}
            />
          ) : archetypeSelected == "reservado" ? (
            <ClassData
              children={
                <ButtonClose close={() => setArchetypeSelected(false)} />
              }
              name={"Reservado"}
              description={
                " Aquele que busca o autodesenvolvimento através da introspecção, preservando sua energia para si mesmo, mas sem abrir mão de um espaço social sutil e respeitoso. Ideal para quem valoriza a própria"
              }
              attributes={[
                { attribute: " Tarefas com menos interação social" },
                { attribute: "Muitas tarefas" },
                { attribute: "Mais flexibilidade de missões" },
              ]}
              mastery={"Sombra Enigmática"}
            />
          ) : (
            <ClassData
              children={
                <ButtonClose close={() => setArchetypeSelected(false)} />
              }
              name={"Determinado"}
              description={
                "Aquele que estabelece metas pessoais e se dedica incansavelmente a alcançá-las, superando desafios e se adaptando às circunstâncias para conquistar seus objetivos. Ideal para quem busca alcançar uma meta pessoal"
              }
              attributes={[
                { attribute: "Flexibilidade Total" },
                { attribute: "Nenhum bloqueio de tarefas" },
                { attribute: "Maestria ilimitadas" },
              ]}
              mastery={"Conquistador"}
            />
          )
        ) : null}
      </div>
      <section className={styles.ContainerForm}>
        <h1 className={styles.PageTitle}>Qual será seu Nome no LifeScore?</h1>
        <p className={styles.MessageError}>{errorNickname.message}</p>
        <input
          type="text"
          className={styles.NicknameInput}
          maxLength="17"
          spellCheck="false"
          onChange={(e) => {
            setNicknameInput(e.target.value);
          }}
          style={{ border: errorNickname.border }}
        />
        <button
          className={styles.CreateButton}
          onClick={() => {
            AddUser();
          }}
        >
          Criar Perfil
        </button>
      </section>
      <section>
        <h2 className={styles.PageTitle1} spellCheck="false">
          {" "}
          Escolha sua classe
        </h2>
        <div className={styles.UserClass}>
          <button
            id="Aprimorado"
            className={styles.ClassButton}
            onClick={() => {
              classPreview("aprimorado");
            }}
          >
            <p> Aprimorado</p>
            <img src="/class/aprimorado.png" alt="img class" />\
          </button>
          <button
            id="Psicomante"
            className={styles.ClassButton}
            onClick={() => {
              classPreview("psicomante");
            }}
          >
            <p> Psicomante</p>
            <img src="/class/psicomante.png" alt="img class" />
          </button>
          <button
            id="Metódico"
            className={styles.ClassButton}
            onClick={() => {
              classPreview("metódico");
            }}
          >
            <p> Metódico</p>
            <img src="/class/metódico.png" alt="img class" />
          </button>
          <button
            id="Reservado"
            className={styles.ClassButton}
            onClick={() => {
              classPreview("reservado");
            }}
          >
            <p>Reservado</p>
            <img src="/class/reservado.png" alt="img class" />
          </button>
          <button
            id="Determinado"
            className={styles.ClassButton}
            onClick={() => {
              classPreview("determinado");
            }}
          >
            <p>Determinado</p>
            <img src="/class/determinado.png" alt="img class" />
          </button>
        </div>
      </section>
    </main>
  );
}

export default CreateUser;
