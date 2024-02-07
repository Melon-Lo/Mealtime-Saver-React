import OrderItemWrapper from "../components/OrderItemWrapper"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import QuestionMark from "../components/QuestionMark"

export default function OrderPage() {
  return (
    <div id="orderPage">
      <OrderItemWrapper />
      <Navbar />
      <Footer />
      <QuestionMark />
    </div>
  )
}