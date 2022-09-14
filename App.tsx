import * as React from 'react';
import './style.css';

import { useState, useRef, useEffect } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    // 👇️ use a ref (best)
    const el2 = ref.current;
    console.log(el2);

    if (el2.style.color == 'blue') el2.style.color = 'red';
    else el2.style.color = 'blue';

    // 👇️ use document.querySelector()
    // should only be used when you can't set a ref prop on the element
    // (you don't have access to the element)
    // const el = document.querySelector('#container');
    // console.log(el);

    document.title = `You clicked ${count} times`;
    console.log('COUNT=', count);
  });

  return (
    <div>
      <div ref={ref} id="container" style={{ color: 'red' }}>
        <h2>Some content here</h2>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>
    </div>
  );
}
