import React, { useState } from 'react'
import { createContext } from "react";

export const MainContextFormGfather = createContext()

function GrandFather({children}) {
  const [gifts, setGifts] = useState([])

  return (
    <MainContextFormGfather.Provider value={{
      gifts,
      setGifts,
    }}>
              {children}
    </MainContextFormGfather.Provider>
  )
}

export default GrandFather