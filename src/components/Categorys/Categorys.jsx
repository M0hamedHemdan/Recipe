import { useEffect, useState } from "react";
import style from "../Categry/Categry.module.scss";
import style2 from "../Home/Home.module.scss";

import { useParams } from "react-router-dom";
import axios from "axios";
import Linkes from "../Linkes/Linkes";
import { useQuery } from "@tanstack/react-query";

export default function Categorys() {
  // const [hambozo, sethambozo] = useState([]);
  let { name } = useParams();
  const { data, isError, error, isLoading, isFetched } = useQuery({
    queryKey: ["Categorys", name],
    queryFn: () => getApi(name),
    enabled: !!name,
  });
  console.log(data?.data.meals);

  async function getApi(name) {
    return await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`
    );
    
  }
  // .then((res) => {
    //   console.log(res);
    //   sethambozo(res.data.meals);
    // });
  // useEffect(() => {
  //   getApi(name);
  // }, [hambozo]);
  // console.log(name);
  // console.log(hambozo);

  return (
    <>
      <div className={style2.container}>
        <h1 className={style2.bg}>Learn, Cook, Eat Your Food</h1>
        <Linkes />
        <div className={style.categry}>
          <div className={style.bg}>
            {data?.data.meals.length > 0
              ? data?.data.meals.map((item) => (
                  <div key={item.idMeal} className={style.content}>
                    <div className={style.images}>
                      <img src={item.strMealThumb} alt="" />
                    </div>
                    <div className={style.text}>
                      <h3>{item.strMeal}</h3>
                      <h5>Japanese</h5>
                      <button onClick={() => name()} className={style.button}>
                        View Recipe
                      </button>
                    </div>
                  </div>
                ))
              : ""}
            {/* {hambozo?.map(()=>{<h1>k</h1>})} */}
          </div>
        </div>
      </div>
    </>
  );
}
