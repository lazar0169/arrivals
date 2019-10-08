import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import Sign from './pages/sign/sign.components';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/sign" component={Sign} />
      </div>
    </Router>
  );
}

export default App;
