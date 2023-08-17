import React from 'react'
import {FaSearch} from "react-icons/fa"

const Navigation = () => {
  return (
    <header className='header'>
        <nav className='navbar'>
            <a href="#">Inicio</a>
            <a href="#">Sobre Nosotros</a>
            <a href="#">Contacto</a>
            <a href="#">Login</a>
            <a href="#">Registro</a>
        </nav>
        <form action="" className="search-bar">
            <input type="text" placeholder='Buscar...' />
            <button><FaSearch /></button>
        </form>
    </header>
  )
}

export default Navigation