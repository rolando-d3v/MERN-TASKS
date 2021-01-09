import React, { useContext } from "react";
import proyectoContext from "../../context/proyecto/proyectoContext";
import TareaContext from "../../context/tareas/tareaContext";

export default function Proyecto({ pro }) {
  const { proyectoActual } = useContext(proyectoContext);
  const { obtenerTareas } = useContext(TareaContext);

  //funcion para obtener id de proyecto
  const seleccionarProyecto = (id) => {
    proyectoActual(id)
    obtenerTareas(id)
  };

  return (
    <li>
      <button type="button" onClick={() => seleccionarProyecto(pro.id)}>
        {pro.nombre}
      </button>
    </li>
  );
}
