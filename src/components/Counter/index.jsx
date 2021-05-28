import React, { useState, useEffect } from "react";
import style from './counter.modules.scss';
import PropTypes from 'prop-types';

function Counter(props) {
  const [counter, setCounter] = useState(0);
  const [step, setStep] = useState(1);

  useEffect(() => {
    console.log("used effect");
    return () => console.log("unmount");
  }, [step]);

  return (
    <>
      <div>{counter}</div>
      <button onClick={() => setStep(step + 1)}>+step</button>
      <button onClick={() => setCounter(counter + step)}>Click</button>
    </>
  );
}

export default Counter;
