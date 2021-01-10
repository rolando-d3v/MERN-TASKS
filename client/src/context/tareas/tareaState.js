import { useReducer } from "react";
import TareaContext from "./tareaContext";
import tareaReducer from "./tareaReducer";
import { TAREAS_PROYECTO, AGREGAR_TAREA } from "./tareaTypes";

const TareaState = (props) => {
  //state inicial
  const initialState = {
    tareas: [
      { id: 1, nombre: "Eligir plataforma", estado: true, proyectoId: 1 },
      { id: 2, nombre: "Elegir colores", estado: false, proyectoId: 2 },
      { id: 3, nombre: "sitio web", estado: false, proyectoId: 3 },
      { id: 4, nombre: "Eligir plataforma", estado: true, proyectoId: 2 },
      { id: 5, nombre: "Elegir colores", estado: false, proyectoId: 3 },
      { id: 6, nombre: "sitio web", estado: false, proyectoId: 3 },
      { id: 7, nombre: "Eligir plataforma", estado: true, proyectoId: 1 },
      { id: 8, nombre: "Elegir colores", estado: false, proyectoId: 1 },
      { id: 9, nombre: "sitio web", estado: false, proyectoId: 3 },
      { id: 10, nombre: "Eligir plataforma", estado: true, proyectoId: 1 },
      { id: 11, nombre: "Elegir colores", estado: false, proyectoId: 2 },
    ],
    tareasProyecto: null,
  };

  //el reducer
  const [state, dispatch] = useReducer(tareaReducer, initialState);

  //obtener tareas de proyecto seleccionado
  const obtenerTareas = (proyectoId) => {
    dispatch({
      type: TAREAS_PROYECTO,
      payload: proyectoId,
    });
  };

  //agregar tarea al proyecto seleccionado
  const agregarTarea = (tarea) => {
    dispatch({
      type: AGREGAR_TAREA,
      payload: tarea
    });
  };

  return (
    <TareaContext.Provider
      value={{
        tareas: state.tareas,
        tareasProyecto: state.tareasProyecto,
        obtenerTareas,
        agregarTarea,
      }}
    >
      {props.children}
    </TareaContext.Provider>
  );
};

export default TareaState;
