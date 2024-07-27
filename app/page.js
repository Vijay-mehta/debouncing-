'use client'

import Debounce from "./debounce";
import Throttling from "./throttling";


const Home=()=>{


  return(
    <>
    <h2>This is Debounce</h2>
    <div className="  mb-10"><Debounce/></div>
    <h2 className=" mb-3">This is Throttling</h2>

    <Throttling/>

    </>
  )
}

export default Home;