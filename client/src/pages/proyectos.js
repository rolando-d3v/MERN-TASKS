import React from "react";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
import FormTarea from "../components/tareas/FormTarea";
import ListadoTarea from "../components/tareas/ListadoTarea";

export default function Proyectos() {
  return (
    <div className="h-screen flex">
      <Sidebar />

      <div className="h-screen w-full ">
        <Header />
        <main>
          <FormTarea />
          <div>
            <ListadoTarea />
          </div>
        </main>
      </div>
    </div>
  );
}
