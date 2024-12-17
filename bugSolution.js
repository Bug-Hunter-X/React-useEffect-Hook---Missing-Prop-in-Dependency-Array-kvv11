```javascript
import React, { useState, useEffect } from 'react';

function MyComponent({ prop }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    // Cleanup function to clear the interval
    return () => clearInterval(intervalId);
  }, [prop, count]); // Added 'prop' to dependency array

  return <div>Count: {count}</div>;
}

export default MyComponent;
```