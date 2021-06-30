import React, { useState } from "react";
import "./nuevoProyecto.scss";

export default function NuevoProyecto() {
  const [proyecto, setProyecto] = useState({
      nombre: ''
  });

  //get the state
  const onChangeData = (e) => {
    setProyecto({
      ...proyecto,
      [e.target.name]: e.target.value,
    });
  };


    //get the state
    const onSubmitProyecto = (e) => {
       e.preventDefault()
       
      };

  return (
    <div className="nuevo-proyecto">
      <button type="button" className="btn_proyecto">
        Nuevo proyecto
      </button>

      <form className="form-proyecto" onSubmit={onSubmitProyecto}  >
        <input
          type="text"
          placeholder="Nombre del proyecto"
          name="nombre"
          className="form-proyecto__input"
          value={proyecto.nombre}
          onChange={onChangeData}
        />

        <button type="submit" className="form-proyecto__btn-submit">
          Agregar proyecto
        </button>
      </form>
    </div>
  );
}
