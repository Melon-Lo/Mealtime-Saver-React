import './App.css';

// import dependencies
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

// import components
import MainPage from '../src/pages/MainPage'

const basename = process.env.PUBLIC_URL

function App() {
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path='main' element={<MainPage />}></Route>
        <Route path='*' element={<Navigate to="main" />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
