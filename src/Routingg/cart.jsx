import { useContext, useState } from "react"
import { data } from "./Navigation"


const Cartt=()=>{
    const {CartItems}=useContext(data)
    const [Carddata,setCarddata]=useState(CartItems)
    // console.log(CartItems)

    const DeleteCard=(index)=>{
        const NewCard=Carddata.filter((eachobj,ind)=>ind!==index)
        setCarddata(NewCard)

    }
console.log(Carddata)

    return(
        <>
         {
                    Carddata.map((Eachobj,index)=>{
                        // console.log(Eachobj)
                      return(
                        <div className="md2" key={Eachobj.id} >
                        <img src={Eachobj.thumbnail} alt="images" width="150" height="150"/>
                        <h4 >{Eachobj.title}</h4>
                        <h2>Category: {Eachobj.category}</h2>
                        <h2>Price: {Eachobj.price}</h2>
                        
                        <button  onClick={()=>DeleteCard(index)} >Delete</button>
                        {/* <button className="btn" onClick={()=>UpdateCard(index)}>Update</button> */}
                       
                        </div>
                      )
                       
                      
                    })
                  }
                
        </>
    )
}

export default Cartt