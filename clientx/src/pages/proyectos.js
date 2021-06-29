import React, { useState } from "react";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
import FormTarea from "../components/tareas/FormTarea";
import ListadoTarea from "../components/tareas/ListadoTarea";

export default function Proyectos() {
  const [sidebar, setSidebar] = useState(false);

  const openSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <div className="h-screen lg:flex">
      <Sidebar sidebar={sidebar} />

      <div className="h-screen w-full lg:ml-80 ">
        <Header openSidebar={openSidebar} />
        <main className="overflow-y-auto">
          <FormTarea />
          <div >
            <ListadoTarea />
          </div>
        </main>
      </div>
    </div>
  );
}
