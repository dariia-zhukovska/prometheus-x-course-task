import React, { useState } from "react";
import styles from './Counter.module.css';



interface IProps {
  initialValue: number;
  event: any;
}


export default function Counter({ initialValue }: IProps)  {
  const [count, setCount] = useState(initialValue);

  const handleIncrease = () => {
    if (count < 42) {
      setCount(count + 1);
    }
  };

  const handleDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

    const handleInputChange = (event: any) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value) && value >= 0 && value <= 42) {
      setCount(value);
      }
      
  };

 

  return (
    <div className={styles.counter}>
      <button onClick={handleDecrease}>-</button>
      <input type="number" value={count} onChange={handleInputChange}
        min={0}
        max={42}/>
      <button onClick={handleIncrease} >+</button>
    </div>
  );
};
