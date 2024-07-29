// src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from './components/auth/auth.component';
import Logout from './components/auth/logout.component';
import LogoutRedirect from './components/auth/logoutRedirect.component';
import Checkout from './routes/checkout/checkout.component';
import Shop from './routes/shop/shop.component';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Auth />} />
        <Route path="checkout" element={<Checkout cartItem={{
          id: 0,
          product_title: '',
          product_price: 0
        }} />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/logoutredirect" element={<LogoutRedirect />} />
      </Routes>
    </Router>
  );
};

export default App;
