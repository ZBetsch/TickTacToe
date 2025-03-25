import { useState } from 'react'
import { Board } from './Board';

function App() {

  const [ gridSize, setGridSize] = useState(3);
  const [value, setValue] = useState(0);

  function handleButtonClick(){
    setValue((value) => value + 1);
  }

  const objectStyle = {
    display: `flex`,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    background: `#121213`,
    height: '100vh',
    color:`#f5f5f5`,
    gap: '30px',
    fontSize: `24px`,
  }

  return (
    <div style={objectStyle}>
      <fieldset>
        <legend>GameSettings</legend>
        <label>Grid Size</label>
        <input
          type='number'
          value={gridSize}
          onChange={(e) => setGridSize(e.target.value)}
          style={{fontSize:`22px`, width:`3em`, marginLeft:`10px`}}/>
      </fieldset>
      <Board gridSize={gridSize} />
    </div>
  )
}

export default App
