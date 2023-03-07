import React, { useState, useEffect } from "react";
import { IBookListData } from "../../types";
import styles from "./FilterNavbar.module.css";

interface IProps {
  bookListData: IBookListData[];
  setFilteredBooks: (value: IBookListData[]) => void;
}

const defaultOption = "Price";

export default function FilterNavbar({
  bookListData,
  setFilteredBooks,
}: IProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceFilter, setPriceFilter] = useState(defaultOption);

  const handleSearchTermChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchTerm(event.target.value);
  };

  const handlePriceFilterChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setPriceFilter(event.target.value);
  };

  useEffect(() => {
    const filteredBooks = bookListData.filter((book: IBookListData) => {
      return (
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (priceFilter === defaultOption ||
          priceFilter === "All" ||
          (priceFilter === "0-15" && book.price <= 15) ||
          (priceFilter === "15-30" && book.price > 15 && book.price <= 30) ||
          (priceFilter === "30+" && book.price > 30))
      );
    });
    setFilteredBooks(filteredBooks);
  }, [bookListData, searchTerm, priceFilter]);

  const menuOptions = ["All", "0-15", "15-30", "30+"];

  return (
    <div className={styles.navContainer}>
      <div className={styles.inputContainer}>
        <div className={styles.inputBox}>
          <input
            type="text"
            placeholder="Search by book name"
            className={styles.searchInput}
            onChange={handleSearchTermChange}
            value={searchTerm}
          />
          <i className={styles.search}></i>
        </div>
      </div>
      <div className={styles.priceContainer}>
        <div className={styles.selectContainer}>
          <i className={styles.vector}></i>
          <select value={priceFilter} onChange={handlePriceFilterChange}>
            <option value={defaultOption} disabled>
              {defaultOption}
            </option>

            {menuOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
