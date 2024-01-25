import '../components/common/style.scss'

// import icons
import up from '../assets/icons/up-arrow.svg'
import down from '../assets/icons/down-arrow.svg'
import cross from '../assets/icons/cross.svg'
import pen from '../assets/icons/pen.svg'

// import hook
import { useContext } from 'react'

// import contexts
import { FunctionsContext } from '../contexts/FunctionsContext'
import { ModeContext } from '../contexts/ModeContext'
import { ModalContext } from '../contexts/ModalContext'

export default function Item({
  id,
  name,
  price,
  quantity
}) {
  const { handleDelete, handleCalculate, setSelectedItem } = useContext(FunctionsContext)
  const { setShowModal, setModalType } = useContext(ModalContext)
  const { mode } = useContext(ModeContext)

  return (
    <div className="item">
      <div className="itemPiece title">{name}</div>
      <div className="itemPiece price">{'$' + price}</div>
      <div className="itemPiece quantity">
        <span>{'X' + quantity}</span>
        <div className="controlButtons">
          <div className="up">
            <img 
              onClick={() => {
                handleCalculate?.({ id: id }, 1)
              }}
              className="icon" 
              src={up}
              alt="upIcon" 
            />
          </div>
          <div className="down">
            <img 
              onClick={() => {
                handleCalculate?.({ id: id }, -1)
              }}
              className="icon" 
              src={down}
              alt="downIcon" 
            />
          </div>
        </div>
      </div>
      <div className="itemPiece subtotal">{'$' + price * quantity}</div>

      {/* edit mode */}
      { mode === 'edit' &&
        <div className="itemPiece edit">
          <img 
            onClick={() => {
              setShowModal(true)
              setModalType('edit')
              setSelectedItem({ id: id, name: name, price: price })
            }}
            className="icon" 
            src={pen} 
            alt="" 
          />
        </div>
      }

      {/* delete mode */}
      { mode === 'delete' &&
        <div className="itemPiece delete">
          <img 
            onClick={() => {
              console.log(id)
              handleDelete?.({ id: id })
            }}
            className="icon" 
            src={cross} 
            alt="" 
          />
        </div>
      }
    </div>
  )
}

