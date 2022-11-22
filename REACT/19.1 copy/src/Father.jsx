import React, { useContext } from 'react'
import GrandSon from './GrandSon'
import { MainContextFormGfather } from './GrandFather'

function Father() {
  const {setGifts} = useContext(MainContextFormGfather)

  return (
    <div> Father
      <button onClick={()=>{setGifts((prev)=>[...prev, 'alzhaimer'])}}>click for alzhaimer</button>
      <GrandSon></GrandSon>
      </div>
  )
}

export default Father