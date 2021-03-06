import { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";
import proyectoContext from "./proyectoContext";
import proyectoReducer from "./proyectoReducer";
import {
  FORMULARIO_PROYECTO,
  OBTENER_PROYECTOS,
  AGREGAR_PROYECTO,
  PROYECTO_ACTUAL,
  ELIMINAR_PROYECTO,
} from "./types";

const ProyectoState = (props) => {
  const proyectos = [
    { id: 1, nombre: "Tienda virtual" },
    { id: 2, nombre: "Intranet" },
    { id: 3, nombre: "Diseño de sitio web" },
  ];

  // state inicial
  const initialState = {
    proyectos: [],
    formulario: false,
    proyecto: null,
  };

  //Dispath para ejecutar un reducer
  const [state, dispatch] = useReducer(proyectoReducer, initialState);

  //mostrar el formulario
  const mostrarFormulario = () => {
    dispatch({
      type: FORMULARIO_PROYECTO,
    });
  };

  //obtener proyectos
  const obtenerProyectos = () => {
    dispatch({
      type: OBTENER_PROYECTOS,
      payload: proyectos,
    });
  };

  //agregar proyecto
  const agregarProyecto = (proyecto) => {
    proyecto.id = uuidv4();
    dispatch({
      type: AGREGAR_PROYECTO,
      payload: proyecto,
    });
  };

  //selecciona al proyecto que da click
  const proyectoActual = (proyectoId) => {
    dispatch({
      type: PROYECTO_ACTUAL,
      payload: proyectoId,
    });
  };

  //selecciona un proyecto
  const eliminarProyecto = (proyectoId) => {
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
        dispatch({
          type: ELIMINAR_PROYECTO,
          payload: proyectoId,
        });
      }
    });
  };

  return (
    <proyectoContext.Provider
      value={{
        formulario: state.formulario,
        proyectos: state.proyectos,
        proyecto: state.proyecto,
        mostrarFormulario,
        obtenerProyectos,
        agregarProyecto,
        proyectoActual,
        eliminarProyecto,
      }}
    >
      {props.children}
    </proyectoContext.Provider>
  );
};

export default ProyectoState;
