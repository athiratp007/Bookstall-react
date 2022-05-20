import React, { useState } from 'react'


const Login = () => {
    var[username,setUserName]=useState("")
    var[password,setPassword]=useState("")
    const subData=()=>{
        const data={"username":username,"password":password}
        console.log(data)
    }
  return (
    <div>
        
        <div class="container">
    <div class="row">
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="row g-3">
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="form-label">Username</label>
                    <input onChange={(e)=>{setUserName(e.target.value)}} type="text" class="form-control"/>
                </div>
                
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="form-label">Password</label>
                    <input onChange={(e)=>{setPassword(e.target.value)}} type="text" class="form-control"/>
                </div>
                
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                     <button onClick={subData} class="btn-success">LOGIN</button>
                </div>
                
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                     <a href="/register"> Click Here</a>
                </div>
                

            </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default Login