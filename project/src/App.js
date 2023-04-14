import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
function App() {
  const [count, setCount] = useState(0)
  const [value, setValue] = useState('')
  return (
    <div>
      <h1>{count}</h1>
      <h1>{count >= 10 ? "Yes" : 'No'}</h1>
      <button onClick={() => { setCount(count + 1) }}>+</button>
      <button onClick={() => { setCount(count - 1) }}>-</button>
    
      <h1>{value}</h1>
      <input type='text' value={value} onChange={(event)=>setValue(event.target.value)} />
    </div>
  );
}

export default App;
