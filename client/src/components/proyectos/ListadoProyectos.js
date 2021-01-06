import React from 'react'
import Proyecto from './Proyecto'

export default function ListadoProyectos() {


    const proyectos = [
        {id: 1, nombre: 'Tienda virtual'},
        {id: 2, nombre: 'Intranet'},
        {id: 3, nombre: 'Diseño de sitio web'},
    ]


    return (
        <ul>
            {proyectos.map(pro => (
                <Proyecto key={pro.id}  pro={pro}/>
            ))}
        </ul>
    )
}
