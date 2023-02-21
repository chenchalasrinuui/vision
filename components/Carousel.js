import React, { useEffect, useState } from 'react'

export const Carousel = ({data}) => {

  const [count,setCount]=useState(0)

  useEffect(()=>{
    let intervalId=window.setInterval(()=>{
      if(count==2){
        setCount(0)
      }else{
      setCount((prevCount)=>prevCount+1)
      }
    },5000)
    return ()=>{
      clearInterval(intervalId)
    }
  },[count])
 

  return (
    <div className='carousel-div'>
          <img src={data[count].path} />
          <h2>{data[count].header1}</h2>
          <h3>{data[count].header2}</h3>
    </div>
   
  )
}
