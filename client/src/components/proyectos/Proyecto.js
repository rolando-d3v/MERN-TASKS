import React, { useContext } from "react";
import proyectoContext from "../../context/proyecto/proyectoContext";
import TareaContext from "../../context/tareas/tareaContext";

export default function Proyecto({ pro }) {
  const { proyectoActual } = useContext(proyectoContext);
  const { obtenerTareas } = useContext(TareaContext);

  
  //funcion para obtener id de proyecto
  const seleccionarProyecto = (id) => {
    proyectoActual(id)  //fijar elproyecto actual
    obtenerTareas(id) // filtrar una tarea cuando hace click
  };

  return (
    <li className='space-y-2' >
      <button type="button" onClick={() => seleccionarProyecto(pro.id)}>
        {pro.nombre}
      </button>
    </li>
  );
}
