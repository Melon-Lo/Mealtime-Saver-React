// import hook
import { useState, createContext } from 'react'

export const ModeContext = createContext()

export default function ModeContextProvider({ children }) {
  const [mode, setMode] = useState('normal')
  
  return (
    <ModeContext.Provider
      value={{
        mode,
        setMode,
      }}
    >
      {children}
    </ModeContext.Provider>
  )
}