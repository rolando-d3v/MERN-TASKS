import { useFormik } from "formik";
import { useEffect, useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as Yup from "yup";
import "./form.scss";

export default function FormLogin() {
  const [eyePass, setEyePass] = useState(false);

  const formik = useFormik({
    //state initial de valores
    initialValues: {
      nombre: "",
      identifier: "",
      password: "",
      confirmar: "",
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
      return <span className="error_alert ">{err}</span>;
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
      if (this.value === "") {
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
    <form onSubmit={formik.handleSubmit} className="form">
      <section className="section_input">
        <span className="icon_login">
          <FaIcons.FaUserAlt />
        </span>
        <div className="control-input">
          <label htmlFor="input" className="label_form">
            tu nombre
          </label>
          <input
            className="input"
            autoComplete="off"
            type="text"
            name="nombre"
            id="nombre"
            onChange={formik.handleChange}
            value={formik.values.nombre}
          />
          {errorFormik(formik.errors.nombre, formik.touched.nombre)}
        </div>
      </section>
      <section className="section_input">
        <span className="icon_login">
          <FaIcons.FaRegEnvelope />
        </span>
        <div className="control-input">
          <label htmlFor="input" className="label_form">
            tu correo
          </label>
          <input
            className="input"
            autoComplete="off"
            type="email"
            name="identifier"
            id="email"
            onChange={formik.handleChange}
            value={formik.values.identifier}
          />
          {errorFormik(formik.errors.identifier, formik.touched.identifier)}
        </div>
      </section>
      <section className="section_input">
        <span className="icon_login">
          <FaIcons.FaUserLock />
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
      <section className="section_input">
        <span className="icon_login">
          <FaIcons.FaUserLock />
        </span>
        <div className="control-input">
          <label htmlFor="password" className="label_form">
            repite tu contraseña
          </label>
          <input
            autoComplete="off"
            type={eyePass ? "text" : "password"}
            name="confirmar"
            id="confirmar"
            className="input"
            required="on"
            onChange={formik.handleChange}
            value={formik.values.confirmar}
          />
          {formik.values.confirmar && (
            <span onClick={() => clickEyePassword()}>
              {eyePass ? (
                <FaIcons.FaEye className="bid" />
              ) : (
                <FaIcons.FaEyeSlash className="bid" />
              )}
            </span>
          )}

          {errorFormik(formik.errors.confirmar, formik.touched.confirmar)}
        </div>
      </section>
    
      <div className="wrapper_button">
        {formik.values.password && formik.values.identifier ? (
          <button type="submit" className="__login __checked">
            Registrarme
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
