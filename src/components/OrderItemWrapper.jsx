// import dependencies
import { nanoid } from "nanoid"

// import hook
import { useEffect, useContext } from "react"
import { FunctionsContext } from "../contexts/FunctionsContext"

// import component
import Item from "./Item"

export default function OrderItemWrapper() {
  const { currentOrders, getOrdersAsync } = useContext(FunctionsContext)

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
          <h5>項目</h5>
          <h5>價格</h5>
          <h5>數量</h5>
          <h5>小計</h5>
        </div>
        <div className="orderCollection">
          {orderItemsData}
        </div>
        <h3>總計：${order.total}</h3>
      </section>
    )
  })

  return (
    <>
      {ordersData}
    </>
  )
}