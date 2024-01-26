import { useNavigate } from "react-router-dom"

export default function Navbar() {
  const navigate = useNavigate()

  return (
    <section id="navbar">
      <div 
        onClick={() => navigate('/')}
        className="mainPage"
      >
        用餐救星
      </div>
      <div 
        onClick={() => navigate('/order')}
        className="orderPage"
      >
        訂單一覽
      </div>
    </section>
  )
}