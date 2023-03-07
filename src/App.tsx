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
import { PrivateRoute } from "./routes/PrivateRoute";

const App = () => {
  const [cartCount, setCartCount] = useState(0);
  const [isSignedIn, setIsSignedIn] = useState(
    Boolean(localStorage.getItem("username"))
  );
  const username = localStorage.getItem("username");

  useEffect(() => {
    console.log(username);

    const cartData = localStorage.getItem(`cartItems${username}`) || "";
    console.log(cartData);

    if (cartData) {
      const items = JSON.parse(cartData);
      setCartCount(items.length);
      console.log(items);
    }
  }, [username]);

  // const PrivateRoute = ({ element, ...rest }: any) => {
  //   return isSignedIn ? (
  //     <Route {...rest} element={element} />
  //   ) : (
  //     <Navigate to="/" replace />
  //   );
  // };

  // const handleSignIn = () => {
  //   setIsSignedIn(true);
  // };

  // const handleSignOut = () => {
  //   setIsSignedIn(false);
  // };

  return (
    <div className="App">
      <Header />
      <div className="mainContainer">
        <Routes>
          {/* <Route path="/" element={isSignedIn ? <Main /> : <SignIn />}></Route> */}
          <Route path="/" element={<Main />}>
            {" "}
          </Route>

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
