import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./HomePage"
import Contact from "./ContactUs"
import About from "./About"
import Head from "./Header"
import { createContext, useState } from "react"
import Cartt from "./cart"



export const data=createContext()

const Navi=()=>{

    const [CartItems,setCartsItems]=useState([])

    const AddCart=(eachobj)=>{
        // setCartsItems([...CartItems,eachobj])
        const result=CartItems.find((eachitem)=>{
            return eachitem.id==eachobj.id
        })
        if(result){
            alert("cart already exists")
        }else{
                    setCartsItems([...CartItems,eachobj])
        }
    }

    
    

    return(
        <data.Provider  value={{
            AddCart,
            CartItems
        }}>

        <BrowserRouter>
        <Head/>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/Contact" element={<Contact/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Cart" element={<Cartt/>}/>
            <Route/>


        </Routes>
        </BrowserRouter>
        </data.Provider>


    )

}

export default Navi