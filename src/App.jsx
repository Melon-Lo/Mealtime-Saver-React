import './App.css';

// import dependencies
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

// import components
import MainPage from '../src/pages/MainPage'
import OrderPage from './pages/OrderPage';

const basename = process.env.PUBLIC_URL

function App() {
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path='/' element={<MainPage />}></Route>
        <Route path='order' element={<OrderPage />}></Route>
        <Route path='*' element={<Navigate to="/" />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
