import React from 'react'
import Box from './Box'

function Boxes({data,value}) {
  return (
    <>
        
        {
            data.map((item,index)=>(
                <Box key={index} data={item} value={value} />
            ))
        }
    </>
  )
}

export default Boxes