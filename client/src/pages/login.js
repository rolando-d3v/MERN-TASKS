import React from "react";
import { FaUserLock, FaRedoAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Login() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validateYupSchema: Yup.object({
      email: Yup.string(),
      password: Yup.string()
    }),
    onSubmit: (formData) => {
        console.log(formData);
    },
  });

  return (
    <div className='bg-azul-800 h-screen flex items-center'  >
      <div className=" w-11/12  lg:w-1/3  mx-auto text-black ">
        <form
          className="p-4   border-2 border-gray-400 rounded-xl bg-white "
          onSubmit={formik.handleSubmit}
        >
          <h2 className="my-4 text-3xl font-semibold  text-center"> Inicia Sesion </h2>

          <section className="relative flex items-center my-4 ">
            <input
              className="bg-gray-200 px-4 py-2 w-full pr-16 rounded-xl focus:outline-none hover:bg-green-200 leading-none"
              placeholder="Email"
              type="email"
              name="identifier"
              onChange={formik.handleChange}
            />
            {formik.errors.identifier && formik.touched.identifier && (
              <div className="text-red-600 absolute right-0 mr-10  md:mr-24 font-semibold ">
                {formik.errors.identifier}
              </div>
            )}
            <MdEmail className="h-5 w-5 fill-current  absolute  right-0 mx-4" />
          </section>

          <section className="relative flex items-center  my-4">
            <input
              className="bg-gray-200 px-4 py-2 w-full pr-16 rounded-xl focus:outline-none hover:bg-green-200 leading-none"
              placeholder="Password"
              type="password"
              name="password"
              onChange={formik.handleChange}
            />
            {formik.errors.password && formik.touched.password && (
              <div className="text-red-600 absolute right-0 mr-10  md:mr-24 font-semibold">
                {formik.errors.password}
              </div>
            )}
            <FaUserLock className="h-5 w-5 fill-current  absolute  right-0 mx-4" />
          </section>

          <div className="flex justify-center">
            <button
              className=" py-1 px-4 w-2/5 bg-azul-800 rounded  font-semibold text-white focus:bg-indigo-600 hover:bg-indigo-400 "
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
          <div className="flex justify-end mt-4">
            <button
              className="bg-transparent text-gray-400 hover:text-blue-400 focus:outline-none "
              type="button"
            //   onClick={resetPassword}
            >
              ¿ Has olvidado la contraseña ?
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
