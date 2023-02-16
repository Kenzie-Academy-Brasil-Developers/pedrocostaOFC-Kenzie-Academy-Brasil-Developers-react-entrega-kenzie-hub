import { HeaderContent } from "../../../Styles/Header";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../../../Assets/logo.svg";

export const Header = () => {
  const navigate = useNavigate();
  const clearLocalStorage = () => {
    window.localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <HeaderContent>
        <img src={logo} alt="" />
        <Link
          onClick={() => clearLocalStorage()}
          className="button-logout"
          to="/"
        >
          Sair
        </Link>
      </HeaderContent>
    </>
  );
};
