
import { useContext, useState } from "react"
import Head from "./Header"
import axios from "axios"
import { useEffect } from "react"
// import "/style.css"
import { createContext } from "react"
import { data } from "./Navigation"

const Home=()=>{

    const {AddCart}=useContext(data)

    const [Product,setProduct]=useState([])
    useEffect(()=>{
        FetchData()
    },[])

    const FetchData= async()=>{
        const result= await axios.get("https://dummyjson.com/products")
        setProduct(result.data.products)
    }
   const  Delete=(index)=>{
        const NewProducts=Product.filter((Eachobj,ind)=>ind!==index)
        setProduct(NewProducts)
   }
   

    return (
        <>
        
        
       
       {

        Product.map((eachobj,index)=>{
            return(
                <div className="card" key={eachobj.id}>
                <h2>{eachobj.title}</h2>
               
                <img src={eachobj.thumbnail} alt={eachobj.title} /> <br></br>
                <h4>{eachobj.description}</h4>
                <button onClick={()=>Delete(index)}>Delete</button>
                <button onClick={()=>AddCart(eachobj)}>AddTo-cart</button>
                {/* <button onClick={()=>this.UpdateCard(index)}>Update</button> */}
                </div>
            )
        })

       }
      
</>
    )
}


export default Home
