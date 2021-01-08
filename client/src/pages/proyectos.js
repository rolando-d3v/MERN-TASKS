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

  console.log(sidebar);

  return (
    <div className="h-screen flex">
      <Sidebar sidebar={sidebar} />

      <div className="h-screen w-full ">
        <Header openSidebar={openSidebar} />
        <main
          className="bg-blueGray-300  h-screen"
          style={{ height: "calc(100vh - 64px)" }}
        >
          <FormTarea />
          <div>
            <ListadoTarea />
          </div>
        </main>
      </div>
    </div>
  );
}
