import { useContext } from "react"
import { ModalContext } from "../contexts/ModalContext"

export default function QuestionMark() {
  const { setShowModal, setModalType } = useContext(ModalContext)

  return (
    <div
      className="questionMark"
      onClick={() => {
        setShowModal(true)
        setModalType('manual')
      }}
    >
      ?
    </div>
  )
}