import "./App.css";

import HomePage from "./pages/HomePage";
import React from "react";
import {
  HashRouter as Router,
  Route,
  Link,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import ProductDetail from "./pages/ProductPage/ProductDetail";
import { AuthProvider } from "./context/AuthContext";
import CartDetail from "./pages/Cart/CartDetail";
import { BasketProvider } from "./context/BasketContext";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
import UserProfile from "./pages/UserAccount/UserProfile";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <BasketProvider>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" exact element={<Login />} />
              <Route path="/signup" exact element={<SignUp />} />
              <Route
                path="/product-details"
                exact
                element={<ProductDetail />}
              />
              <Route path="/cart-summary" exact element={<CartDetail />} />
            </Routes>
          </BasketProvider>
          <Routes>
            <Route path='/user-account' exace element={<UserProfile/>}></Route>
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
