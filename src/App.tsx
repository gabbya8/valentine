import { useState } from 'react'
import './App.css'
import Prompt from './Prompt.tsx'
function App() {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const handleClick = () => {
    setIsButtonClicked(true);
  };
  return (
     <div>
       {isButtonClicked ? (
       <Prompt />
       ) :
       <button onClick={handleClick}>
         click me
       </button>
       }
       
     </div>
  )
}

export default App
