import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div className=' w-full h-screen'>
      style={{backgroundColor:color}}
      <button onClick={()=>setColor("red")}>Red</button>
    </div>
  );
}

export default App;
