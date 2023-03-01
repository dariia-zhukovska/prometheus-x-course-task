import React from 'react';
import Book from '../Book/Book';
import BookList from '../BookList/BookList';
import styles from './Main.module.css';
import booksData from '../../data/books.json'





export default function Main() {
     const menuOptions = ['All', '0-15', '15-30', '30+']; 
  return (
    <div>
      <main className={styles.booklist__container}>

         <BookList bookListData={booksData.books} defaultOption={'Price'}  />
       </main>
     
     
   </div>
  );
}


