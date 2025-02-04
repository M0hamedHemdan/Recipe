import React from 'react'
import style  from '../Navbar/Navbar.module.scss'
import logo from '../../assets/logo-BfNap0Pe.png'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <na className={style.bg}>
        <div className={style.container}>
          <div className={style.imges}>
            <img src={logo} className='img' alt="" />
          </div>
          <ul className={style.ul}>
            <li><Link className={style.a} to="#">Meat</Link></li>
            <li><Link to="#">Ingredients</Link></li>
            <li><Link to="#">Area</Link></li>
          </ul>
        </div>
    </na>
  )
}
