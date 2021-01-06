import React from "react";
import Tarea from "./Tarea";

export default function ListadoTarea() {
  const tareasProyecto = [
    { id: 1, nombre: "Eligir plataforma", estado: true },
    { id: 2, nombre: "Elegir colores", estado: false },
    { id: 3, nombre: "sitio web", estado: false },
    { id: 4, nombre: "Diseño", estado: true },
  ];

  return (
    <div className='p-10  bg-blueGray-300' >
      <h3 className='font-bold text-2xl text-center my-8'  >Proyecto: Tienda virtual</h3>
      <ul className='w-9/12 mx-auto' >
        {tareasProyecto.length === 0 ? (
          <li>no hay tareas</li>
        ) : (
          tareasProyecto.map((tarea) => <Tarea key={tarea.id} tarea={tarea} />)
        )}
      </ul>
      <button className="bg-red-100 px-4 py-1 font-semibold mt-4 rounded border-2 border-red-600 hover:bg-red-600 hover:text-white" type="button">
          Eliminar Proyecto
        </button>
    </div>
  );
}
