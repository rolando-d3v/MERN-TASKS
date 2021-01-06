import React from "react";

export default function Tarea({ tarea }) {
  return (
    <li className="bg-white flex items-center my-2 py-2 justify-between px-6">
      <p className="font-semibold w-1/2"> {tarea.nombre} </p>
      <div>
        {tarea.estado ? (
          <button className="bg-green-200 px-4 py-1 rounded text-sm" type="button">
            Completo
          </button>
        ) : (
          <button className="bg-red-200 px-4 py-1 rounded text-sm" type="button">
            Incompleto
          </button>
        )}
      </div>
      <div className='space-x-4' >
        <button className="bg-blue-300 px-2 py-0.5 rounded" type="button">
          Editar
        </button>
        <button className="bg-red-300 px-2 py-0.5 rounded border-2 border-red-600" type="button">
          Eliminar
        </button>
      </div>
    </li>
  );
}
