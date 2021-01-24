import React from "react";

export default function Tarea({ tarea }) {
  
  return (
    <li className="bg-white flex items-center my-2 py-2 justify-between px-6  space-x-2 rounded">
      <p className="font-semibold w-1/2 text-sm lg:text-base "> {tarea.nombre} </p>
      <div>
        {tarea.estado ? (
          <button className="bg-green-200 px-2 py-1 rounded text-xs lg:text-base" type="button">
            Completo
          </button>
        ) : (
          <button className="bg-red-200 px-2 py-1 rounded text-xs lg:text-base" type="button">
            Incompleto
          </button>
        )}
      </div>
      <div className='flex-col space-y-2 justify-center w-1/4 text-xs lg:text-base' >
        <button className="bg-blue-300 px-2 py-0.5 rounded mx-auto w-full" type="button">
          Editar
        </button>
        <button className="bg-red-300 px-2 py-0.5 rounded border-2 border-red-600  w-full mx-auto" type="button">
          Eliminar
        </button>
      </div>
    </li>
  );
}
