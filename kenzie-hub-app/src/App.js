import GlobalStyle from "./Style/GlobalStyles";
import { RouterMain as Routes } from "./Routes";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "./Contexts/UserContext";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <GlobalStyle />
      <UserProvider>
        <Routes />
      </UserProvider>
    </>
  );
}

export default App;
