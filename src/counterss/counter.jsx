import { useCallback, useMemo, useState } from "react"



const Counting=()=>{
    const[count,setcount]=useState(0)


    const double=useMemo(()=>{
        return count*2
    },[count])
    const HandleDouble=useCallback(()=>{
        setcount(count+1)
    },[count])

    return(
        <>
        <h1>count: {count}</h1>
        <h1>double: {double}</h1>
        <button onClick={HandleDouble}>Increment</button>
        
        

        </>

    )


}
export default Counting