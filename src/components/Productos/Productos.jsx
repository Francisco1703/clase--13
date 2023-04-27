import { useState, useEffect } from "react";
import { db } from "../../services/firebase/config";
import {
  collection,
  doc,
  query,
  updateDoc,
  onSnapshot,
} from "firebase/firestore";
import "./Productos.css";

const Productos = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    //Creamos una consulta a la colección "productos".
    const q = query(collection(db, "productos"));

    //onSnapShot es una función que escucha los cambios en la consulta.

    const modificar = onSnapshot(q, function (querySnapShot) {
      const docs = [];
      querySnapShot.forEach(function (doc) {
        docs.push({ id: doc.id, ...doc.data() });
      });
      setProductos(docs);
    });
    return () => {
      modificar();
    };
  }, []);

  //Función para bajar el stock cuando el usuario compra:

  const manejadorCompra = (id, stock) => {
    if (stock > 0) {
      const productoRef = doc(db, "productos", id);
      updateDoc(productoRef, {
        stock: stock - 1,
      })
        //updateDoc me actualiza el documento.
        .then(() => {
          console.log("El stock se actualizó correctamente");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="productos">
      {productos.map((producto) => (
        <div className="producto" key={producto.id}>
          <h2> Nombre: {producto.nombre} </h2>
          <p> Precio: {producto.precio} </p>
          <p> Stock: {producto.stock} </p>
          <button
            className="btnComprar"
            onClick={() => manejadorCompra(producto.id, producto.stock)}
          >
            {" "}
            Comprar{" "}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Productos;
