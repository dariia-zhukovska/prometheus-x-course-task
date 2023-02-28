import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { IBookListData } from '../../types';
import Book from '../Book/Book';
import SearchNav from '../SearchNav/SearchNav';
import styles from './BookList.module.css';



interface IProps {
  bookListData: any;
}


export default function BookList({bookListData}: IProps) {



  return (
    <div>
  <SearchNav />
      <ul className={styles.booklist}  >
          {bookListData.map((item: IBookListData) => (
            <Book bookItemData={item} key={item.id} />
          ))}
      </ul>
      
    

 </div>
  );
}

