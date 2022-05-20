import { getValue } from '@testing-library/user-event/dist/utils'
import React from 'react'
import Nave from './Nave'

const View = () => {
    var booklist=[
        {
            "BookName": "Sense and Sensibility",
            "Author": "Jane Austen",
            "Price": 200
            
          },
          {
            "BookName": "The english Teacher",
            "Author": "RK Narayan",
            "Price": 400
          },
          {
          "BookName": "wings of Fire",
            "Author": "APJ",
            "Price": 300}
        ]
  return (
    <div>
        <Nave/>
        <div className='container'>
          <div className='row'>
            
              <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>

<table class="table">
  <thead>
    <tr>
      
      <th scope="col">BookName</th>
      <th scope="col">Author</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
    {booklist.map((value,key)=>{
      return<tr>

         <td>{value.BookName}</td>
      <td>{value.Author}</td>
      <td>{value.Price}</td>
      
      </tr>
    })}

    
      
    </tbody>
</table>


              </div>

            
            
          </div>
        </div>

    </div>
  )
}

export default View