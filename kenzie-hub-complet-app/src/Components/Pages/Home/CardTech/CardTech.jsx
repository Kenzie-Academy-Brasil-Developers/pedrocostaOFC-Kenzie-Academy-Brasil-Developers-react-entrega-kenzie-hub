import del from "../../../../Assets/del.png";
import { useContext } from "react";
import { TechContext } from "../../../../Contexts/TechProvider";
import { Li } from "../../../../Styles/CardTech";
import { FormModalEdit } from "../ModalEdit/ModalEdit";
import { ToastContainer } from "react-toastify";

export const CardTech = () => {
  const { user, deleteItem, modalEdit, setModalEdit, setModalPlaceholder } =
    useContext(TechContext);

  const userDev = user.techs;

  const openModalEdit = (value) => {
    setModalPlaceholder(value);
    modalEdit === true ? setModalEdit(false) : setModalEdit(true);
  };

  return (
    <>
      <ToastContainer />
      {modalEdit === true ? <FormModalEdit /> : ""}
      {userDev?.map((data) => (
        <Li key={data.id} className="li-technics">
          <h2 onClick={() => openModalEdit(data)} className="technics">
            {data.title}
          </h2>
          <div className="level-and-delete">
            <p className="text-level">{data.status}</p>
            <button
              onClick={() => deleteItem(data.id)}
              className="button-delete"
            >
              <img src={del} alt="" />
            </button>
          </div>
        </Li>
      ))}
    </>
  );
};
