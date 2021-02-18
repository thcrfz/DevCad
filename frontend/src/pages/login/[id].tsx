import { useState } from "react";

export default function Id() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h1 onClick={() => setCounter(counter + 1)}>Id: {counter}</h1>
    </>
  );
}
