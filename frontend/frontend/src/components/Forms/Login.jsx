import React from 'react'
import { useState } from 'react'

const Login = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const login =async () =>{
        const res =await fetch("http://127.0.0.1:8000/api/login/",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body : JSON.stringify({email,password})
        })

        const data =await res.json()
        alert(data.message || data.error)
    }
    return (
        <div>
            <h2>Login Form</h2>
            <input placeholder='Email' onChange={e=>setEmail(e.target.value)}/>
            <input placeholder='Password' onChange={e=>setPassword(e.target.value)}/>
            <button onClick={login}>Login</button>

        </div>
    )
}

export default Login




