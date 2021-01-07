import React, { useContext } from "react";
import proyectoContext from '../../context/proyecto/proyectoContext'

export default function Proyecto({pro}) {


  const {selectProyecto} = useContext(proyectoContext)

  return (
    <li>
      <button type="button" onClick={()=> selectProyecto(pro.id)} > {pro.nombre} </button>
    </li>
  );
}
