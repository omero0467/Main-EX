import React from 'react'
import { useContext } from 'react'
import { MainContextFormGfather } from './GrandFather'



function GrandSon() {
  const {gifts} = useContext(MainContextFormGfather)


  return (
    <div>{gifts}</div>
  )

  
}

export default GrandSon