import { Form } from "react-router-dom";
import "./App.css";
import Formulario from "./components/Formulario/Formulario";
import Productos from "./components/Productos/Productos";

function App() {
  return (
    <>
      <h1 className="titulos"> Supermercado Mario Bross </h1>
      <Formulario />
      <h2 className="titulos"> Mis productos </h2>
      <Productos />
    </>
  );
}

export default App;
