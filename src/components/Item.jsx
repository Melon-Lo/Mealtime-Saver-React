import '../components/common/style.scss'

// import icons
import up from '../assets/icons/arrow_up.png'
import down from '../assets/icons/arrow_down.png'
import redCross from '../assets/icons/cross_red.png'
import pen from '../assets/icons/pen.png'

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
  const currentPath = window.location.pathname

  return (
    <div className="item">
      <div className="itemPiece title">{name}</div>
      <div className="itemPiece price">{'$' + price}</div>
      <div className="itemPiece quantity">
        <span>x<b>{quantity}</b></span>
        <div className={currentPath === '/Mealtime-Saver-React' ? 'controlButtons' : 'hidden'}>
          <div className="up">
            <img 
              onClick={() => {
                handleCalculate?.({ id: id }, 1)
              }}
              className="icon up" 
              src={up}
              alt="upIcon" 
            />
          </div>
          <div className="down">
            <img 
              onClick={() => {
                handleCalculate?.({ id: id }, -1)
              }}
              className="icon down" 
              src={down}
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
            className="icon pen" 
            src={pen} 
          />
        </div>
      }

      {/* delete mode */}
      { mode === 'delete' &&
        <div className="itemPiece delete">
          <img 
            onClick={() => {
              handleDelete?.({ id: id })
            }}
            className="icon" 
            src={redCross} 
          />
        </div>
      }
    </div>
  )
}

