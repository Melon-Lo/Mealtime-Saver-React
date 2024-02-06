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

export default function AddItemModal() {
  const { handleNameChange, handlePriceChange, handleAddItem, inputNameValue, inputPriceValue } = useContext(FunctionsContext)
  const { setShowModal } = useContext(ModalContext)
  const { modalTitle, nameTitle, priceTitle, namePlaceholder, pricePlaceholder, buttonContent } = textData.modals.addItemModal

  return (
    <div id="addItemModal">
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
            <h5>{nameTitle}</h5>
            <input 
              type="text" 
              value={inputNameValue}
              placeholder={namePlaceholder}
              onChange={(e) => {
                handleNameChange?.(e.target.value)
              }}
            />
          </div>
          <div className="input price">
            <h5>{priceTitle}</h5>
            <input 
              type="number" 
              value={inputPriceValue}
              placeholder={pricePlaceholder}
              onChange={(e) => {
                handlePriceChange?.(e.target.value)
              }}
            />
          </div>
        </div>
        <button
          onClick={() => handleAddItem?.()}
        >
          {buttonContent}
        </button>
      </div>
      
    </div>
  )
}