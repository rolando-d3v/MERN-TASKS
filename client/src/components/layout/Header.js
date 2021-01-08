import React from 'react'
import * as FaIcons from 'react-icons/fa'

export default function Header({openSidebar}) {


    return (
        <header className='bg-blueGray-900 text-white py-4 px-8  flex items-center justify-between  w-full' >
            <FaIcons.FaBars onClick={()=> openSidebar()} />
            <p className='font-semibold text-2xl' > Hola <span>Rolando Abraham</span> </p>
            <nav className='' >
                <a href="#!">Cerrar sesion</a>
            </nav>
        </header>
    )
}
