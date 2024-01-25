// import hook
import { useState, useEffect, createContext, useContext } from 'react'

// import dependencies
import Swal from 'sweetalert2'

// import contexts
import { ModalContext } from './ModalContext'

// import api
import { getItems, createItem, deleteItem, patchItem } from '../api/items'

export const FunctionsContext = createContext()

export default function FunctionsContextProvider({ children }) {
  const [currentItems, setCurrentItems] = useState([])
  const [inputNameValue, setInputNameValue] = useState('')
  const [inputPriceValue, setInputPriceValue] = useState('')
  const { setShowModal } = useContext(ModalContext)

  const total = currentItems.reduce((acc, curr) => {
    return acc + curr.price * curr.quantity
  }, 0)

  // get items
  const getItemsAsync = async () => {
    try {
      const items = await getItems()
      setCurrentItems(items.map(item => ({...item})))
    } catch (error) {
      console.error(error)
    } 
  }

  // add a new item
  
  // name: 0-10 words
  const handleNameChange = (value) => {
    if (value.length > 10) return
    setInputNameValue(value.trim())
  }

  // price: 0-10000
  const handlePriceChange = (value) => {
    setInputPriceValue(Math.min(value, 10000))
  }

  // submit
  const handleAddItem = async () => {
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

    try {
      const data = await createItem({
        name: inputNameValue,
        price: inputPriceValue,
        quantity: 1,
      })

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

      // clear data
      setInputNameValue('')
      setInputPriceValue('')
      // setCurrentItems([])
      setShowModal(false)

    } catch (error) {
      console.error(error)
    }
  }

  // patch item
  const handleCalculate = async ({ id }, plusNum ) => {
    const currentItem = currentItems.find(item => item.id === id)

    if (currentItem.quantity + plusNum < 0) return

    try {
      await patchItem({
        id,
        quantity: currentItem.quantity + plusNum
      })

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

  // delete item
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
      await deleteItem(id)

      setCurrentItems(prevItems => {
        return prevItems.filter(item => item.id !== id)
      })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <FunctionsContext.Provider
      value={{
        currentItems,
        inputNameValue,
        inputPriceValue,
        setCurrentItems,
        getItemsAsync,
        handleAddItem,
        handleDelete,
        handleNameChange,
        handlePriceChange,
        handleCalculate,
        total,
      }}
    >
      {children}
    </FunctionsContext.Provider>
  )
}