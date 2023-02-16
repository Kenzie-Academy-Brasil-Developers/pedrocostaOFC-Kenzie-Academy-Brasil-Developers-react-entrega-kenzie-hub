import { TechContext } from "../../../Contexts/TechProvider";
import { useContext } from "react";
import { FormModal } from "./Modal/Modal";
import { CardTech } from "./CardTech/CardTech";
import { DivHome } from "../../../Styles/Home";
import { Header } from "../Header/Header";

export const HomePage = () => {
  const { user, modal, setModal } = useContext(TechContext);

  const modalStatus = (value) => {
    if (!modal) {
      setModal(value);
    } else {
      setModal(false);
    }
  };

  return (
    <DivHome>
      <Header />
      <section className="name-to-description">
        <h1 className="name-profile">Olá, {user.name}</h1>
        <p className="description-profile">{user.course_module}</p>
      </section>
      <main className="main-technics">
        <div className="div-title-tech">
          <h1 className="title-tech">Tecnologias</h1>
          <button
            type="submit"
            onClick={() => modalStatus(true)}
            className="button-technics-add"
          >
            +
          </button>
        </div>
        {modal === true ? <FormModal /> : ""}
        <ul className="ul-technics">
          <CardTech></CardTech>
        </ul>
      </main>
    </DivHome>
  );
};
