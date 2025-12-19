import React from 'react'
import { useState } from 'react'

const Register = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const register =async ()=>{
        const res =await fetch("http://127.0.0.1:8000/api/register/",{
            method : "POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify({email,password})
        })

        const data = await res.json();
        alert(data.message || data.error)
    }
    return (
        <div>
            <h2>Register</h2>
            <input placeholder='Email' onChange={e =>setEmail(e.target.value)}/>
            <input placeholder='Password' onChange={e=>setPassword(e.target.value)}/>
            <button onClick={register}>Register</button>

        </div>
    )
}

export default Register



