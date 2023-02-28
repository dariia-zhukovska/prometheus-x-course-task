import React, { useState } from 'react';
import styles from './SelectMenu.module.css';
import vectorRed from '../../assets/svg/icon_vector_red.svg'



interface IProps {
  menuOptions: string[];
  defaultOption: string;
}


export default function SelectMenu({ menuOptions, defaultOption }: IProps) {
  const [selectedOption, setSelectedOption] = useState(defaultOption);

  
   const handleChange = (event: any) => {
    setSelectedOption(event.target.value);
  };
  
  return (
    <div className={styles.select_container}>
      
      <select value={selectedOption} onChange={handleChange}>
        
        <option value={defaultOption} disabled>
          {defaultOption}
          
        </option>
        <img src={vectorRed} alt="select_vector"  />
        {menuOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      
    </div>
   
  );
}






