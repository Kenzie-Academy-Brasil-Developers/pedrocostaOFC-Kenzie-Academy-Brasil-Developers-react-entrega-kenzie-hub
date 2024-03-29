import { RegisterPage } from "./Components/Pages/Register/Register";
import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./Components/Pages/Login/Login";
import { HomePage } from "./Components/Pages/Home/Home";
import GlobalStyle from "./Styles/global";

function App() {
  return (
    <div className="container">
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
