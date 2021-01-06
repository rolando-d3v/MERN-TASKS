import { useReducer } from "react";
import proyectoContext from "./proyectoContext";
import proyectoReducer from "./proyectoReducer";
import { FORMULARIO_PROYECTO } from "./types";

const ProyectoState = (props) => {
  const initialState = {
    proyectos: [
      { id: 1, nombre: "Tienda virtual" },
      { id: 2, nombre: "Intranet" },
      { id: 3, nombre: "Diseño de sitio web" },
    ],
    formulario: false,
  };

  //Dispath para ejecutar un reducer
  const [state, dispatch] = useReducer(proyectoReducer, initialState);

  //serie de funciones para ejecutar el CRUD
  const mostrarFormulario = () => {
    dispatch({
      type: FORMULARIO_PROYECTO,
    });
  };

  return (
    <proyectoContext.Provider
      value={{
        formulario: state.formulario,
        proyectos: state.proyectos,
        mostrarFormulario,
      }}
    >
      {props.children}
    </proyectoContext.Provider>
  );
};

export default ProyectoState;
