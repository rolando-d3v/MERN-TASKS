import React from "react";

export default function Editar() {
  return (
    <div className="bg-gray-200  mx-auto">
      <section className="mx-auto px-4">
        <h3 className="font-semibold text-2xl"> Editar tarea</h3>
        <div>
          <form>
            <section>
              <label className="bg-gray-100 text-sm leading-tight ">
                nombre
              </label>
              <input
                className="leading-tight px-4 py-1 w-full bg-gray-300 "
                type="text"
                name='nombre'
              />
            </section>
            <section>
              <label className="bg-gray-100 text-sm leading-tight ">
                description
              </label>
              <input
                className="leading-tight px-4 py-1 w-full bg-gray-300 "
                type="text"
                name='description'
              />
            </section>
            <button
              className="bg-blue-600 px-4 py-1 rounded-md "
              type="submit"
            >Actualizar</button>
          </form>
        </div>
      </section>
    </div>
  );
}
