import React, { useState } from 'react'
import Nave from './Nave'

const Add = () => {
    var[bookname,setBookName]=useState("")
    var[author,setAuthor]=useState("")
    var[price,setPrice]=useState("")
    const subData=()=>{
        const data={"bookname":bookname,"author":author,"price":price}
        console.log(data)
    }
  return (
    <div>
        <Nave/>
        <div class="container">
    <div class="row">
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="row g-3">

                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" class="form-label">BookName</label>
                    <input onChange={(e)=>{setBookName(e.target.value)}}  type="text" class="form-control"/>
                </div>

                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="form-label">Author</label>
                    <input onChange={(e)=>{setAuthor(e.target.value)}} type="text" class="form-control"/>
                </div>

                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="form-label">Price</label>
                    <input onChange={(e)=>{setPrice(e.target.value)}} type="text" class="form-control"/>
                </div>
                
                
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                     <button onClick={subData} class="btn-success">SUBMIT</button>
                </div>
            </div>
        </div>
    </div>
</div>


    </div>
  )
}

export default Add