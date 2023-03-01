import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SignIn from './components/SignIn/SignIn';
import Main from './components/Main/Main';
import { Routes, Route } from 'react-router-dom';
import BookList from './components/BookList/BookList';
import SpecificBook from './components/SpecificBook/SpecificBook';
import booksData from "./data/books.json";
import Cart from './components/Cart/Cart';
import PageNotFound from './components/PageNotFound/PageNotFound';




function App() {

  const [isSigneddIn, setIsSigneddIn] = useState(false);

  const handleSignIn = () => {
    setIsSigneddIn(true);
  };

  const handleSignOut = () => {
    setIsSigneddIn(false);
  };

  return (
    <div className="App">
      <Header />   
      <Routes>
        <Route path='/' element={isSigneddIn ? <Main /> : <SignIn />}></Route>
        <Route path='/' element={<Main />}> </Route>
          <Route path='books' element={ <BookList bookListData={booksData.books} defaultOption={'Price'} />}></Route>
          <Route path='books/:id' element={<SpecificBook  />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
          <Route path='/404' element={<PageNotFound />}></Route>
          
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
