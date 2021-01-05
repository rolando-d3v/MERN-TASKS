import React from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function NuevaCuenta() {
  const formik = useFormik({
    initialValues: {
      nombre: "",
      email: "",
      password: "",
      confirmar: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("email es obligatorio")
        .email("no es un email valido"),
      password: Yup.string()
        .required("password es obligatorio")
        .min(6, "minimo 6 caracteres"),
      confirmar: Yup.string()
        .required("password es obligatorio")
        .min(6, "minimo 6 caracteres"),
    }),
    onSubmit: (formData) => {
      console.log(formData);

      //los dos resetean el formulario
      formik.handleReset();
      // formik.resetForm()
    },
  });

  // MOSTRAR UN ERROR PERZONALIZADO
  const errorFormik = (err, touch) => {
    if (err && touch) {
      return (
        <div className="text-red-600 absolute right-0 mr-10  md:mr-14 font-semibold ">
          {err}
        </div>
      );
    }
  };

  return (
    <div className="bg-azul-800 h-screen flex items-center">
      <div className=" w-11/12 md:w-3/5  xl:w-1/3  mx-auto text-black p-4   border-2 border-gray-400 rounded-xl bg-white ">
        <form onSubmit={formik.handleSubmit}>
          <h2 className="my-4 text-3xl font-semibold  text-center">
            Crear nueva cuenta
          </h2>

          <section className="relative flex items-center my-4 ">
            <input
              className="bg-gray-200 px-4 py-2 w-full pr-16 rounded-xl focus:outline-none hover:bg-green-200 leading-none"
              placeholder="Nombre"
              type="text"
              name="nombre"
              onChange={formik.handleChange}
              value={formik.values.nombre}
            />
            {errorFormik(formik.errors.nombre, formik.touched.nombre)}
            <FaIcons.FaUser className="h-5 w-5 fill-current  absolute  right-0 mx-4" />
          </section>

          <section className="relative flex items-center my-4 ">
            <input
              className="bg-gray-200 px-4 py-2 w-full pr-16 rounded-xl focus:outline-none hover:bg-green-200 leading-none"
              placeholder="Email"
              type="email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {errorFormik(formik.errors.email, formik.touched.email)}
            <MdEmail className="h-5 w-5 fill-current  absolute  right-0 mx-4" />
          </section>

          <section className="relative flex items-center  my-4">
            <input
              className="bg-gray-200 px-4 py-2 w-full pr-16 rounded-xl focus:outline-none hover:bg-green-200 leading-none"
              placeholder="Password"
              type="password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {errorFormik(formik.errors.password, formik.touched.password)}
            <FaIcons.FaUserLock className="h-5 w-5 fill-current  absolute  right-0 mx-4" />
          </section>

          <section className="relative flex items-center  my-4">
            <input
              className="bg-gray-200 px-4 py-2 w-full pr-16 rounded-xl focus:outline-none hover:bg-green-200 leading-none"
              placeholder="Confirmar password"
              type="password"
              name="confirmar"
              onChange={formik.handleChange}
              value={formik.values.confirmar}
            />
            {errorFormik(formik.errors.confirmar, formik.touched.confirmar)}
            <FaIcons.FaUserLock className="h-5 w-5 fill-current  absolute  right-0 mx-4" />
          </section>

          <div className="flex justify-center ">
            <button
              className=" py-1 px-4 my-4 w-2/5 bg-azul-800 rounded-lg font-semibold text-white focus:bg-indigo-600 hover:bg-indigo-500 "
              type="submit"
            >
              {/* {loading ? (
                <FaRedoAlt className="animate-spin text-gray-700 mx-auto" />
              ) : (
                "Ingresar"
              )} */}
              Ingresar
            </button>
          </div>
        </form>
        <Link to="/" className="font-semibold text-gray-500 ml-5 text-sm">
          Iniciar sesion como usuario
        </Link>
      </div>
    </div>
  );
}
