import React from "react";
import * as FaIcons from "react-icons/fa";

export default function Tarea({ tarea, eliminarTarea, cambiarEstadoTarea }) {
  const cambioEstado = (tarea) => {
    if (tarea.estado) {
      tarea.estado = false;
    } else {
      tarea.estado = true;
    }
    cambiarEstadoTarea(tarea);
  };

  return (
    <li className="bg-white flex items-center my-2 py-2 justify-between px-6  space-x-2 rounded">
      <p className="font-semibold w-1/2 text-sm lg:text-base ">
        {tarea.nombre}
      </p>
      <div>
        {tarea.estado ? (
          <button
            className="bg-green-200 flex items-center px-2 py-1 rounded text-xs lg:text-base"
            type="button"
            onClick={() => cambioEstado(tarea)}
          >
            <span className="mr-2">Completo</span>
            <FaIcons.FaCheckCircle className="text-green-600" />
          </button>
        ) : (
          <button
            className="bg-red-200 flex items-center px-2 py-1 rounded text-xs lg:text-base"
            type="button"
            onClick={() => cambioEstado(tarea)}
          >
            <span className="mr-2">Incompleto</span>
            <FaIcons.FaRegCheckCircle />
          </button>
        )}
      </div>
      <div className="flex justify-around w-1/4 text-xs lg:text-base">
        <button
          className="bg-azul-800 text-white px-4 py-0.5 rounded mx-auto"
          type="button"
        >
          Editar
        </button>
        <button
          className="bg-red-600 text-white px-2 py-0.5 rounded mx-auto"
          type="button"
          onClick={() => eliminarTarea(tarea.id)}
        >
          Eliminar
        </button>
      </div>
    </li>
  );
}
