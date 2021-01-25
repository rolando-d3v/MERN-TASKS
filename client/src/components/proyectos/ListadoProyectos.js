import React, { useContext, useEffect } from "react";
import proyectoContext from "../../context/proyecto/proyectoContext";
import Proyecto from "./Proyecto";

export default function ListadoProyectos() {
  const { proyectos, obtenerProyectos } = useContext(proyectoContext);



  useEffect(() => {
      obtenerProyectos()
  }, [])

  if (proyectos.length === 0) return <h3>No hay proyectos</h3>

  return (
    <ul className='px-14 text-left mt-2 list-decimal space-y-2 '>
      {proyectos.map((pro) => (
        <Proyecto key={pro.id} pro={pro} />
      ))}
    </ul>
  );
}
