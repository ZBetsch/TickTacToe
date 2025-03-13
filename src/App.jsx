import { useState } from 'react'
import { Board } from './Board';

function App() {

  const [ gridSize, setGridSize] = useState(3);
  const [value, setValue] = useState(0);

  function handleButtonClick(){
    setValue((value) => value + 1);
  }

  return (
    <>
    <fieldset>
      <legend>GameSettings</legend>
      <label>Grid Size</label>
      <input
        type='number'
        value={gridSize}
        onChange={(e) => setGridSize(e.target.value)}
        />
    </fieldset>
      <Board gridSize={gridSize} />
    </>
  )
}

export default App
