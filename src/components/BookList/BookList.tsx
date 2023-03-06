import React, { useState, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { IBookListData } from "../../types";
import Book from "../Book/Book";
import styles from "./BookList.module.css";
import booksData from "../../data/books.json";

import FilterNavbar from "../FilterNavbar/FilterNavbar";

export default function BookList() {
  const [filteredBooks, setFilteredBooks] = useState<IBookListData[]>([]);

  return (
    <div>
      <FilterNavbar
        bookListData={booksData.books}
        setFilteredBooks={setFilteredBooks}
      />
      <ul className={styles.booklist}>
        {filteredBooks.map((item: IBookListData) => (
          <Book bookItemData={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}
