import React, { useState } from 'react';
import { motion } from 'framer-motion';

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div>
      <motion.div
        className="counter"
        key={count}
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.5 }}
        transition={{ duration: 0.3 }}
      >
        {count}
      </motion.div>
      <button className="button" onClick={increment}>Increment</button>
      <button className="button" onClick={decrement}>Decrement</button>
      <button className="button" onClick={reset}>Reset</button>
    </div>
  );
};

export default App;