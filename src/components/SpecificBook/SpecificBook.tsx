import React, { useRef, useState } from 'react';
import { IBookListData } from '../../types';
import styles from './SpecificBook.module.css';
import imageNotFound from '../../assets/img/imageNotFound.png'
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import booksData from '../../data/books.json';
import Counter from '../Counter/Counter';
import PageNotFound from '../PageNotFound/PageNotFound';
import vectorUp from '../../assets/svg/icon_vector_up.svg';
import vectorDown from '../../assets/svg/icon_vector_down.svg';




export default function SpecificBook() {

  const dataBooks = booksData.books;
  const [isExpanded, setIsExpanded] = useState(true);
  const [totalPrice, setTotalPrice] = useState(0);


 
  const { id } = useParams();
  const selectedBook = dataBooks.find(book => book.id === parseInt(`${id}`));
  console.log(selectedBook);



 const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };
  

  if (!selectedBook) {
    return <PageNotFound />;
  }

  return (
    <div className={styles.bookItem}>
      <div  className={styles.bookItemLeft}><img src={selectedBook.image || imageNotFound} alt="book_image" className={styles.bookItemImage} /></div>
      <div className={styles.bookItemRight}>
        <div className={styles.bookItemInfo}>
          <div className={styles.bookItemAuthor}>
        {selectedBook.author}
      </div>
        <div className={styles.bookItemTitle}>
        {selectedBook.title}
        </div>
        <div className={styles.bookItemShortDescription}>
            {isExpanded ? selectedBook.shortDescription : selectedBook.description}        
          </div>
          <div className={styles.bookItemMoreCard}><div className={styles.bookItemMore} onClick={handleToggle} style={{ backgroundColor: isExpanded ? vectorUp : vectorDown }}>
             {isExpanded ? 'More about book' : 'Less about book'}</div>
  
      </div>
        </div>
      <div className={styles.bookItemPriceLine}>
        <div className={styles.bookItemPrice}>
          {`${selectedBook.price} $`}
          </div>
          <div className={styles.bookItemCount}>
          {<Counter initialValue={0} event={undefined} />}
          </div>

          <div className={styles.bookItemTotalPrice}>
            
          {` Total Price: ${ selectedBook.price} $`}
          </div>
           <button className={styles.ButtonAddToCart}>Add To Cart</button>
      </div>
      
      </div>
    </div>
  );
}


