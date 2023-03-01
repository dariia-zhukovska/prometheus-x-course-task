import React,  { useState, useEffect }from 'react';
import { Route, Routes } from 'react-router-dom';
import { IBookListData } from '../../types';
import Book from '../Book/Book';
import styles from './BookList.module.css';
import vectorRed from '../../assets/svg/icon_vector_red.svg'


interface IProps {
  bookListData: any;
  defaultOption: any;
}


export default function BookList({bookListData, defaultOption }: IProps) {

   
 const [searchTerm, setSearchTerm] = useState('');
 const [priceFilter, setPriceFilter] = useState(defaultOption);


 

   const handleSearchTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

   const handlePriceFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPriceFilter(event.target.value);
  };
   


  const filteredBooks = bookListData.filter((book: IBookListData) => {
    return book.title.toLowerCase().includes(searchTerm.toLowerCase()) && ( (priceFilter === defaultOption || priceFilter === 'All' || (priceFilter === '0-15' ) && book.price <= 15) || (priceFilter === '15-30' && book.price > 15 && book.price <= 30) || (priceFilter === '30+' && book.price > 30));
  });

  const menuOptions = ['All', '0-15', '15-30', '30+'];



  return (
    <div>
      <div className={styles.search_nav__container}>
      <div className={styles.search_input__container}>
        <div className={styles.search_input__box}>
          <span className={styles.search}>
            <i className={styles.search_icon}></i>
          </span>
          <input type="search" placeholder="Search by book name" className={styles.search_input} onChange={handleSearchTermChange} value={searchTerm} />  
        </div>
        <div>
      </div>
      </div>
      <div className={styles.search_price__container}>
          <div className={styles.select_container}>
        <select value={priceFilter} onChange={handlePriceFilterChange}>
        <option value={defaultOption} disabled>
          {defaultOption}
          
        </option>
              {menuOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
        <img src={vectorRed} alt="select_vector"  />
        
      </select>
      
    </div>
      </div>

    </div>
      <ul className={styles.booklist}  >
          {filteredBooks.map((item: IBookListData) => (
            <Book bookItemData={item} key={item.id} />
          ))}
      </ul>
 </div>
  );
}

