import { Component } from "react";



class IncrementDrecement extends Component{

    state={
        count:0,
        Fruits:["apple","mango"]
    }
    Increment=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    Decrement=()=>{
        this.setState({
            count:this.state.count-1
        })
    }

    Reset=()=>{
        this.setState({
            count:0
        })
    }

    AddFruits=()=>{
       const NewFruit=[...this.state.Fruits,"pineapple"]
        this.setState({
           Fruits:NewFruit
            
        }) 
        // console.log(NewFruit)
    }

    DeleteFruits=(index)=>{
        const newfru=this.state.Fruits.filter((eachFruit,fru)=>fru!==index)
        // console.log(index)
        console.log(newfru)

        this.setState({
            Fruits:newfru
        })
    }


    UpdateFruits=(index)=>{
        const newFruits=this.state.Fruits.map((eachElement,i)=>{
            if(i===index){
                return "PineApple"
            }else{
                return eachElement
            }
        })
        this.setState(
            {
                Fruits:newFruits
            }
        )

        console.log(newFruits)
        }
    
    render(){
        return(
            <>
            <h2>{this.state.count}</h2>
            <button onClick={this.Increment}>Increment</button>
            <button onClick={this.Decrement}>Decrement</button>
            <button onClick={this.Reset}>Reset</button> <br></br> <br></br>

            <button onClick={this.AddFruits}>Add-Fruits</button>
            <ol>
                {
                    this.state.Fruits.map((EachElement,index)=>{
                        return(
                            <>
                            <li>{EachElement}</li>
                            <button onClick={()=>this.DeleteFruits(index)}>Delete</button>
                            <button onClick={()=>this.UpdateFruits(index)}>update</button>
                           
                            </>
                        )
                    })
                }


            </ol>
            



            </>
        )
    }




}
export default IncrementDrecement