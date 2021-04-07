import React, { useState, useEffect } from "react";
import "./registro.scss";

export default function Registro() {
  const [data, setData] = useState({ username: "", password: "", keep: false });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]:
        e.target.name === "keep" ? e.target.checked : e.target.value,
    });
  };

  return (
    <div className="form_registro">
      <form className="right-side">
        <div className="header">
          <div className="first">
            <img src="/logo.png" className="__logo" alt="" />
          </div>
          <p className="sub_title">Ingresar</p>
        </div>
        <div className="body">
          <div className="wrapper_inputs">
            <div className="control-input">
              <input
                onChange={(e) => handleChange(e)}
                autoFocus={true}
                value={data.username}
                autoComplete="off"
                type="text"
                name="username"
                id="username-for"
                className="__input"
                required="on"
              />
              <label htmlFor="username-for" className="__label">
                nombre de usuario
              </label>
            </div>
            <div className="control-input">
              <input
                onChange={(e) => handleChange(e)}
                value={data.password}
                autoComplete="off"
                type={"password"}
                name="password"
                id="password-for"
                className="__input"
                required="on"
              />
              <label htmlFor="password-for" className="__label">
                contraseña
              </label>
            </div>

            <label className="container-check">
              <input
                type="checkbox"
                onChange={(e) => handleChange(e)}
                name="keep"
              />
              <span className="label">Permanecer conectado</span>
              <span className="checkmark"></span>
            </label>
          </div>
          <div className="button_registro">
            {data && data.username && data.password ? (
              <button className="__login __checked">Crear usuario</button>
            ) : (
              <button type="submit" className="__login">
                Crear usuario
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
