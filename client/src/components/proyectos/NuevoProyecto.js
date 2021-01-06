import React, { useState, useContext } from "react";
import proyectoContext from "../../context/proyecto/proyectoContext";

export default function NuevoProyecto() {
  const [proyecto, setProyecto] = useState({
    nombre: "",
  });

  const { nombre } = proyecto;

  const { formulario } = useContext(proyectoContext);

  console.log(formulario);

  //poniendo los datos en el state
  const onchangeProyecto = (e) => {
    setProyecto({
      ...proyecto,
      [e.target.name]: e.target.value,
    });
  };

  //creando proyecto
  const onSubmitProyecto = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <button
        className="py-1.5 px-4 my-4 bg-azul-800 text-white rounded-lg hover:bg-blue-800 "
        type="button"
      >
        Nuevo Proyecto
      </button>
      {formulario ? (
        <form className="p-2 w-9/12 mx-auto" onSubmit={onSubmitProyecto}>
          <section className="my-2">
            <input
              className="focus:outline-none px-2 py-1 w-full leading-tight bg-white border-b border-blue-800"
              type="text"
              placeholder="Nombre del Proyecto"
              name="nombre"
              value={nombre}
              onChange={onchangeProyecto}
            />
          </section>
          <button
            className="py-1.5 px-4  w-full bg-azul-800 text-white rounded-lg hover:bg-blue-800  "
            type="submit"
          >
            Agregar Proyecto
          </button>
        </form>
      ) : null}
    </div>
  );
}
