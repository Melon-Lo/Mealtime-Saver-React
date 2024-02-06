import { useNavigate } from "react-router-dom"
import { textData } from "../data/textData"

export default function Navbar() {
  const navigate = useNavigate()
  const currentPath = window.location.pathname
  const { appName, orderList } = textData.navbar

  return (
    <section id="navbar">
      <div 
        onClick={() => navigate('/')}
        className={currentPath === '/Mealtime-Saver-React' ? 'page mainPage active' : 'page mainPage'}
      >
        {appName}
      </div>
      <div 
        onClick={() => navigate('/order')}
        className={currentPath === '/Mealtime-Saver-React/order' ? 'page orderPage active' : 'page orderPage'}
      >
        {orderList}
      </div>
    </section>
  )
}