import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import proyectoContext from "../../context/proyecto/proyectoContext";

export default function FormTarea() {
  const { proyecto } = useContext(proyectoContext);

  const [tareax, setTareax] = useState({
    nombre: "",
  });

  const { nombre } = tareax;


  if (!proyecto) return null;

  const obtenerValor = (e) => {
    setTareax({
      ...tareax,
       [e.target.name]: e.target.value
    })
  };


  const crearTarea = (e) => {
    e.preventDefault();
  };

  return (
    <div className="p-4 bg-blueGray-800">
      <form className="p-2 w-4/5 mx-auto" onSubmit={crearTarea}>
        <section className="my-2">
          <input
            className="focus:outline-none px-2 py-1.5 w-full leading-tight bg-white rounded-md"
            type="text"
            placeholder="Nombre de la tarea"
            name="nombre"
            value={nombre}
            onChange={obtenerValor}
          />
        </section>
        <button
          className="py-1.5 px-4  w-full bg-azul-800 text-white rounded-lg hover:bg-blue-800  "
          type="submit"
        >
          Agregar Tarea
        </button>
      </form>
    </div>
  );
}
