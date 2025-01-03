import { useState } from 'react';
import Checkbox from './assets/checkbox';
import Itemform from './assets/itemform';
import Showfetcheddata from './assets/fetched';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Checkbox />
      <Itemform />
      <Showfetcheddata />
    </>
  )
}

export default App
