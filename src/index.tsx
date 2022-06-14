import React from 'react';
import ReactDOM from 'react-dom/client';
import { Cart } from './pages/Cart';
// import Home from './pages/Home';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Cart />
  </React.StrictMode>
);
