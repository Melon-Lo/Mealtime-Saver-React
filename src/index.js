import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// import contexts
import AppTypeContextProvider from './contexts/AppTypeContext';
import FunctionsContextProvider from './contexts/FunctionsContext';
import ModalContextProvider from './contexts/ModalContext';
import ModeContextProvider from './contexts/ModeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppTypeContextProvider>
      <ModalContextProvider>
        <ModeContextProvider>
          <FunctionsContextProvider>
            <App />
          </FunctionsContextProvider>
        </ModeContextProvider>
      </ModalContextProvider>      
    </AppTypeContextProvider>
  </React.StrictMode>
);
