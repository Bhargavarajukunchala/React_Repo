
import { Component } from "react";

import axios from "axios"
import Spinner from "../reactboot/spinner";
import "./style.css"
import BasicExample from "../browserRouter/Header";

class Price extends Component{


    state={
        Product:[]
        
    }

    componentDidMount(){
        this.FetchData()
    }

    FetchData=async()=>{
        const Res=await axios.get("https://dummyjson.com/products");
        let data=Res.data.products.map((eachobj)=>{
            let newobj={...eachobj,count:1,fixedprice:eachobj.price}
            return newobj
        })

        this.setState({
            
           Product:data
            
        })
        console.log(data)

    }

    Delete=(index)=>{
        const newProducts=this.state.Product.filter((eachobj,ind)=>ind!==index)
        this.setState({
            Product:newProducts
        })
    }
 DeletePrice=(index)=>{
    let newproducts=this.state.Product.map((eachobj,ind)=>{
        if(index===ind && eachobj.count>1){
            eachobj.count-=1
            eachobj.price-=eachobj.fixedprice
            return eachobj
        }else{
            return eachobj
        }
    })
    this.setState({
        Product:newproducts
    })
 }

 AddPrice=(index)=>{
    const Newproduct=this.state.Product.map((eachobj,ind)=>{
        if(index===ind){
            eachobj.count+=1
            eachobj.price+=eachobj.fixedprice
            return eachobj
        }else{
            return eachobj
        }
    })
    this.setState({
        Product:Newproduct
    })
 }
 LowToHigh=()=>{
    const newArray=this.state.Product.sort((a,b)=>a.price-b.price)
    this.setState({
        Product:newArray
    })
 }
 HighToLow=()=>{
    const newArray=this.state.Product.sort((a,b)=>b.price-a.price)
    this.setState({
        Product:newArray
    })
 }
 Range=()=>{
    const newArray=this.state.Product.filter(eachobj=>eachobj.price<=500)
    const Array1=newArray.sort((a,b)=>a.price-b.price)
    this.setState({
        Product:Array1
    })
 }

render(){

    return(
        <>
       <BasicExample/>
        {
            (this.state.Product.length>0)?
            <>
            <div className="ranges">
            <h3 onClick={this.LowToHigh}>Low-to-High</h3>
            <h3 onClick={this.HighToLow}>High-to-low</h3>
            <h3 onClick={this.Range}>0-500</h3>
            </div>
            <div className="Productlist" style={{display:"flex",flexDirection:"row",flexWrap:"wrap",gap:"30px",marginLeft:"9.5vh"}}> 
                
                {
                   
                    this.state.Product.map((eachobj,index)=>{
                        // console.log(eachobj)
                        
                        return(
                           
                            
                            <div className="card" key={eachobj.id}>
                            <h2>{eachobj.title}</h2>
                           
                            <img src={eachobj.thumbnail} alt={eachobj.title} /> <br></br>
                            <h4>{eachobj.description}</h4>
                            <h4 style={{color:"black",fontSize:"20px",marginLeft:"1vh"}}>Price: {eachobj.price}</h4>
                            <h5 onClick={()=>this.Delete(index)} className="btn">&#x3A7;</h5>
                            <button onClick={()=>this.DeletePrice(index)} style={{width:"45px"}}>-</button>
                            <button style={{border:"none"}}>  {eachobj.count}</button>
                            <button onClick={()=>this.AddPrice(index)} style={{width:"45px"}}>+</button>
                          
                            {/* <button onClick={()=>this.UpdateCard(index)}>Update</button> */}
                            </div>
                        )
                    })
                }
            </div>
            </>
            :
            <div className="spinner">
            <Spinner />
            </div>
        }
        </>

    )
}

}

export default Price