import { Component } from "react";
import axios from "axios";
import Spinner from "../reactboot/spinner";
import "./axiosStyle.css"


class ProductList extends Component{
    state={
        Products:[]
    }

    componentDidMount(){
        this.FetchData()
    }


    FetchData=async()=>{

        const result= await axios.get("https://dummyjson.com/products")
        // console.log(result)

        this.setState({
            Products:result.data.products
        })
    }

  Delete=(index)=>{
        const NewProducts=this.state.Products.filter((Eachobj,ind)=>ind!==index)
        this.setState({
            Products:NewProducts
        })
    }

    // UpdateCard=(index)=>{
    //     const NewCard=this.state.Products.map((Eachobjs,card)=>{
    //       if(card===index){
    //         return {
    //           ...card, // Copy all existing properties of the card
    //           thumbnail: "https://cdn.dummyjson.com/product-images/2/1.jpg" ,// Update the image property
    //           price:330,
    //           title:"Smart-Phones"
    //         };
    //       }
    //       else{
    //         return Eachobjs
    //       }
    //     })
    
    //     this.setState({
    //       Products:NewCard
    //     })
    //   }


    render(){
        // console.log(this.state.Products)

        return(

            <>
            {
                (this.state.Products.length>0)?
                <div className="ProductList">
                {
                    this.state.Products.map((eachobj,index)=>{
                        
                        return(
                            <div className="card">
                            <h2>{eachobj.title}</h2>
                           
                            <img src={eachobj.thumbnail} alt={eachobj.title} /> <br></br>
                            <h4>{eachobj.description}</h4>
                            <button onClick={()=>this.Delete(index)}>Delete</button>
                            {/* <button onClick={()=>this.UpdateCard(index)}>Update</button> */}
                            </div>
                        )
                    })
                }
                </div>
                :
                <>
                <Spinner/>
                </>
            }
            
            </>

        )
    }

}

export default ProductList