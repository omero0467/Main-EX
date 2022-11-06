import React from 'react'

function Balloons({color}) {
  return (
    <div style={{background:color, borderRadius:'50%', height:"50px",width:"50px"}}></div>
  )
}

export default Balloons