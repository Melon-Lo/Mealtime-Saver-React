import { useState, useContext } from 'react'
import cross from '../assets/icons/cross_black.png'
import { ModalContext } from '../contexts/ModalContext'

export default function ManualModal() {
  const [languageIsTC, setLanguageIsTC] = useState(true)
  const { setShowModal } = useContext(ModalContext)

  function TCtextBox() {
    return (
      <div className="textBox">
        <h1>用餐救星</h1>
        <h2>介紹</h2>
        <hr />
        每次和親朋好友外出用餐時，總是為了算錢頭痛嗎？不用怕，為了算數不太靈光的你，用餐救星來了！只要使用這個APP，再也不用害怕結帳時被朋友坑錢！<br />
        <br />
        <h2>使用方法</h2>
        <hr />
        <h3>主頁（用餐救星）</h3>
        1. 在主頁中，你可以查看目前訂單的狀況以及總價。（預設：$100 牛排 x 1）<br />
        2. 新增項目：點擊「新增項目」，並輸入項目名稱和價格。<br />
        3. 編輯模式：可以修改某個項目。點擊「編輯模式」，再點擊欲修改項目右側的筆，便可修改該項目的名稱或價格。<br />
        4. 刪除模式：可以刪除某個項目。點擊「刪除模式」，再點擊預刪除項目右側的 X ，便可刪除該項目。<br />
        5. 確認訂單後，點擊「確認」，可將當前的訂單送出。訂單內容可至「訂單一覽」頁面查看。<br />
        <br />
        <h3>訂單一覽</h3>
        1. 在訂單一覽中，可查看所有曾經送出過的訂單。順序由上到下，最下面的最新。<br />
        2. 重新整理可以清除所有訂單。<br />
        <br />
        <h3>伺服器模式</h3>
        1. 把此專案 clone 下來後，在終端機輸入 npm run dev-server 便可啟動後端伺服器（port: 3001）。<br />
        2. 點擊主頁下方的「切換模式」可切換成伺服器模式。<br />
        3. 在伺服器模式中，新增、修改、刪除等動作都會修改到後端的資料。<br />
        <br />
        <h2>開發工具</h2>
        <hr />
        ・Node.js v21.2.0<br />
        ・npm v10.2.3<br />
        ・React v18.2.0
      </div>
    )
  }

  function ENtextBox() {
    return (
      <div className="textBox">
        <h1>Mealtime Saver</h1>
        <h2>Introduction</h2>
        <hr />
        Do you always find it troublesome to split the bill when dining out with friends and family? Fear no more! For those who struggle with mental arithmetic, the Meal Savior is here! With this app, you no longer need to worry about being cheated out of money when it's time to settle the bill with friends!<br />
        <br />
        <h2>How to Use</h2>
        <hr />
        <h3>Main Page (Mealtime Saver)</h3>
        1. On the main page, you can view the current status of the order and the total price. (Default: $100 Steak x 1) <br />
        2. Add Item: Click "Add Item" and enter the item name and price.<br />
        3. Edit Mode: You can modify a specific item. Click "Edit Mode" and then click the pen icon next to the item you want to modify to change its name or price.<br />
        4. Delete Mode: You can delete a specific item. Click "Delete Mode" and then click the X icon next to the item you want to delete.<br />
        5. After confirming the order, click "Confirm" to submit the current order. You can view the order details on the "Order Overview" page.<br />
        <br />
        <h3>Order Overview</h3>
        1. In the order overview, you can view all the orders that have been submitted. The newest orders appear at the top, with older orders below.<br />
        2. Refreshing the page will clear all orders.<br />
        <br />
        <h3>伺服器模式</h3>
        1. After cloning this project, type npm run dev-server in the terminal to start the backend server (port: 3001).<br />
        2. Click "Switch Mode" at the bottom of the main page to switch to server mode.<br />
        3. In server mode, actions such as adding, editing, and deleting will modify the data on the backend.<br />
        <br />
        <h2>Development Tools</h2>
        <hr />
        ・Node.js v21.2.0<br />
        ・npm v10.2.3<br />
        ・React v18.2.0
      </div>
    )
  }

  return (
    <div id="manualModal">
      <div className="modalWrapper">
        <img 
          onClick={() => setShowModal(false)}
          src={cross}
        />
        <button 
          onClick={() => setLanguageIsTC(!languageIsTC)}
          className="switchButton"
        >
          { languageIsTC ? '切換語言' : 'Switch Language' }
        </button>
        { languageIsTC ?
          <TCtextBox /> :
          <ENtextBox />
        }
      </div>
    </div>
  )
}