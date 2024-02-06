import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { textData } from "../data/textData"
import { ModeContext } from "../contexts/ModeContext"

export default function Navbar() {
  const navigate = useNavigate()
  const currentPath = window.location.pathname
  const { appName, orderList } = textData.navbar
  const { setMode } = useContext(ModeContext)
  const mealtimeSaverTabClassName = currentPath === '/Mealtime-Saver-React' || currentPath === '/Mealtime-Saver-React/' ? 'page mainPage active' : 'page mainPage';
  const orderPageTabClassName = currentPath === '/Mealtime-Saver-React/order' || currentPath === '/Mealtime-Saver-React/order/' ? 'page orderPage active' : 'page orderPage';
  

  return (
    <section id="navbar">
      <div 
        onClick={() => {
          setMode('normal')
          navigate('/')
        }}
        className={mealtimeSaverTabClassName}
      >
        {appName}
      </div>
      <div 
        onClick={() => {
          setMode('normal')
          navigate('/order')
        }}
        className={orderPageTabClassName}
      >
        {orderList}
      </div>
    </section>
  )
}