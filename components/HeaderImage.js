import React from 'react'

export const HeaderImage = ({imgPath}) => {
  return  <img className="header-img img-fluid" src={imgPath} />
    {/* 
    <div className='header-image' style={{backgroundImage:`url(${imgPath})`,backgroundRepeat:'no-repeat',backgroundSize: 'cover'}}></div>
    */}
   
  
}
