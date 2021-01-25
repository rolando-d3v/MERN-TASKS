import React, { useContext } from "react";
import proyectoContext from "../../context/proyecto/proyectoContext";
import TareaContext from "../../context/tareas/tareaContext";
import Tarea from "./Tarea";
import Swal from "sweetalert2";

export default function ListadoTarea() {
  const { proyecto, eliminarProyecto } = useContext(proyectoContext);
  const { tareasProyecto, removeTarea, obtenerTareas, cambiarEstadoTarea } = useContext(
    TareaContext
  );

  if (!proyecto)
    return (
      <div className="py-10">
        <h2 className="text-center  font-semibold ">Selecciona un Proyecto</h2>
      </div>
    );

  //destructurando el array proyecto del state
  const [proActual] = proyecto;

  //eliminar el proyecto del state
  const deletePro = (id) => {
    eliminarProyecto(id);
  };

  //elimina una tarea del proyecto
  const eliminarTarea = (id) => {
    Swal.fire({
      title: "Esta seguro?",
      text: "Que desea eliminar esta tarea",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Eliminar!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "se ha eliminado la tarea.", "success");
        removeTarea(id);
        obtenerTareas(proActual.id);
      }
    });
  };

  return (
    <div className="py-10 px-4 bg-blueGray-300 m-4 rounded-lg ">
      <h3 className="font-bold text-2xl text-center my-8">
        Proyecto: {proActual.nombre}
      </h3>
      <ul className="w-full mx-auto">
        {tareasProyecto.length === 0 ? (
          <div className="w-full">
            <h3 className="text-center">No tiene tareas en proyecto</h3>
          </div>
        ) : (
          tareasProyecto.map((tarea) => (
            <Tarea key={tarea.id} tarea={tarea} eliminarTarea={eliminarTarea} cambiarEstadoTarea={cambiarEstadoTarea} />
          ))
        )}
      </ul>
      <button
        className="bg-red-100 px-4 py-1 font-semibold mt-4 rounded border-2 border-red-600 hover:bg-red-600 hover:text-white"
        type="button"
        onClick={() => deletePro(proActual.id)}
      >
        Eliminar Proyecto
      </button>
    </div>
  );
}
