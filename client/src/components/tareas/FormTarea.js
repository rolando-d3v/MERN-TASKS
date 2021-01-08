import React, { useContext } from "react";
import proyectoContext from "../../context/proyecto/proyectoContext";

export default function FormTarea() {

  const {proyecto} = useContext(proyectoContext)

if (!proyecto) return null

//destructurando el array proyecto
const [proActual] = proyecto


  return (
    <div className="p-4 bg-blueGray-800">
      <form className="p-2 w-1/2 mx-auto" >
        <section className="my-2">
          <input
            className="focus:outline-none px-2 py-1.5 w-full leading-tight bg-white rounded-md"
            type="text"
            placeholder="Nombre de la tarea"
            name="nombre"
            // value={nombre}
            // onChange={onchangeProyecto}
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
