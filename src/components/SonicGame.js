import React, { useEffect, useRef } from 'react';
import k from './kaplayCtx';
import './main';

function SonicGame() {
  const gameContainerRef = useRef(null);

  useEffect(() => {
    if (gameContainerRef.current) {
      // Clear any existing canvas
      gameContainerRef.current.innerHTML = '';
      
      // Mount the Kaboom canvas to our container
      k.mount(gameContainerRef.current);

      // Start the game
      k.go('disclaimer');
    }

    // Cleanup function
    return () => {
      k.quit();
    };
  }, []);

  return (
    <div 
      ref={gameContainerRef} 
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    />
  );
}

export default SonicGame;