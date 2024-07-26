'use client'

import { useMemo, useState } from "react"

const Home=()=>{
const [data,setData] =useState('')
  const fu=(e)=>{
    console.log("here is api calling.....",e.target.value)
  }

  const handleDebounce =(fu,d)=>{
    let timer;
    return function(...arge){
      clearTimeout(timer)
   timer=   setTimeout(()=>{
        fu(...arge)
      },d)
    }
  }

  let deBounce = useMemo(()=>handleDebounce(fu,3000),[]) 
  return(
    <>
    <input type="text" value={data} onChange={(e)=>{setData(e.target.value), deBounce(e)}} className=" border-2 px-3 py-3"/>
    </>
  )
}

export default Home;