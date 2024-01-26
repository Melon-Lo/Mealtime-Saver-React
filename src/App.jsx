import './App.css';

// import dependencies
import { BrowserRouter } from 'react-router-dom'

// import components
import MainPage from '../src/pages/MainPage'

function App() {
  return (
    <BrowserRouter>
      <MainPage />
    </BrowserRouter>
  );
}

export default App;
