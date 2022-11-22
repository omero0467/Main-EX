import React from 'react'
import { useContext } from 'react'
import { GrandFatherCtx } from './GrandFather'

function GrandSon() {
  
const {gifts} = useContext(GrandFatherCtx)

  return (
    <div className='Gson'>{gifts}</div>
  )
}

export default GrandSon