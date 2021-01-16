import React, { useContext } from "react";
import proyectoContext from "../../context/proyecto/proyectoContext";
import TareaContext from "../../context/tareas/tareaContext";
import Tarea from "./Tarea";

export default function ListadoTarea() {
  const { proyecto, eliminarProyecto } = useContext(proyectoContext);
  const { tareasProyecto } = useContext(TareaContext);

  if (!proyecto)
    return (
      <h2 className="text-center  font-semibold ">Selecciona un Proyecto</h2>
    );

  //destructurando el array proyecto del state
  const [proActual] = proyecto;


  //eliminar el proyecto del state
  const deletePro = (id) => {
    eliminarProyecto(id);
  };

  return (
    <div className="py-10 px-4 ">
      <h3 className="font-bold text-2xl text-center my-8">
        Proyecto: {proActual.nombre}{" "}
      </h3>
      <ul className="w-full mx-auto">
        {tareasProyecto.length === 0 ? (
          <li>no hay tareas</li>
        ) : (
          tareasProyecto.map((tarea) => <Tarea key={tarea.id} tarea={tarea} />)
        )}
      </ul>
      <button
        className="bg-red-100 px-4 py-1 font-semibold mt-4 rounded border-2 border-red-600 hover:bg-red-600 hover:text-white"
        type="button"
        onClick={() => deletePro(proActual.id)}
      >
        Eliminar Proyecto
      </button>
    </div>
  );
}
