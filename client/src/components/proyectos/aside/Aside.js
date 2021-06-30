import React from "react";
import NuevoProyecto from '../nuevo-proyecto/NuevoProyecto';
import ListProyectos from '../lista-proyectos/ListProyectos';
import "./aside.scss";

export default function Aside() {
  return (
    <aside className="aside-proyectos">
      <h3 className="aside-proyectos__title">MERN</h3>
      <NuevoProyecto/>
      <div className="proyectos">
        <h3>tus proyectos</h3>
        <ListProyectos/>
      </div>
    </aside>
  );
}
