import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Register = () => {
    var[name,setName]=useState("")
    var[email,setEmail]=useState("")
    var[username,setUsername]=useState("")
    var[password,setPassword]=useState("")
    var[conformpassword,setconformPassword]=useState("")
    const subData=()=>{
        const data={"name":name,"email":email,"username":username,"password":password,"conformpassword":conformpassword}
       console.log(data)
    }
    

  return (
    <div>
        

<div class="container">
    <div class="row">
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="row g-3">

                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="form-label">Name</label>
                    <input onChange={(e)=>{setName(e.target.value)}} type="text" class="form-control"/>
                </div>

                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="form-label">Email</label>
                    <input onChange={(e)=>{setEmail(e.target.value)}} type="text" class="form-control"/>
                </div>

                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="form-label">Username</label>
                    <input onChange={(e)=>{setUsername(e.target.value)}} type="text" class="form-control"/>
                </div>
                
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="form-label">Password</label>
                    <input onChange={(e)=>{setPassword(e.target.value)}} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="form-label">ConformPassword</label>
                    <input onChange={(e)=>{setconformPassword(e.target.value)}} type="text" class="form-control"/>
                </div>
                
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                     <Link to="/add"><button onClick={subData} class="btn-success">REGISTER</button></Link>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                     <a href="/" class="btn btn-success"> Back to Login</a>
                </div>
            </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default Register