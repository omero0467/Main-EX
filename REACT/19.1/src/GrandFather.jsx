import React, { createContext } from 'react'

export const GrandFatherCtx = createContext()

const gifts = ['ant ', 'bison ', 'camel ', 'duck ', 'bison ']

function Grandfather({children}) {
  return (
    <GrandFatherCtx.Provider value={{
      gifts
    }}>
            <div className='Gfather'>
              {children}
              </div>
    </GrandFatherCtx.Provider>
  )
}

export default Grandfather