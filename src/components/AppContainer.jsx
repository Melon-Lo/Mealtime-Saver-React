import './common/style.scss'

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

export default function AppContainer() {
  const { currentItems, getItemsAsync, total } = useContext(FunctionsContext)
  const { setShowModal, setModalType } = useContext(ModalContext)
  const { mode, setMode } = useContext(ModeContext)

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
      <div className="titleBox">用餐救星</div>
      <div className="editBox">
        { mode === 'normal' &&
          <button 
            className="add"
            onClick={() => {
              setShowModal(true)
              setModalType('add')
            }}
          >
            新增
          </button>
        }
        { mode !== 'delete' && 
          <button 
            className="edit"
            onClick={() => setMode('edit')}
          >
            { mode === 'edit' ? '【編輯模式】點選品項右側的筆進行編輯' : '編輯'}
          </button>
        }
        { mode !== 'edit' && 
          <button 
            className="delete"
            onClick={() => setMode('delete')}
          >
            { mode === 'delete' ? '【刪除模式】點選品項右側的 X 進行刪除' : '刪除'}
          </button>
        }
        { mode !== 'normal' &&
          <button 
            className="finish"
            onClick={() => setMode('normal')}
          >
            完成
          </button>
        }
      </div>
      <div className="itemBox">
        <div className="itemHeadings">
          <h5>品項</h5>
          <h5>價格</h5>
          <h5>數量</h5>
          <h5>小計</h5>
          { mode === 'delete' && <h5>刪除</h5>}
          { mode === 'edit' && <h5>修改</h5>}
        </div>
        <div className="itemCollection">
          {itemsData}
        </div>
      </div>
      <div className="totalBox">
        <h5>總計：${total}</h5>
        <button>確認</button>
      </div>
    </section>
  )
}