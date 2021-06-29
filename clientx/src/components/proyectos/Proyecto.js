import React, { useContext, useState } from "react";
import proyectoContext from "../../context/proyecto/proyectoContext";
import TareaContext from "../../context/tareas/tareaContext";

export default function Proyecto({ pro }) {
  const { proyectoActual } = useContext(proyectoContext);
  const { obtenerTareas } = useContext(TareaContext);

  //funcion para obtener id de proyecto
  const seleccionarProyecto = (id) => {
    proyectoActual(id); //fijar elproyecto actual
    obtenerTareas(id); // filtrar una tarea cuando hace click
  };

  return (
    <li>
      <button
        className={`${
          pro.id && "focus:text-blue-600  font-semibold"
        } font-poppins text-sm text-gray-600 `}
        type="button"
        onClick={() => seleccionarProyecto(pro.id)}
      >
        {pro.nombre}
      </button>
    </li>
  );
}
