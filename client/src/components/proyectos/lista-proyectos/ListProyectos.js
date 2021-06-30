import React from "react";
import "./listProyectos.scss";

const list = [
  { id: 1, nombre: "tienda virtual" },
  { id: 2, nombre: "red social" },
  { id: 3, nombre: "ecomerce" },
];


export default function ListProyectos() {
  return (
    <ul className="list-proyecto">
      {list.map((pro) => (
        <Proyecto  key={pro.id}   proyecto={pro} />
      ))}
    </ul>
  );
}


const Proyecto = ({ proyecto }) => {
  return (
    <li>
      <button type="button">{proyecto.nombre} </button>
    </li>
  );
};
