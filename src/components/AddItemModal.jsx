import './common/style.scss'

// import hook
import { useContext } from 'react'

// import contexts
import { FunctionsContext } from '../contexts/FunctionsContext'
import { ModalContext } from '../contexts/ModalContext'

// import icons
import cross from '../assets/icons/cross.svg'

export default function AddItemModal() {
  const { handleNameChange, handlePriceChange, handleAddItem } = useContext(FunctionsContext)
  const { setShowModal } = useContext(ModalContext)

  return (
    <div id="addItemModal">
      <div className="modalWrapper">
        <div className="title">
          <h5>新增品項</h5>
          <img 
            onClick={() => setShowModal(false)}
            src={cross} 
            alt="crossIcon" 
          />
        </div>
        <div className="inputs">
          <div className="input name">
            <h5>品項名</h5>
            <input 
              type="text" 
              placeholder="請輸入品項名"
              onChange={(e) => {
                handleNameChange?.(e.target.value)
              }}
            />
          </div>
          <div className="input price">
            <h5>價格</h5>
            <input 
              type="number" 
              placeholder="請輸入價格"
              onChange={(e) => {
                handlePriceChange?.(e.target.value)
              }}
            />
          </div>
        </div>
        <button
          onClick={() => handleAddItem?.()}
        >
          確認
        </button>
      </div>
      
    </div>
  )
}