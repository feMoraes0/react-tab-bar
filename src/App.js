import React, { useState, useEffect } from 'react';
import './App.css';
import { FiHome, FiUser, FiMessageCircle, FiHeart } from 'react-icons/fi'
import colors from './assets/colors.json';

function App() {
  const [ currentElement, setCurrentElement ] = useState(0);
  const [ theme, setTheme ] = useState('light-theme');
  const root = document.documentElement;

  useEffect(() => {
    const colorThemes = colors[theme][currentElement];
    Object.keys(colorThemes).map((element) => {
      root.style.setProperty(`--${element}`, colorThemes[element]);
      return undefined;
    });
    return;
  }, [currentElement, root.style, theme]);

  useEffect(() => {
    if(theme === 'light-theme') {
      root.style.setProperty('--primaryColor', '#ffffff');
      root.style.setProperty('--secondaryColor', '#282c34');
    } else {
      root.style.setProperty('--primaryColor', '#282c34');
      root.style.setProperty('--secondaryColor', '#ffffff');
    }
    return;
  }, [root.style, theme])

  function handleToggle() {
    const slider = document.querySelector('span.slider-round');
    if(theme === 'light-theme') {
      slider.style.right = '0%';
      setTheme('dark-theme');
    } else {
      slider.style.right ='50%';
      setTheme('light-theme');
    }
  }

  return (
    <div className="app-container">
      <button className='switch' onClick={handleToggle}>
        <span className='slider-round'></span>
      </button>
      <div className='app-bar'>
        <button
          type='button'
          className={`app-bar-item ${(currentElement === 0) ? 'active' : ''}` }
          onClick={() => setCurrentElement(0)}
        >
          <FiHome size={25} />
          <span>Home</span>
        </button>
        
        <button
          type='button'
          className={`app-bar-item ${(currentElement === 1) ? 'active' : ''}` }
          onClick={() => setCurrentElement(1)}
        >
          <FiMessageCircle size={25} />
          <span>Chat</span>
        </button>
        
        <button
          type='button'
          className={`app-bar-item ${(currentElement === 2) ? 'active' : ''}` }
          onClick={() => setCurrentElement(2)}
        >
          <FiHeart size={25} />
          <span>Like</span>
        </button>
        
        <button
          type='button'
          className={`app-bar-item ${(currentElement === 3) ? 'active' : ''}` }
          onClick={() => setCurrentElement(3)}
        >
          <FiUser size={25} />
          <span>Profile</span>
        </button>
      </div>
    </div>
  );
}

export default App;
