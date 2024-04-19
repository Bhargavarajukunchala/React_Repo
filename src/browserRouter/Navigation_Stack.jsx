import Cards from "../state/cardsState"
import Price from "../priceIncrease/PriceIncrease"
import { BrowserRouter,Route,Routes } from "react-router-dom"


const Roouter=()=>{ 

    return(
        
        <BrowserRouter>

        <Routes>
            <Route path="/" element={<Price/>} />
            <Route path="/cardsdata" element={<Cards/>}  />
            <Route path="/Price_Increase" element={<Price/>} />
            
        </Routes>
        
        </BrowserRouter>

    )
}

export default Roouter