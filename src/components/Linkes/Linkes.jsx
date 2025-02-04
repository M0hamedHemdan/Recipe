import React, { useContext, useEffect, useState } from "react";
// import style from './Linkes.module.scss'
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
import { CounterContext } from "../../Context/CounterContext";

export default function Linkes() {
  let { data } = useContext(CounterContext);

  //  function name(params) {
  //   CallAPI(params)
  //  }






  // const [lists, setlists] = useState([]);
  // // const {name} = useParams()
  // async function addList() {
  //   const res = await axios
  //     .get(`https://www.themealdb.com/api/json/v1/1/list.php?c=list`)
  //     .then((res) => setlists(res?.data?.meals))
  //     .catch((err) => console.log(err));
  // }
  // console.log(lists);

  // useEffect(() => {
  //   addList();
  // }, []);
  // // console.log(lists);
  

  return (
    <div>
      <ul>
      <li >
        <NavLink to='/'>All</NavLink>
      </li>
         { data?.data?.categories.map((lest) => (
               <li key={lest.idCategory}>
                <NavLink to={`/category/${lest.strCategory}`}>{lest.strCategory}</NavLink>
               </li>
            ))}
      </ul>
    </div>
  );
}
