import React from "react";
import { act, render, screen } from "@testing-library/react";
import Counter from "./Counter";

describe("testing decrease handler function", () => {
  test("should not call onCountChange, when count <= 1", async () => {
    const CountChangeMock = jest.fn();
    render(<Counter count={1} setCount={CountChangeMock} />);
    const decreaseButton = await screen.findByTestId("counter-decrease");
    expect(decreaseButton).toBeInTheDocument();

    decreaseButton.click();
    expect(CountChangeMock).not.toHaveBeenCalled();
  });

  test("should call onCountChange, when count > 1", async () => {
    const CountChangeMock = jest.fn();
    render(<Counter count={2} setCount={CountChangeMock} />);
    const decreaseButton = await screen.findByTestId("counter-decrease");
    expect(decreaseButton).toBeInTheDocument();
    const increaseButton = await screen.findByTestId("counter-increase");
    expect(increaseButton).toBeInTheDocument();

    increaseButton.click();
    expect(CountChangeMock).toHaveBeenCalledWith(3);

    decreaseButton.click();
    expect(CountChangeMock).toHaveBeenCalledWith(1);
  });
});
