import React, { useState, useEffect } from "react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import "./login.scss";

const Login = () => {
  const [data, setData] = useState({ username: "", password: "", keep: false });
  const [see, setSee] = useState(false);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    if (load) {
      setTimeout(() => {
        setLoad(false);
      }, 2000);
    }
  }, [load]);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]:
        e.target.name === "keep" ? e.target.checked : e.target.value,
    });
  };

  const seePass = () => {
    setSee(!see);
  };

  const Load = () => {
    return <div class="loader"></div>;
  };

  return (
    <div className="wrapper-screen">
      <div className="right-side">
        {load ? (
          <Load />
        ) : (
          <>
            <div className="header">
              <div className="first">
                <div>
                  <img src="/logo.png" className="__logo" alt="" />
                </div>
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
                    type={!see ? "password" : "text"}
                    name="password"
                    id="password-for"
                    className="__input"
                    required="on"
                  />
                  <label htmlFor="password-for" className="__label">
                    contraseña
                  </label>
                  {see ? (
                    <IoIosEye onClick={seePass} className="see-pass" />
                  ) : (
                    <IoIosEyeOff onClick={seePass} className="see-pass" />
                  )}
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
              <div className="wrapper_button">
                {data && data.username && data.password ? (
                  <button
                    className="__login __checked"
                    onClick={() => setLoad(true)}
                  >
                    <i className="lnr lnr-arrow-right"></i>
                  </button>
                ) : (
                  <button className="__login">
                    <i className="lnr lnr-arrow-right"></i>
                  </button>
                )}
              </div>
            </div>
            <div className="footer">
              <div className="ex9">
                <a href="#!" className="__text">
                  ¿no puedes iniciar sesión?
                </a>
                <a href="#!" className="__text">
                  crear una cuenta
                </a>
              </div>
              <div className="ex3">
                <a href="#!" className="__text version">
                  V28.0.1
                </a>
              </div>
            </div>
          </>
        )}
      </div>
      <div
        className="left-side"
        style={{ backgroundImage: "url(/back.jpg)" }}
      ></div>
    </div>
  );
};

export default Login;
