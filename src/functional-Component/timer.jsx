import { useState } from "react"


function Timer(){
    const [timer,settimer]=useState(10)

    const StartTimer=()=>{

        // const Invalid=setInterval(()=>{
        //     settimer((pretime=>pretime-1))
        // },1000)
        // setTimeout(() => {
        //     clearInterval(Invalid);
        // }, timer * 1000);
    }
    return(

        <>
        <h1 style={{color:timer<=5?"red":"black"}}>{timer}</h1>
        <button onClick={StartTimer} >Start-Timer</button>
        </>

    )
}

export default Timer