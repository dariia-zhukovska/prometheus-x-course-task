import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SignIn from "./components/SignIn/SignIn";
import { Routes, Route, Navigate } from "react-router-dom";
import BookList from "./components/BookList/BookList";
import SpecificBook from "./components/SpecificBook/SpecificBook";
import booksData from "./data/books.json";
import Cart from "./components/Cart/Cart";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import { PrivateRoute } from "./routes/PrivateRoute";

const App = () => {
  const [cartCount, setCartCount] = useState(0);
  const username = localStorage.getItem("username");

  useEffect(() => {
    const cartData = localStorage.getItem(`cartItems${username}`) || "";

    if (cartData) {
      const items = JSON.parse(cartData);
      setCartCount(items.length);
      console.log(items);
    }
  }, [username]);

  return (
    <div className="App">
      <Header />
      <div className="mainContainer">
        <Routes>
          <Route path="/" element={<SignIn />}></Route>
          <Route
            path="book-list"
            element={
              <PrivateRoute>
                <BookList />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="book-list/:id"
            element={
              <PrivateRoute>
                <SpecificBook />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/cart"
            element={
              <PrivateRoute>
                <Cart />
              </PrivateRoute>
            }
          ></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
