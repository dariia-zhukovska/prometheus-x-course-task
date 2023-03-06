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
import { AuthProvider } from "./providers/AuthProvider";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [isSignedIn, setIsSignedIn] = useState(
    Boolean(localStorage.getItem("username"))
  );

  const PrivateRoute = ({ element, ...rest }: any) => {
    return isSignedIn ? (
      <Route {...rest} element={element} />
    ) : (
      <Navigate to="/" replace />
    );
  };

  const handleSignIn = () => {
    setIsSignedIn(true);
  };

  const handleSignOut = () => {
    setIsSignedIn(false);
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
          <Route path="/" element={isSignedIn ? <Main /> : <SignIn />}></Route>
          <Route path="/" element={<Main />}>
            {" "}
          </Route>

          <Route path="book-list" element={<AuthProvider><BookList /></AuthProvider>}></Route>
          <Route
            path="book-list/:id"
            element={<AuthProvider><SpecificBook handleCartCount={handleAddToCart} /></AuthProvider>}
          ></Route>
          <Route
            path="/cart"
            element={
              <AuthProvider>
              <Cart
                handleClearCart={handleClearCart}
                handleRemoveFromCart={handleRemoveFromCart}
              />
              </AuthProvider>
            }
          ></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
