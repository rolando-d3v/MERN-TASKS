import React from "react";
import NuevoProyecto from "../proyectos/NuevoProyecto";
import ListadoProyectos from "../proyectos/ListadoProyectos";

export default function Sidebar({ sidebar }) {
  return (
    <div>
      <aside
        className={`${
          sidebar ? "transform translate-x-0" : "transform -translate-x-full"
        } w-80 bg-gray-200 text-center py-4 h-screen  duration-500 fixed bottom-0 lg:hidden`}
        style={{ height: "calc(100vh - 60px)" }}
      >
        <h3 className="font-bold text-3xl">
          MERN<span className="font-normal">TASKS</span>{" "}
        </h3>
        <NuevoProyecto />
        <div className="my-4">
          <h3 className="font-bold text-xl">Tus proyectos</h3>
          <ListadoProyectos />
        </div>
      </aside>

      <aside className={`w-80 bg-gray-200 text-center py-4 h-screen fixed hidden lg:block `}>
        <h3 className="font-bold text-3xl">
          MERN<span className="font-normal">TASKS</span>{" "}
        </h3>
        <NuevoProyecto />
        <div className="my-4">
          <h3 className="font-bold text-xl">Tus proyectos</h3>
          <ListadoProyectos />
        </div>
      </aside>
    </div>
  );
}
