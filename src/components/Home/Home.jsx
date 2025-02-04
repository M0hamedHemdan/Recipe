import React from 'react'
import style from './Home.module.scss'
// import { Link, NavLink } from 'react-router-dom'
import Categry from '../Categry/Categry'
import Linkes from '../Linkes/Linkes.jsx'
export default function Home() {
  return (
    <header>
      <div className={style.container}>
      <h1 className={style.bg}>Learn, Cook, Eat Your Food</h1>
      <Linkes/>
      <Categry/>
      </div>
      
    </header>
  )
}
