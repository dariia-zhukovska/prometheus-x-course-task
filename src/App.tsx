import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SignIn from "./components/SignIn/SignIn";
import Main from "./components/Main/Main";
import { Routes, Route, Navigate } from "react-router-dom";
import BookList from "./components/BookList/BookList";
import SpecificBook from "./components/SpecificBook/SpecificBook";
import booksData from "./data/books.json";
import Cart from "./components/Cart/Cart";
import PageNotFound from "./components/PageNotFound/PageNotFound";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [isSigneddIn, setIsSigneddIn] = useState(false);

  const handleSignIn = () => {
    setIsSigneddIn(true);
  };

  const handleSignOut = () => {
    setIsSigneddIn(false);
  };

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  const handleRemoveFromCart = () => {
    setCartCount(cartCount - 1);
  };

  const handleClearCart = () => {
    // const username = localStorage.getItem("username");
    // const user = localStorage.getItem(`cartItems${username}`);
    // if (user?.length === 0) {
    //   setCartCount(0);
    // }
    setCartCount(0);
  };
  return (
    <div className="App">
      <Header cartCount={cartCount} />
      <div className="mainContainer">
        <Routes>
          <Route path="/" element={isSigneddIn ? <Main /> : <SignIn />}></Route>
          <Route path="/" element={<Main />}>
            {" "}
          </Route>
          <Route path="books" element={<BookList />}></Route>
          <Route
            path="books/:id"
            element={<SpecificBook handleCartCount={handleAddToCart} />}
          ></Route>
          <Route
            path="/cart"
            element={
              <Cart
                handleClearCart={handleClearCart}
                handleRemoveFromCart={handleRemoveFromCart}
              />
            }
          ></Route>
          <Route path="/404" element={<PageNotFound />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
