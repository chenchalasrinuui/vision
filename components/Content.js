import React from 'react'

export const Content = ({heading, text}) => {
  return (
    <div>
      <h3 className='text-center my-4 text-info'>{heading}</h3>
      <div className='text-justify px-3' dangerouslySetInnerHTML={{__html:text}}>
      </div>
    </div>
  )
}
