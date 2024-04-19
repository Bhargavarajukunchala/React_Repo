import { useEffect } from "react"
import axios from "axios"
import { useState } from "react"
import "./style.css"
import Spinner from "../reactboot/spinner"

const CardsContrl=()=>{
    const [data,setdata]=useState([])
    const [count,setCount]=useState(1)
    const [productState, setProductState] = useState({})

    useEffect(()=>{
        FetchData()
    },[])

    useEffect(() => {
        // console.log(count);
        
        async function xyz() {
            const result = await axios.get(`https:dummyjson.com/products/${count}`)
                setProductState(result.data)
                // console.log(result.data);
        }
        xyz()
    }, [count])

                                                                                  


    const FetchData= async()=>{
       const response = await axios.get("https://dummyjson.com/products")
       if(response.status===200){
        // console.log(response)
        setdata(response.data.products)
       }else{
        console.log("found an error ")
       }
    }

    const CardDisplay=(i)=>{
        setCount(i)
    }


    return(
       data.length>0?
        <div className="md">
         {console.log(data)}
         <div className="btndiv">
        {
            data.map((eachobj,i)=>{
                return(
                    <button onClick={()=>CardDisplay(i+1)}>
                        {i+1}
                    </button>
                ) 

            })
        }   
        </div>
        <div className="md1">
        
        <img src={productState.thumbnail} alt={productState.title} />
        <h2 >Brand: {productState.brand}</h2>
        <h4>{productState.description}</h4>
       
        {/* <h3>{productState.price}</h3> */}
        </div>
        
        </div>
        :
        <div className="spinner">
        <Spinner/>
        </div>


    )

}
export default CardsContrl