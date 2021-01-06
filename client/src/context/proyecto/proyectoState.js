import { useReducer } from "react";
import proyectoContext from "./proyectoContext";
import proyectoReducer from "./proyectoReducer";

const ProyectoState = (props) => {
  const initialState = {
    formulario: false,
  };

  //Dispath para ejecutar un reducer
  const [state, dispatch] = useReducer(proyectoReducer, initialState);

  //serie de funciones para ejecutar el CRUD

  return (
    <proyectoContext.Provider value={{ formulario: state.formulario }}>
      {props.children}
    </proyectoContext.Provider>
  );
};

export default ProyectoState;
