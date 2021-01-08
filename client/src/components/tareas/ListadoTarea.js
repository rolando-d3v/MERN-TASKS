import React, { useContext } from "react";
import proyectoContext from "../../context/proyecto/proyectoContext";
import Swal from "sweetalert2";
import Tarea from "./Tarea";

export default function ListadoTarea() {
  const { proyecto, eliminarProyecto } = useContext(proyectoContext);

  if (!proyecto)
    return (
      <h2 className="text-center  font-semibold ">Selecciona un Proyecto</h2>
    );

  //destructurando el array proyecto
  const [proActual] = proyecto;

  const deletePro = (id) => {
    Swal.fire({
      title: "Esta seguro?",
      text: "Que desea eliminar este proyecto",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Eliminar!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        eliminarProyecto(id);
      }
    });
  };

  const tareasProyecto = [
    { id: 1, nombre: "Eligir plataforma", estado: true },
    { id: 2, nombre: "Elegir colores", estado: false },
    { id: 3, nombre: "sitio web", estado: false },
    { id: 4, nombre: "Diseño", estado: true },
  ];

  return (
    <div className="py-10 px-4 ">
      <h3 className="font-bold text-2xl text-center my-8">
        Proyecto: {proActual.nombre}{" "}
      </h3>
      <ul className="w-full mx-auto">
        {tareasProyecto.length === 0 ? (
          <li>no hay tareas</li>
        ) : (
          tareasProyecto.map((tarea) => <Tarea key={tarea.id} tarea={tarea} />)
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
