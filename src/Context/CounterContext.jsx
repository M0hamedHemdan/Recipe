import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { createContext, useState } from "react";

export let CounterContext = createContext()

export default function CounterContextProvider(props){
    // const [category,setcategory] = useState (AllAPI)
    

    // async function LisstAPI(params) {
    //     return await axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php?c=${params}`)
    // }
    async function CallAPI(params) {
        return await axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php?c=${params}`)
    }

    let {data,isError,error,isLoading,isFetched} = useQuery({
        queryKey:['product'],
        queryFn:CallAPI
    })
    // let {data:deta} = useQuery({
    //     queryKey:['product'],
    //     queryFn:LisstAPI(name)
    // })
    return <CounterContext.Provider value={{CallAPI, data,isError,error,isLoading,isFetched}}>
            {props.children}
    </CounterContext.Provider>
        
    
}