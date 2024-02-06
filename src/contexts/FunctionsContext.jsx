// import hook
import { useState, useEffect, createContext, useContext } from 'react'

// import dependencies
import Swal from 'sweetalert2'

// import contexts
import { ModalContext } from './ModalContext'
import { AppTypeContext } from './AppTypeContext'

// import api
import { getItems, createItem, deleteItem, patchItem, getOrders, createOrder } from '../api/items'

// import data
import dummyData from '../data/dummyData'

export const FunctionsContext = createContext()

export default function FunctionsContextProvider({ children }) {
  const [currentItems, setCurrentItems] = useState([])
  const [inputNameValue, setInputNameValue] = useState('')
  const [inputPriceValue, setInputPriceValue] = useState('')
  const [selectedItem, setSelectedItem] = useState({
    id: undefined,
    name: '',
    price: undefined,
  })
  const [currentOrders, setCurrentOrders] = useState([])
  const { setShowModal } = useContext(ModalContext)
  const { appType, setAppType } = useContext(AppTypeContext)
  const dummyDataItems = dummyData.items
  const dummyDataOrders = dummyData.orders

  const total = currentItems.reduce((acc, curr) => {
    return acc + curr.price * curr.quantity
  }, 0)

  ////////// get items //////////
  const getItemsAsync = async () => {    
    try {
      let items
      if (appType === 'normal') {
        items = dummyDataItems
      } else if (appType === 'server') {
        items = await getItems()
      }
      setCurrentItems(items.map(item => ({...item})))
    } catch (error) {
      console.error(error)
    } 
  }

  ////////// add a new item //////////
  
  // name: 0-10 words
  const handleNameChange = (value) => {
    if (value.length > 10) return
    setInputNameValue(value.trim())
  }

  // price: 0-10000, charAt(0) can't be 0
  const handlePriceChange = (value) => {
    if (value > 10000) {
      value = 10000
    } else if (value < 0) {
      value = 0
    }

    if (value.charAt(0) === '0') {
      value = ''
    }
    setInputPriceValue(value)
  }

  // submit
  const handleAddItem = async () => {
    // name & price can't be blank
    if(inputNameValue.length === 0) {
      Swal.fire({
        icon: 'error',
        text: '項目名不能為空白！',
        timer: 1500
      })
      return
    }

    if(inputPriceValue.length === 0) {
      Swal.fire({
        icon: 'error',
        text: '價格不能為空白！',
        timer: 1500
      })
      return
    }

    try {
      let data
      if (appType === 'normal') {
        data = { 
          id: currentItems.length + 1,
          name: inputNameValue,
          price: inputPriceValue,
          quantity: 1
        }
      } else if (appType === 'server') {
        data = await createItem({
          name: inputNameValue,
          price: inputPriceValue,
          quantity: 1,
        })
      }
      
      setCurrentItems(prevItems => {
        return [
          ...prevItems,
          {
            id: data.id,
            name: data.name,
            price: data.price,
            quantity: data.quantity,
          }
        ]
      })

      Swal.fire({
        icon: 'success',
        text: '新增成功！',
        timer: 1000,
        showConfirmButton: false
      })

      // close modal
      setShowModal(false)
    } catch (error) {
      console.error(error)
    }
  }

  ////////// patch item //////////
  const handleEditItem = async (id) => {
    // name & price can't be blank
    if(inputNameValue.length === 0) {
      Swal.fire({
        icon: 'error',
        text: '品項名稱不能為空白！',
        timer: 1500
      })
      return
    }

    if(inputPriceValue.length === 0) {
      Swal.fire({
        icon: 'error',
        text: '價格不能為空白！',
        timer: 1500
      })
      return
    }

    const currentItem = currentItems.find(item => item.id === id)

    try {
      if (appType === 'server') {
          await patchItem({
          id,
          name: inputNameValue,
          price: inputPriceValue,
          quantity: 1,
        })
      }

      setCurrentItems(prevItems => {
        return prevItems.map(item => {
          if(item.id === id) {
            return {
              ...item,
              name: inputNameValue,
              price: inputPriceValue,
              quantity: 1,
            }
          }
          return item
        })
      })

      Swal.fire({
        icon: 'success',
        text: '修改成功！',
        timer: 1000,
        showConfirmButton: false
      })

      // close modal
      setShowModal(false)
    } catch (error) {
      console.error(error)
    }
  }

  const handleCalculate = async ({ id }, plusNum ) => {
    const currentItem = currentItems.find(item => item.id === id)

    if (currentItem.quantity + plusNum < 0) return

    try {
      if (appType === 'server') {
        await patchItem({
          id,
          quantity: currentItem.quantity + plusNum
        })
      }

      setCurrentItems(prevItems => {
        return prevItems.map(item => {
          if(item.id === id) {
            return {
              ...item,
              quantity: currentItem.quantity + plusNum
            }
          }
          return item
        })
      })
    } catch (error) {
      console.error(error)
    }
  }

  ////////// delete item //////////
  const handleDelete = async ({ id }) => {
    const result = await Swal.fire({
      icon: "warning",
      title: "確定要刪除嗎？",
      showCancelButton: true,
      confirmButtonColor: "#FF6600",
      confirmButtonText: "確定",
      cancelButtonText: "取消"
    })

    if (!result.isConfirmed) return

    try {
      if (appType === 'server') {
        await deleteItem(id)
      }

      setCurrentItems(prevItems => {
        return prevItems.filter(item => item.id !== id)
      })
    } catch (error) {
      console.error(error)
    }
  }

  ////////// switch appType //////////
  const switchAppType = () => {
    let switchTo
    if (appType === 'normal') {
      switchTo = 'server'
    } else {
      switchTo = 'normal'
    }
    setAppType(switchTo)
  }

  ////////// get orders //////////
  const getOrdersAsync = async () => {    
    try {
      let orders
      if (appType === 'normal') {
        const storedData = localStorage.getItem('orders')
        orders = JSON.parse(storedData)
      } else if (appType === 'server') {
        orders = await getOrders()
      }

      setCurrentOrders(orders.map(order => ({...order})))
    } catch (error) {
      console.error(error)
    } 
  }

  ////////// add a order ///////////
  const handleAddOrder = async () => {
    try {
      if (appType === 'server') {
        const data = await createOrder({
          id: currentOrders.length + 1,
          title: `訂單#${currentOrders.length + 1}`,
          total: total,
          items: currentItems,
        })
      }

      const result = await Swal.fire({
        icon: "question",
        title: "都確認好了嗎？",
        showCancelButton: true,
        confirmButtonColor: "#FF6600",
        confirmButtonText: "確定",
        cancelButtonText: "取消"
      })
  
      if (!result.isConfirmed) return

      setCurrentOrders(prevOrders => {
        return [
          ...prevOrders,
          {
            id: currentOrders.length + 1,
            title: `訂單#${currentOrders.length + 1}`,
            total: total,
            items: currentItems,
          }
        ]
      })

      Swal.fire({
        icon: 'success',
        text: '新增訂單成功！可至訂單頁查看～',
        timer: 1000,
        showConfirmButton: false
      })

    } catch (error) {
      console.error(error)
    }
  }

  ////////// set orders to localStorage //////////
  const setOrdersToLocalStorage = () => {
    const jsonString = JSON.stringify(currentOrders)
    localStorage.setItem('orders', jsonString)
  }

  return (
    <FunctionsContext.Provider
      value={{
        currentItems,
        setCurrentItems,
        inputNameValue,
        setInputNameValue,
        inputPriceValue,
        setInputPriceValue,
        selectedItem,
        setSelectedItem,
        currentOrders,
        setCurrentOrders,
        getItemsAsync,
        handleAddItem,
        handleDelete,
        handleNameChange,
        handlePriceChange,
        handleCalculate,
        handleAddItem,
        handleEditItem,
        switchAppType,
        getOrdersAsync,
        handleAddOrder,
        setOrdersToLocalStorage,
        total,
      }}
    >
      {children}
    </FunctionsContext.Provider>
  )
}