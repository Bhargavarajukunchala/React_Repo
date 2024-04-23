import { Link } from "react-router-dom"
import "./style.css"


const Head=()=>{

    return(
        <ul className="Unl" >
            <li > <Link style={{textDecoration:"none"}} to="/">Home</Link> </li>
            <li > <Link style={{textDecoration:"none"}} to="/Contact">Contact-us</Link> </li>
            <li> <Link style={{textDecoration:"none"}} to="/About">About</Link> </li>
            <li> <Link style={{textDecoration:"none"}} to="/Cart">Cart</Link> </li>
        </ul>

    )
}

export default Head