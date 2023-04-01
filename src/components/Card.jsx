import { useState, useEffect } from 'react';

import './Card.css'

import React from 'react'

function Card() {
  const[user, setUser] = useState([])

  useEffect(()=>{
    onApi()
  },)

  const onApi = ()=>{
    fetch("https://fakestoreapi.com/products") .then((response)=>response.json())
    .then ((data)=>{
      console.log(data)

      setUser(data)
      console.log(user)

    })
  }


  return (
    

    user.length >0 && <div className='cardMain'>
{
user.map((element)=>{ return( 

       <div className='card'>
        <img style={{width:"100px", height:"100px"}}  src={element.image} />
         <h4>{element.title}</h4>
         <p>price:-{element.price}</p>
         <button>checkout</button>
             
         </div>
)})}
    </div>
    
  ) 
}

export default Card;