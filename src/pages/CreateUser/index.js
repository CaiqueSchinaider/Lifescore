import { useContext, useEffect, useState } from "react";
import AprimoradoClass from "../../components/UsersClassDescription/Aprimorado";
import DeterminadoClass from "../../components/UsersClassDescription/Determinado";
import styles from "./CreateUser.module.css";
import PsicomanteClass from "../../components/UsersClassDescription/Psicomante";
import MetódicoClass from "../../components/UsersClassDescription/Metódico";
import ReservadoClass from "../../components/UsersClassDescription/Reservado";
import ButtonClose from "../../components/ButtonClose";
import { DataUserContext } from "../../contexts/userData";
import ClassData from "../../components/ClassData";

function CreateUser() {
  const [dataUser, setDataUser] = useContext(DataUserContext);
  console.log(dataUser);
  const [userArchetype, setUserArchetype] = useState([
    {
      class: "aprimorado",
    },
    { class: "determinado" },
    { class: "psicomante" },
    { class: "metódico" },
    { class: "reservado" },
  ]);
  const [archetypeSelected, setArchetypeSelected] = useState("");

  function classPreview(selectedClass) {
    const archetype = userArchetype.find(
      (classUser) => classUser.class == selectedClass
    );

    if (archetype) {
      setArchetypeSelected(archetype.class);
    }
  }
  useEffect(() => {}, [archetypeSelected]);
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
                "Aquele que busca constantemente evoluir corpo, mente e espíritodominando práticas que fortalecem a saúde, ampliam o conhecimento e o equilíbrio. Ideal para os apreciadores da disciplina e desenvolvimento pessoal"
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
        <input
          type="text"
          className={styles.NicknameInput}
          maxLength="17"
          spellCheck="false"
        />
        <button className={styles.CreateButton}>Criar Perfil</button>
      </section>
      <section>
        <h2 className={styles.PageTitle1} spellCheck="false">
          {" "}
          Escolha sua classe
        </h2>
        <div className={styles.UserClass}>
          <button
            className={styles.ClassButton}
            onClick={() => {
              classPreview("aprimorado");
            }}
          >
            <p> Aprimorado</p>
            <img src="/class/aprimorado.png" alt="img class" />\
          </button>
          <button
            className={styles.ClassButton}
            onClick={() => {
              classPreview("psicomante");
            }}
          >
            <p> Psicomante</p>
            <img src="/class/psicomante.png" alt="img class" />
          </button>
          <button
            className={styles.ClassButton}
            onClick={() => {
              classPreview("metódico");
            }}
          >
            <p> Metódico</p>
            <img src="/class/metódico.png" alt="img class" />
          </button>
          <button
            className={styles.ClassButton}
            onClick={() => {
              classPreview("reservado");
            }}
          >
            <p>Reservado</p>
            <img src="/class/reservado.png" alt="img class" />
          </button>
          <button
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
