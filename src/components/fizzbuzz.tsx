import { useState } from "react";

export default function FizzBuzz(): JSX.Element {
  const initialValue: (string | number)[] = [1];
  const [currentValue, newValue] = useState(initialValue);
  const [currentCounter, newCounter] = useState<number>(2);
  const nextButton = () => {
    if (Number(currentCounter) % 3 === 0) {
      newValue((x) => [...x, "Fizz"]);
      newCounter((x) => x + 1);
    } else if (Number(currentCounter) % 5 === 0) {
      newValue((x) => [...x, "Buzz"]);
      newCounter((x) => x + 1);
    } else {
      newCounter((x) => x + 1);
      newValue((x) => [...x, currentCounter]);
    }
  };
  return (
    <>
      <h1>Fizz-Buzz App</h1>
      <p>Current Numbers: </p>
      <p>{currentValue.join(", ")}</p>
      <hr />
      <button onClick={nextButton}>Next</button>
    </>
  );
}
