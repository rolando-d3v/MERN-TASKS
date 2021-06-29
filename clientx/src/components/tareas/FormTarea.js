import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import proyectoContext from "../../context/proyecto/proyectoContext";
import TareaContext from "../../context/tareas/tareaContext";
import { viewAlertRol } from "../../tools/viewAlert";

export default function FormTarea() {
  const { proyecto } = useContext(proyectoContext);
  const { agregarTarea, obtenerTareas } = useContext(TareaContext);


  const [tareax, setTareax] = useState({
    nombre: "",
  });
  const { nombre } = tareax;


  // si no hay proyecto seleccionado
  if (!proyecto) return null;

  //ARRAY  destructuring para extraer el proyecto actual
  const [proyectoActual] = proyecto;

  //obtiene el valor del input
  const obtenerValor = (e) => {
    setTareax({
      ...tareax,
      [e.target.name]: e.target.value,
    });
  };

  // crea una tarea
  const crearTarea = (e) => {
    e.preventDefault();
    if (!nombre) {
      viewAlertRol("el campo esta vacio", "warning");
    } else {
      tareax.proyectoId = proyectoActual.id;
      tareax.estado = false;
      agregarTarea(tareax); //agrega la tarea al state
      obtenerTareas(proyectoActual.id) // obtiene las nuevas tareas con el nuevo state
      setTareax({ nombre: "" });
    }
  };

  return (
    <div className="p-4 bg-blueGray-800">
      <form className="p-2 w-4/5 mx-auto" onSubmit={crearTarea}>
        <section className="my-2">
          <input
            className="focus:outline-none px-2 py-1.5 w-full leading-tight bg-white rounded-md"
            type="text"
            placeholder="Nombre de la tarea"
            name="nombre"
            value={nombre}
            onChange={obtenerValor}
          />
        </section>
        <button
          className="py-1.5 px-4  w-full bg-azul-800 text-white rounded-lg hover:bg-blue-800  "
          type="submit"
        >
          Agregar Tarea
        </button>
      </form>
    </div>
  );
}
