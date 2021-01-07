import {
  FORMULARIO_PROYECTO,
  OBTENER_PROYECTOS,
  AGREGAR_PROYECTO,
  PROYECTO_ACTUAL,
} from "./types";

const proyectoReducer = (state, action) => {
  switch (action.type) {
    case FORMULARIO_PROYECTO:
      return {
        ...state,
        formulario: true,
      };

    case OBTENER_PROYECTOS:
      return {
        ...state,
        proyectos: action.payload,
      };

    case AGREGAR_PROYECTO:
      return {
        ...state,
        proyectos: [...state.proyectos, action.payload],
        formulario: false,
      };

      case PROYECTO_ACTUAL:
        return {
          ...state,
          proyecto: state.proyectos.filter(pro =>  pro.id ===  action.payload)
        }

    default:
      return state;
  }
};

export default proyectoReducer;
