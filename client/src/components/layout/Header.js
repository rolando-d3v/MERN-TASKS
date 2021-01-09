import React from 'react'
import * as FaIcons from 'react-icons/fa'

export default function Header({openSidebar}) {


    return (
        <header className='bg-blueGray-900 text-white py-4 px-8  flex items-center justify-between sticky top-0' >
            <FaIcons.FaBars className='absolute left-0 ml-2 lg:hidden'   onClick={()=> openSidebar()} />
            <p className='font-semibold  text-lg lg:text-2xl' > Hola <span>Rolando Abraham</span> </p>
            <nav className='' >
                <a href="#!">Cerrar sesion</a>
            </nav>
        </header>
    )
}
