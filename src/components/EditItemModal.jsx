import './common/style.scss'
import '../data/textData'

// import hook
import { useContext } from 'react'

// import contexts
import { FunctionsContext } from '../contexts/FunctionsContext'
import { ModalContext } from '../contexts/ModalContext'

// import icons
import cross from '../assets/icons/cross_black.png'
import { textData } from '../data/textData'

export default function EditItemModal() {
  const { handleNameChange, handlePriceChange, handleEditItem, selectedItem } = useContext(FunctionsContext)
  const { setShowModal } = useContext(ModalContext)
  const { id, name, price } = selectedItem
  const { modalTitle, namePlaceholder, pricePlaceholder, buttonContent } = textData.modals.editItemModal

  return (
    <div id="editItemModal">
      <div className="modalWrapper">
        <div className="title">
          <h5>{modalTitle}</h5>
          <img 
            onClick={() => setShowModal(false)}
            src={cross} 
            alt="crossIcon" 
          />
        </div>
        <div className="inputs">
          <div className="input name">
            <h5>{name} →</h5>
            <input 
              type="text" 
              placeholder={namePlaceholder}
              onChange={(e) => {
                handleNameChange?.(e.target.value)
              }}
            />
          </div>
          <div className="input price">
            <h5>$ {price} →</h5>
            <input 
              type="number" 
              placeholder={pricePlaceholder}
              onChange={(e) => {
                handlePriceChange?.(e.target.value)
              }}
            />
          </div>
        </div>
        <button
          onClick={() => {
            handleEditItem?.(id)
          }}
        >
          {buttonContent}
        </button>
      </div>
      
    </div>
  )
}