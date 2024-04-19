import { useState } from "react"



function Counter(){

    const [count,setCount]=useState(0)

const Increment=(val,type)=>{
    if(type==="increment"){
        setCount((preval)=>{
            return (preval+val)})
    }else if(type==="Decrement"){
        setCount(count-val)
    }else{
        setCount(0)
    }
}
// const Increment=()=>{
//     setCount((preval)=>preval+1)
// }


return(

    <>
    <h1>{count}</h1>
    <button onClick={()=>Increment(1,"increment")}>Increment</button>
    <button onClick={()=>Increment(1,"Decrement")}>Decrement</button>
    <button onClick={()=>Increment()}>Reset</button>
    </>


)

}
export default Counter