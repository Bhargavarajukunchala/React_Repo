import { useState } from "react"



const ControlForm =()=>{

    const [username,setusername]=useState("")
    const [password,setpassword]=useState("")
    const [password2,setpassword2]=useState("")
    const [UserNameErr,setUserNameErr]=useState(null)
    const [passwordErr,setPasswordErr]=useState(null)
    const [userdetails,setuserdetails]=useState([])

    const UsernameHandler=(event)=>{

         const username=event.target.value 
         setusername(username)
         console.log(username)
        if(username.trim().length>6){
            setUserNameErr("input must be less than 6")
        }else{
            setUserNameErr(null)
        }

    }
    const PasswordHandler=(event)=>{
       
        const password=event.target.value  
        setpassword(password)
        console.log(password)
     

    }
    const pswdHandler=(event)=>{
       
        const con_password=event.target.value 
        setpassword2(con_password)
        console.log(con_password)
        if(con_password===password){
            setPasswordErr("password matched")
        }else{
            setPasswordErr(null)
        }

     

    }
    const HandleSubmit=(event)=>{
        event.preventDefault()

        const obj={
            username:username,
            password:password,
            confirm_password:password2
        }
       
        if(obj.confirm_password===obj.password){
            const newArray=[...userdetails,obj]
            setuserdetails(newArray)
           alert("login succesfully")

        }else{
            return alert("password not matched")
        }
    }



    return(
        <>
       <div className="md1" style={{marginLeft:"85vh",marginTop:"10vh"}}>
        <form onSubmit={HandleSubmit} key={null}>
            <>
                <label htmlFor="Name">Username : </label><br></br>
                <input type="text" id="Name" value={username} onChange={UsernameHandler} />
                {
                    UserNameErr && <span style={{color:"red"}} >user name not valid </span>
                } <br></br>
                <label htmlFor="password">Password :</label><br></br>
                <input type="password" id="password" value={password} onChange={PasswordHandler} />
            </><br></br>
            <label htmlFor="pswd">Confirm Password : </label><br></br>
            <input type="password" id="pswd" value={password2} onChange={pswdHandler}/>
            {
                    passwordErr ? <span style={{color:"red"}} >password not matched </span>:null
            } <br></br>
            <input type="submit"/>
            

        </form>

       </div>
       <div className="md2">
        {
            userdetails.map((eachobj,index)=>{
                return(
                    <>
                    <h1 key={index}>{eachobj.username}</h1>
                    <h2>{eachobj.password}</h2>
                    </>
                )
            })
        }

       </div>
       </>



    )


}

export default ControlForm