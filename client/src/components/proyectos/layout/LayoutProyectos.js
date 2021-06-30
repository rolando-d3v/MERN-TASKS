import React from 'react'
import Aside from '../aside/Aside'
import Main from '../main/Main'
import Header from '../header/Header'
import './layout.scss'

export default function LayoutProyectos() {
    return (
        <div className='layout-proyectos' >
            <Aside/>
            <Header/>
            <Main/>
        </div>
    )
}
