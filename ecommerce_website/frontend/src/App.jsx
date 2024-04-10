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
import { UserProvider } from "./context/UserContext";
import OwnerHome from "./pages/Owner/OwnerHome";
import OwnerProduct from "./pages/Owner/OwnerProduct";
import ProductMainPage from "./pages/ProductPage/ProductMainPage";
import { ProductProvider } from "./context/ProductContext";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <BasketProvider>
            <UserProvider>
              <ProductProvider>
                <Navbar></Navbar>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route
                  path="/products"
                  exact
                  element={<ProductMainPage />}
                />
                <Route
                  path="/product-details"
                  exact
                  element={<ProductDetail />}
                />
                <Route path="/cart-summary" exact element={<CartDetail />} />
                <Route path='/user-account' exact element={<UserProfile />}></Route>
              <Route path='/admin-home' exact element={<OwnerHome />}></Route>
              <Route path='/admin-products' exact element={<OwnerProduct />}></Route>
              </Routes>
              </ProductProvider>
            </UserProvider>
          </BasketProvider>
            <Routes>
               <Route path="/login" exact element={<Login />} />
                <Route path="/signup" exact element={<SignUp />} />
            </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
