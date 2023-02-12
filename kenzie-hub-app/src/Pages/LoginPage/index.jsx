import Logo from "../../Assets/img/Logo.svg";
import { HomeLogin, SectionLogin } from "./style";
import { FormLogin } from "../../Components/Form";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../Contexts/UserContext";

export const LoginPage = () => {
  const { userLogin, loading, setLoading } = useContext(UserContext);

  return (
    <HomeLogin>
      <img src={Logo} alt="" />
      <SectionLogin>
        <h2>Login</h2>
        <FormLogin
          userLogin={userLogin}
          loading={loading}
          setLoading={setLoading}
        />
        <Link to="/Register">Ainda não possui uma conta?</Link>
        <Link className="btnRegister" to="/Register" type="submit">
          Cadastre-se
        </Link>
      </SectionLogin>
    </HomeLogin>
  );
};
