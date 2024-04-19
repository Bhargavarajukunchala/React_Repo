
import { useRef, useState } from "react"
import "./style.css"

function Formss(){
    const UserNameRef=useRef("")
    const UserPasswordRef=useRef("")
    const [Userdetails,setUserdetails]=useState([""])

const Submit=(event)=>{
    event.preventDefault()
    const username = UserNameRef.current.value;
    const password = UserPasswordRef.current.value;

    setUserdetails([...Userdetails, { username, password }]);

// console.log(UserNameRef.current.value)
// console.log(UserPasswordRef.current.value)

event.target[0].value=""
event.target[1].value=""
}


return(

    <>
    <div className="Formss">
        <h1>Login Form</h1>
     <form onSubmit={Submit}>

        <div className="inputt">
            <label htmlFor="Email">Email : </label>
            <input type="email" id="Email"ref={UserNameRef} />
            
        </div>
        <div className="inputt">
            <label htmlFor="pswd">PassWord : </label>
            <input type="password" id="Pswd" ref={UserPasswordRef} />
            
        </div>
        
        <input type="submit" value="Submit" id="Sub" />

     </form>


    </div>
    <table >
        <thead>
        <tr>
            <th>Email-Id</th>
            <th>Password</th>
        </tr>
        </thead>
        {
        Userdetails.map((values,index)=>{
            console.log(values)
           return  (
            <tbody key={index}>
            <tr >
            <td>{values.username}</td>
            <td>{values.password}</td>
        </tr>
        </tbody>
           )
        })
    }
    </table>

    </>
    

    
)

}

export default Formss