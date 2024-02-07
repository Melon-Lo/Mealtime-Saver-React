import { useContext } from "react"

import OrderItemWrapper from "../components/OrderItemWrapper"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import QuestionMark from "../components/QuestionMark"
import ManualModal from "../components/ManualModal"
import { ModalContext } from "../contexts/ModalContext"

export default function OrderPage() {
  const { showModal, modalType } = useContext(ModalContext)

  return (
    <div id="orderPage">
      <OrderItemWrapper />
      <Navbar />
      <Footer />
      <QuestionMark />
      { showModal === true && modalType === 'manual' && <ManualModal /> }
    </div>
  )
}