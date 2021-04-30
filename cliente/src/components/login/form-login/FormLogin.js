import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { useState } from "react";
import "./form.login.scss";

export default function FormLogin() {
  const [data, setData] = useState({
    username: "",
    password: "",
    keep: false,
  });


  const [see, setSee] = useState(false);

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

  return (
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
          <button className="__login __checked">
            Login x
            <i className="lnr lnr-arrow-right"></i>
          </button>
        ) : (
          <button className="__login">
            Login null
            <i className="lnr lnr-arrow-right"></i>
          </button>
        )}
      </div>
    </div>
  );
}
