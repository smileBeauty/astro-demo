import { useState } from 'react';

interface GreetingProps {
  message?: string;
}

const Greeting = ({message = ''}) => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <h3>{message}! Thank you for visiting! {count}</h3>
      <button onClick={handleClick}>
        add count
      </button>
    </div>
  );
}

export default Greeting;
