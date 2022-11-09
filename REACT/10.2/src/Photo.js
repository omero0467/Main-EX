import React from 'react'

function photo({bnwimg}) {

    const styling = {
        background: `url(${bnwimg})`,
        height:'600px',
        width:'400px'
    }
  return (
    <div style={styling}></div>
  )
}

export default photo