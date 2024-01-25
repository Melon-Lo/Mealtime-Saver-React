// import hook
import { useState, createContext } from 'react'

export const ModalContext = createContext()

export default function ModalContextProvider({ children }) {
  const [showModal, setShowModal] = useState(false)
  const [modalType, setModalType] = useState('')

  return (
    <ModalContext.Provider
      value={{
        showModal,
        setShowModal,
        modalType,
        setModalType,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}