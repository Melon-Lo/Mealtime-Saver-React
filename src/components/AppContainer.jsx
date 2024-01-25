import './common/style.scss'
import '../data/textData'

// import hook
import { useContext, useEffect } from 'react'

// import icons
import up from '../assets/icons/up-arrow.svg'
import down from '../assets/icons/down-arrow.svg'
import cross from '../assets/icons/cross.svg'

// import components
import Item from '../components/Item'

// import contexts
import { FunctionsContext } from '../contexts/FunctionsContext'
import { ModalContext } from '../contexts/ModalContext'
import { ModeContext } from '../contexts/ModeContext'
import { textData } from '../data/textData'

export default function AppContainer() {
  const { currentItems, getItemsAsync, total } = useContext(FunctionsContext)
  const { setShowModal, setModalType } = useContext(ModalContext)
  const { mode, setMode } = useContext(ModeContext)

  // import text
  const { appTitle, totalText } = textData
  const { addButton, editButton, deleteButton, confirmButton } = textData.buttons
  const { nameProp, priceProp, quantityProp, subtotalProp, editProp, deleteProp } = textData.itemProperties
  const { editModeText, deleteModeText } = textData.modes

  const itemsData = currentItems.map(item => {
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

  useEffect(() => {
    getItemsAsync()
  }, [])

  return (
    <section id="appContainer">
      <div className="titleBox">{appTitle}</div>
      <div className="editBox">
        { mode === 'normal' &&
          <button 
            className="add"
            onClick={() => {
              setShowModal(true)
              setModalType('add')
            }}
          >
            {addButton}
          </button>
        }
        { mode !== 'delete' && 
          <button 
            className="edit"
            onClick={() => setMode('edit')}
          >
            { mode === 'edit' ? editModeText : editButton}
          </button>
        }
        { mode !== 'edit' && 
          <button 
            className="delete"
            onClick={() => setMode('delete')}
          >
            { mode === 'delete' ? deleteModeText : deleteButton}
          </button>
        }
        { mode !== 'normal' &&
          <button 
            className="finish"
            onClick={() => setMode('normal')}
          >
            {confirmButton}
          </button>
        }
      </div>
      <div className="itemBox">
        <div className="itemHeadings">
          <h5>{nameProp}</h5>
          <h5>{priceProp}</h5>
          <h5>{quantityProp}</h5>
          <h5>{subtotalProp}</h5>
          { mode === 'delete' && <h5>{deleteProp}</h5>}
          { mode === 'edit' && <h5>{editProp}</h5>}
        </div>
        <div className="itemCollection">
          {itemsData}
        </div>
      </div>
      <div className="totalBox">
        <h5>{totalText}：${total}</h5>
        <button>{confirmButton}</button>
      </div>
    </section>
  )
}