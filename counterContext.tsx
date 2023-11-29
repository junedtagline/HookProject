import {createContext, useContext, useState} from 'react';

export const CounterContext = createContext({
  counter: 0,
  incrementCounter: () => {},
  decrementCounter: () => {},
});

export const CounterContextProvider = ({children}) => {
  const [counter, setCounter] = useState(0);
  console.log(
    '🚀 ~ file: counterContext.tsx:11 ~ CounterContextProvider ~ counter:',
    counter,
  );

  const incrementCounter = () => {
    setCounter(counter + 1);
  };
  const decrementCounter = () => {
    setCounter(counter - 1);
  };

  const values = {
    incrementCounter,
    decrementCounter,
    counter,
  };

  return (
    <CounterContext.Provider value={values}>{children}</CounterContext.Provider>
  );
};

export const useCounterContextValues = () => {
  return useContext(CounterContext);
};
