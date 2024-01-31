import { useNavigate } from "react-router-dom"

export default function Navbar() {
  const navigate = useNavigate()
  const currentPath = window.location.pathname

  return (
    <section id="navbar">
      <div 
        onClick={() => navigate('/')}
        className={currentPath === '/Mealtime-Saver-React' ? 'page mainPage active' : 'page mainPage'}
      >
        用餐救星
      </div>
      <div 
        onClick={() => navigate('/order')}
        className={currentPath === '/Mealtime-Saver-React/order' ? 'page orderPage active' : 'page orderPage'}
      >
        訂單一覽
      </div>
    </section>
  )
}