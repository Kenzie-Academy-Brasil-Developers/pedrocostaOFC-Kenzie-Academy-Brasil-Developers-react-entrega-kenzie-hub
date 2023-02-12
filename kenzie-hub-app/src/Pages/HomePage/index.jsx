import { HomePageUser, PrinceSection } from "./style";
import { ModalAddTech, ModalEditTech } from "../../Components/Modals";
import { useContext } from "react";
import { UserContext } from "../../Contexts/UserContext";
import { TechContext } from "../../Contexts/TechContext";
import { Navigate } from "react-router-dom";
import { Loading } from "../../Components/Loading";
import { NavBar } from "../../Components/Nav";
import { Header } from "../../Components/Header";
import Lixo from "../../Assets/img/lixo.png";

export const HomePage = () => {
  const { user } = useContext(UserContext);
  const {
    listTechs,
    techDelete,
    modalAdd,
    setModalAdd,
    modalEdit,
    setModalEdit,
  } = useContext(TechContext);

  return (
    <>
      {user ? (
        <HomePageUser>
          <NavBar />
          <Header />
          <PrinceSection>
            <div>
              <h2>Tecnologias</h2>
              <button onClick={() => setModalAdd(true)}>+</button>
            </div>
            <ul>
              {listTechs ? (
                listTechs.map((elem) => {
                  return (
                    <li key={elem.id}>
                      <h4>{elem.title}</h4>
                      <span>
                        <p>{elem.status}</p>
                        <button
                          className="btnEdit"
                          onClick={() => {
                            setModalEdit(true);
                            localStorage.setItem("@TECHID", elem.id);
                          }}
                        >
                          Editar
                        </button>
                        <button onClick={() => techDelete(elem.id)}>
                          <img src={Lixo} alt="botão excluir" />
                        </button>
                      </span>
                    </li>
                  );
                })
              ) : (
                <Loading />
              )}
            </ul>
          </PrinceSection>
          {modalAdd && <ModalAddTech />}
          {modalEdit && <ModalEditTech />}
        </HomePageUser>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};
