import { useState, useEffect, useRef } from 'react';
import Vara from 'vara';

function Prompt() {
  const containerRef = useRef<HTMLDivElement>(null);
  // Using a string state: 'prompt', 'no', or 'yes'
  const [view, setView] = useState<'prompt' | 'no' | 'yes'>('prompt');

  useEffect(() => {
    // Only initialize Vara if we are in the 'prompt' view
    if (view === 'prompt' && containerRef.current) {
      containerRef.current.innerHTML = "";
      new Vara(
        "#vara-container",
        "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json",
        [
          {
            text: "Will you be my Valentine?",
            fontSize: 50,
            strokeWidth: 1.5,
            color: "white",
            textAlign: "center"
          }
        ]
      );
    }
  }, [view]); 

  const buttonStyle: React.CSSProperties = {
    padding: '12px 24px',
    minWidth: '120px',
    cursor: 'pointer',
    fontSize: '18px'
  };

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '100vh',
    }}>
      
      {/* Logic to show No GIF, Yes GIF, or Vara Text */}
      {view === 'no' ? (
        <img 
          src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZzI3Z3Jsb2xkY3MxNzJ2eXY1ZWVqcGlzMmRsaDkwMTQxMHNkczk5YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/12Bpme5pTzGmg8/giphy.gif" 
          alt="Sad"
          style={{ width: '300px', height: '300px', borderRadius: '10px', marginBottom: '20px', objectFit: 'cover' }}
        />
      ) : view === 'yes' ? (
        <img 
          src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHBlOTRvMG5xeDB1anU5bnZjcWJzbHZsbjdoaHU0dHBwc3c3dmFweSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IVK6xNBpEAHYyOdghk/giphy.gif" 
          alt="Happy"
          style={{ width: '300px', height: '300px', borderRadius: '10px', marginBottom: '20px', objectFit: 'cover' }}
        />
      ) : (
        <div 
          id="vara-container" 
          ref={containerRef} 
          style={{ width: '100%', height: '180px' }}
        ></div>
      )}

      <div style={{ display: 'flex', justifyContent: 'center', gap: '50px', marginTop: '20px' }}>
        {/* Toggle buttons based on current view */}
        {view === 'no' ? (
          <button 
            style={buttonStyle} 
            onClick={() => setView('prompt')}
          >
            try again
          </button>
        ) : view === 'prompt' ? (
          <>
            <button style={buttonStyle} onClick={() => setView('yes')}>yes</button>
            <button style={buttonStyle} onClick={() => setView('no')}>no</button>
          </>
        ) : (
          /* Success state message (optional) */
          <p style={{ color: 'white', fontSize: '24px' }}>Yay! ❤️</p>
        )}
      </div>
    </div>
  );
}

export default Prompt;

