/* eslint-disable testing-library/no-unnecessary-act */
import { act, render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

jest.spyOn(window.HTMLMediaElement.prototype, "play").mockImplementation();

test.each([
  [2, "-", 3, -1],
  [2, "-", 0, 2],
  [0, "-", 2, -2],
  [3, "-", 0, 3],
  [3, "-", 2, 1],
  [0, "-", 0, 0],
  [9, "+", 7, 16],
  [3, "+", 0, 3],
  [0, "+", 3, 3],
  [0, "+", 0, 0],
  [5, "x", 9, 45],
  [1, "x", 9, 9],
  [1, "x", 0, 0],
  [0, "x", 9, 0],
  [2, "/", 3, 0.6667],
  [0, "/", 9, 0],
  [8, "/", 9, 0.8889],
  [5, "mod", 1, 0],
  [5, "mod", 2, 1],
  [5, "mod", 0, "NaN"],
  [0, "mod", 5, 0],
])("calculation of 2 numbers", (a, operator, b, expected) => {
  render(<App />);

  let firstButton: Element;
  let secondButton: Element;

  if (a === 0) {
    firstButton = screen.getAllByText(a.toString())[1];
  } else {
    firstButton = screen.getByText(a.toString());
  }
  if (b === 0) {
    secondButton = screen.getAllByText(b.toString())[1];
  } else {
    secondButton = screen.getByText(b.toString());
  }

  const buttonOperator = screen.getByText(operator);
  const buttonSum = screen.getByText("=");
  const resultCalculation = screen.getByTestId("resultCalculation");

  act(() => {
    userEvent.click(firstButton);
  });
  act(() => {
    userEvent.click(buttonOperator);
  });
  act(() => {
    userEvent.click(secondButton);
  });
  act(() => {
    userEvent.click(buttonSum);
  });

  expect(resultCalculation.innerHTML).toBe(expected.toString());
});

test.each([
  [8, "+/-", -8],
  [8, "%", 0.08],
])("change value", (a, operator, expected) => {
  render(<App />);

  let firstButton: Element;
  if (a === 0) {
    firstButton = screen.getAllByText(a.toString())[1];
  } else {
    firstButton = screen.getByText(a.toString());
  }

  const buttonOperator = screen.getByText(operator);
  const resultCalculation = screen.getByTestId("resultCalculation");

  act(() => {
    userEvent.click(firstButton);
  });
  act(() => {
    userEvent.click(buttonOperator);
  });

  expect(resultCalculation.innerHTML).toBe(expected.toString());
});

test("adds two negative values", () => {
  render(<App />);

  const eightButton = screen.getByText("8");
  const change = screen.getByText("+/-");
  const plusButton = screen.getByText("+");
  const nineButton = screen.getByText("9");
  const calculate = screen.getByText("=");

  const resultCalculation = screen.getByTestId("resultCalculation");

  act(() => {
    userEvent.click(eightButton);
  });
  act(() => {
    userEvent.click(change);
  });
  act(() => {
    userEvent.click(plusButton);
  });
  act(() => {
    userEvent.click(nineButton);
  });
  act(() => {
    userEvent.click(change);
  });
  act(() => {
    userEvent.click(calculate);
  });

  expect(resultCalculation.innerHTML).toBe("-17");
});

test("adds two  decimal values", () => {
  render(<App />);

  const firstZeroButton = screen.getByTestId("zeroButton");
  const firstPoint = screen.getByText(".");
  const sixButton = screen.getByText("6");
  const plusButton = screen.getByText("+");
  const secondZeroButton = screen.getByTestId("zeroButton");
  const secondPoint = screen.getByText(".");
  const nineButton = screen.getByText("9");
  const thirdZeroButton = screen.getByTestId("zeroButton");
  const eightZeroButton = screen.getByText("8");
  const twoZeroButton = screen.getByText("2");
  const calculate = screen.getByText("=");

  const resultCalculation = screen.getByTestId("resultCalculation");

  act(() => {
    userEvent.click(firstZeroButton);
  });
  act(() => {
    userEvent.click(firstPoint);
  });
  act(() => {
    userEvent.click(sixButton);
  });
  act(() => {
    userEvent.click(plusButton);
  });
  act(() => {
    userEvent.click(secondZeroButton);
  });
  act(() => {
    userEvent.click(secondPoint);
  });
  act(() => {
    userEvent.click(nineButton);
  });
  act(() => {
    userEvent.click(thirdZeroButton);
  });
  act(() => {
    userEvent.click(eightZeroButton);
  });
  act(() => {
    userEvent.click(twoZeroButton);
  });
  act(() => {
    userEvent.click(calculate);
  });
  expect(resultCalculation.innerHTML).toBe("1.5082");
});
