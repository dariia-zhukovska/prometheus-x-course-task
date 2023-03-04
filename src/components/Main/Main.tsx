import React from "react";
import Book from "../Book/Book";
import BookList from "../BookList/BookList";
import styles from "./Main.module.css";
import booksData from "../../data/books.json";
import SignIn from "../SignIn/SignIn";

export default function Main() {
  return (
    <div>
      <SignIn />
      {/* <main className={styles.booklistContainer}>
        <BookList bookListData={booksData.books} />
      </main> */}
    </div>
  );
}
