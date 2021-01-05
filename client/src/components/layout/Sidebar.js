import React from 'react'
import NuevoProyecto from '../proyectos/NuevoProyecto'
import ListadoProyectos from '../proyectos/ListadoProyectos'

export default function Sidebar() {
    return (
        <aside className='w-72 bg-gray-200 text-center py-4 h-screen'  >
            <h3 className='font-bold text-3xl' >MERN<span className='font-normal' >TASKS</span> </h3>
            <NuevoProyecto/>
            <div>
                <h3 className='font-bold text-xl' >Tus proyectos</h3>
                <ListadoProyectos/>
            </div>
        </aside>
    )
}
