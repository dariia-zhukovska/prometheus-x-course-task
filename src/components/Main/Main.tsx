import React from 'react';
import Book from '../Book/Book';
import BookList from '../BookList/BookList';
import styles from './Main.module.css';
import booksData from '../../data/books.json'
import SearchNav from '../SearchNav/SearchNav';







export default function Main() {
  
  return (
    <div>
      <main className={styles.booklist__container}>
        <SearchNav />
         <BookList bookListData={booksData.books} />
       </main>
     
     
   </div>
  );
}


