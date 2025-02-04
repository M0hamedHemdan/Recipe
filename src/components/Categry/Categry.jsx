import { useContext, useEffect, useState } from 'react'
// import logo from '../../assets/logo-BfNap0Pe.png'
import style from './Categry.module.scss'
import { CounterContext } from '../../Context/CounterContext'
import Tetals from '../Tetals/Tetals';


// import axios from 'axios'

export default function Categry() {
    let { data } = useContext(CounterContext);
    // const [category , setcategory] = useState()

    
    console.log(data?.data.categories);
    
    
    

    function name() {
      alert('hello')
    }
  
    // const [category , setcategory] = useState([])
  // async function allGatgory() {
  //   // const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
  //   // .then((res)=>(setcategory(res?.data?.categories)))
  //   // .catch((err) => console.log(err))
  // }
  // console.log(category);
  
  // useEffect(()=>{
  //   allGatgory()
  // } , [])
  return (
   
    <div className={style.categry} >
      
      <div className={style.bg}>
      {data?.data.categories.map((category) => (<>
        <div key={category.idCategory} className={style.content}>
          <div className={style.images}>
            <img src={category.strCategoryThumb} alt="" />
          </div>
          <div className={style.text}>
            <h3>{category.strCategory}</h3>
            <h5>Japanese</h5>
            <button  className={style.button}>View Recipe</button>
          </div>
        </div>
        
      </>)) }
        
      </div>
    </div>



    
  )
  
}
