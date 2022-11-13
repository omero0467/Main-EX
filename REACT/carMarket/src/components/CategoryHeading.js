import React from 'react'


function CategoryHeading({getRef,catHeading,setCatHeading,text}) {
    const SellerHeading = React.useRef("")
    
  return (
    <div className="categoryHeading">
    <h1 ref={SellerHeading}>{text}</h1>
  </div>
  )
}

export default CategoryHeading