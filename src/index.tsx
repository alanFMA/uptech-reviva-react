import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { Cart } from './pages/Cart';
import Home from './pages/Home';

// import Home from './pages/Home';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <Home />
      <Cart />
    </RecoilRoot>
  </React.StrictMode>
);
