import React, { useContext, useEffect } from "react";
import proyectoContext from "../../context/proyecto/proyectoContext";
import Proyecto from "./Proyecto";

export default function ListadoProyectos() {
  const { proyectos, obtenerProyectos } = useContext(proyectoContext);



  useEffect(() => {
      obtenerProyectos()
  }, [])

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
