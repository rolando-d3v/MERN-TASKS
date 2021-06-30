import { useFormik } from "formik";
import { useEffect, useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as Yup from "yup";
import "./form.login.scss";

export default function FormLogin() {
  const [eyePass, setEyePass] = useState(false);

  const formik = useFormik({
    //state initial de valores
    initialValues: {
      identifier: "",
      password: "",
      cheked: false,
    },
    // validacion del state con yup
    validationSchema: Yup.object({
      identifier: Yup.string()
        .required("email es obligatorio")
        .email("email no valido"),
      password: Yup.string()
        .required("password es obligatorio")
        .min(6, "minimo 6 caracteres"),
    }),
    //onsubmit  del formulario
    onSubmit: (formData) => {
      console.log(formData);
      formik.handleReset();
    },
  });

  // MOSTRAR UN ERROR PERZONALIZADO
  const errorFormik = (err, touch) => {
    if (err && touch) {
      return (
        <span className="error_alert ">
          {err}
        </span>
      );
    }
  };

  //efecto de input label hacia arriba
  useEffect(() => {
    const inputs = document.querySelectorAll(".input");

    function addcl() {
      let parent = this.parentNode.parentNode;
      parent.classList.add("focus");
    }

    function remcl() {
      let parent = this.parentNode.parentNode;
      if (this.value == "") {
        parent.classList.remove("focus");
      }
    }
    inputs.forEach((input) => {
      input.addEventListener("focus", addcl);
      input.addEventListener("blur", remcl);
    });

  }, []);

  //mostara el eye con el password
  const clickEyePassword = () => {
    setEyePass(!eyePass);
  };

  return (
    <form onSubmit={formik.handleSubmit} className="form_login">
      <section className="section_input">
        <span className="icon_login">
          <FaIcons.FaRegEnvelope className="" />
        </span>
        <div className="div_input">
          <label htmlFor="email-for" className="label_form">
            tu correo
          </label>
          <input
            className="input"
            // autoFocus={true}
            autoComplete="off"
            type="email"
            name="identifier"
            id="email-for"
            onChange={formik.handleChange}
            value={formik.values.identifier}
          />
          {errorFormik(formik.errors.identifier, formik.touched.identifier)}
        </div>
      </section>
      <section className="section_input">
        <span className="icon_login">
          <FaIcons.FaUserLock className="" />
        </span>
        <div className="control-input">
          <label htmlFor="password" className="label_form">
            contraseña
          </label>
          <input
            autoComplete="off"
            type={eyePass ? "text" : "password"}
            name="password"
            id="password"
            className="input"
            required="on"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.values.password && (
            <span onClick={() => clickEyePassword()}>
              {eyePass ? (
                <FaIcons.FaEye className="bid" />
              ) : (
                <FaIcons.FaEyeSlash className="bid" />
              )}
            </span>
          )}

          {errorFormik(formik.errors.password, formik.touched.password)}
        </div>
      </section>
      <label className="container-check">
        <input
          type="checkbox"
          name="cheked"
          checked={formik.values.cheked}
          value={formik.values.cheked}
          onChange={formik.handleChange}
        />
        <span className="label">Permanecer conectado</span>
        <span className="checkmark"></span>
      </label>

      <div className="wrapper_button">
        {formik.values.password && formik.values.identifier ? (
          <button type="submit" className="__login __checked">
            Login true
          </button>
        ) : (
          <button className="__login" disabled>
            Login false
          </button>
        )}
      </div>
    </form>
  );
}
