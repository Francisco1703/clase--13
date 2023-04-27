import { useState } from "react";
import { db } from "../../services/firebase/config";
import { collection, addDoc } from "firebase/firestore";
import "./Formulario.css";

//1)Importamos los archivos/funciones necesarias y la referencia a nuestra base de datos en Firestore.

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");

  //2) Creamos los 3 estados para trabajar con los valores del formulario.

  //3) Creamos una función manejadora del formulario.

  const manejadorFormulario = (event) => {
    event.preventDefault();

    addDoc(collection(db, "usuarios"), {
      nombre: nombre,
      apellido: apellido,
      telefono: telefono,
    });

    //addDoc es una función que me permíte agregar un documento nuevo en mi colección.

    setNombre("");
    setApellido("");
    setTelefono("");

    //Esto es para que cuando enviemos el formulario las casillas de cada elemento queden en blanco de nuevo.
  };

  return (
    <form className="form" onSubmit={manejadorFormulario}>
      <label className="label" htmlFor="">
        {" "}
        Nombre{" "}
      </label>
      <input
        className="input"
        type="text"
        value={nombre}
        onChange={(event) => setNombre(event.target.value)}
        required
      />

      <label className="label" htmlFor="">
        {" "}
        Apellido{" "}
      </label>
      <input
        className="input"
        type="text"
        value={apellido}
        onChange={(event) => setApellido(event.target.value)}
        required
      />

      <label className="label" htmlFor="">
        {" "}
        Teléfono{" "}
      </label>
      <input
        className="input"
        type="text"
        value={telefono}
        onChange={(event) => setTelefono(event.target.value)}
        required
      />

      <button className="btnEnviar" type="submit">
        {" "}
        Enviar{" "}
      </button>
    </form>
  );
};

export default Formulario;
