import { DivLogo, MainRegister, SectionRegister } from "./style";
import { FormRegister } from "../../Components/Form";
import { UserContext } from "../../Contexts/UserContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../../Assets/img/Logo.svg";

export const RegisterPage = () => {
  const { userRegister, loading, setLoading } = useContext(UserContext);

  return (
    <>
      <MainRegister>
        <DivLogo>
          <img src={Logo} alt="logo Kenzie Hub" />
          <Link to={"/"}>Voltar</Link>
        </DivLogo>
        <SectionRegister>
          <h2>Crie sua conta</h2>
          <h4>Rapido e grátis, vamos nessa</h4>
          <FormRegister
            userRegister={userRegister}
            loading={loading}
            setLoading={setLoading}
          />
        </SectionRegister>
      </MainRegister>
    </>
  );
};
