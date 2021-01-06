import React from 'react'

export default function Header() {
    return (
        <header className='bg-blueGray-900 text-white py-4 px-8  flex items-center justify-between  w-full' >
            <p className='font-semibold text-2xl' > Hola <span>Rolando Abraham</span> </p>
            <nav className='' >
                <a href="#!">Cerrar sesion</a>
            </nav>
        </header>
    )
}
