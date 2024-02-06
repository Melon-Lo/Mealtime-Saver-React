// import dependencies
import { nanoid } from "nanoid"

// import hook
import { useEffect, useContext } from "react"
import { FunctionsContext } from "../contexts/FunctionsContext"

// import component
import Item from "./Item"

// import data
import noGif from '../assets/gif/no.gif'
import { textData } from "../data/textData"

export default function OrderItemWrapper() {
  const { currentOrders, getOrdersAsync } = useContext(FunctionsContext)
  const { itemTitle, priceTitle, quantityTitle, subtotalTitle } = textData.orderPage.headings
  const { totalTitle, noOrdersYet } = textData.orderPage

  useEffect(() => {
    getOrdersAsync()
  }, [])

  const ordersData = currentOrders.map(order => {
    const orderItemsData = order.items.map(item => {
      return (
        <Item
        key={item.id}
        id={item.id}
        name={item.name}
        price={item.price}
        quantity={item.quantity}
      />
      )
    })

    return (
      <section className="orderItemWrapper" key={nanoid()}>
        <h3>{order.title}</h3>
        <div className="orderHeadings">
          <h5>{itemTitle}</h5>
          <h5>{priceTitle}</h5>
          <h5>{quantityTitle}</h5>
          <h5>{subtotalTitle}</h5>
        </div>
        <div className="orderCollection">
          {orderItemsData}
        </div>
        <h3>{totalTitle}：${order.total}</h3>
      </section>
    )
  })

  function NoOrdersYet() {
    return (
      <div className="noOrdersYet">
        <p>{noOrdersYet}</p>
        <img src={noGif} alt="noGif" />
      </div>
    )
  }

  return (
    <>
      {ordersData.length === 0 ? <NoOrdersYet /> : ordersData }
    </>
  )
}