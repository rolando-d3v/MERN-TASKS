import React, { useContext } from "react";
import proyectoContext from "../../context/proyecto/proyectoContext";
import Proyecto from "./Proyecto";

export default function ListadoProyectos() {
  const { proyectos } = useContext(proyectoContext);

  if (proyectos.length === 0) {
    return null;
  }

  return (
    <ul>
      {proyectos.map((pro) => (
        <Proyecto key={pro.id} pro={pro} />
      ))}
    </ul>
  );
}
