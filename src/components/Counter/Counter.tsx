import React, { useState } from "react";
import styles from "./Counter.module.css";

interface IProps {
  initialValue: number;
  onCountChange: (count: number) => void;
}

export default function Counter({ initialValue, onCountChange }: IProps) {
  const [count, setCount] = useState(initialValue);

  const handleIncrease = () => {
    if (count < 42) {
      setCount(count + 1);
      onCountChange(count + 1);
    }
  };

  const handleDecrease = () => {
    console.log("AAAAAA", count);

    if (count > 1) {
      setCount(count - 1);
      onCountChange(count - 1);
    }
  };

  const handleInputChange = (event: any) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value) && value >= 1 && value <= 42) {
      setCount(value);
      onCountChange(value);
    }
  };

  return (
    <div className={styles.counter}>
      <button
        onClick={handleDecrease}
        style={{ color: count === 1 ? "grey" : "" }}
        data-testid="counter-decrease"
      >
        -
      </button>
      <input
        type="number"
        value={count}
        onChange={handleInputChange}
        min={1}
        max={42}
        data-testid="counter-value"
      />
      <button
        onClick={handleIncrease}
        style={{ color: count === 42 ? "grey" : "" }}
        data-testid="counter-increase"
      >
        +
      </button>
    </div>
  );
}
