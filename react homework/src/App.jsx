import { useState } from 'react';
import './App.css';
import BookCard from './BookCard';

function App() {
  const [count, setCount] = useState(0)

  return (
  <div className='main'>
    <BookCard/>

  </div>

  )
}

export default App
