import React from 'react'
import Styles from './Header.module.css'
import {NavLink} from 'react-router-dom';

const Header = () => {
  return (
    <nav className={Styles.header}>
     <ul>
      <li>
         <NavLink className={Styles.link}  to="/" end>Produtos</NavLink>
      </li>
      <li>
         <NavLink className={Styles.link} to="contato">Contato</NavLink>
      </li>
     </ul>
    </nav>
  )
}

export default Header