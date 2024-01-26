// import hook
import { useState, createContext } from 'react'

export const AppTypeContext = createContext()

export default function AppTypeContextProvider({ children }) {
  const [appType, setAppType] = useState('normal')
  
  return (
    <AppTypeContext.Provider
      value={{
        appType,
        setAppType,
      }}
    >
      {children}
    </AppTypeContext.Provider>
  )
}