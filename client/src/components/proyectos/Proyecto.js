import React, { useContext } from "react";
import proyectoContext from "../../context/proyecto/proyectoContext";

export default function Proyecto({ pro }) {
  const { proyectoActual } = useContext(proyectoContext);

  return (
    <li>
      <button type="button" onClick={() => proyectoActual(pro.id)}>
        {pro.nombre}
      </button>
    </li>
  );
}
