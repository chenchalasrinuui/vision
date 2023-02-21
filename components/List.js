import React from 'react'

export const List = ({heading,data}) => {
  return (
    <div>
        <h3 className='my-4 text-info'>{heading.toUpperCase()} : </h3>
        <ol>
            {
                data.map((val,ind)=>{
                    return <li className='mb-3' key={ind}>{val}</li>
                })
            }
        </ol>
    </div>
  )
}
