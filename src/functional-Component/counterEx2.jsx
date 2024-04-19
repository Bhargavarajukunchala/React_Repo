import { useState } from "react"


function Counter2(){
    const [fruits,setfruits]=useState(["apple","banana"])

    const AddFruits=()=>{
        const newfru=[...fruits,"pineapple"]
        setfruits(newfru)
    }
    return(


        <>
        <button onClick={AddFruits}>Add Fruits</button>
        {
            fruits.map((val,index)=>{
                return <h1 key={index}>{val}</h1>
            })
        }

        </>


    )
}
export default Counter2