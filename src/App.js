import React, { useState, useEffect } from 'react';
import './App.css';
import { FiHome, FiUser, FiMessageCircle, FiHeart } from 'react-icons/fi'
import elements from './assets/colors.json';

function App() {
  const [ currentElement, setCurrentElement ] = useState(0);
  const [ theme, setTheme ] = useState('light-theme');
  const root = document.documentElement;

  useEffect(() => {
    const colorThemes = elements[theme][currentElement];
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
          className={(currentElement === 0) ? 'app-bar-item active' : 'app-bar-item' }
          onClick={() => setCurrentElement(0)}
        >
          <FiHome size={25} />
          <span>Home</span>
        </button>
        
        <button
          type='button'
          className={(currentElement === 1) ? 'app-bar-item active' : 'app-bar-item' }
          onClick={() => setCurrentElement(1)}
        >
          <FiMessageCircle size={25} />
          <span> Chat </span>
        </button>
        
        <button
          type='button'
          className={(currentElement === 2) ? 'app-bar-item active' : 'app-bar-item' }
          onClick={() => setCurrentElement(2)}
        >
          <FiHeart size={25} />
          <span>Like</span>
        </button>
        
        <button
          type='button'
          className={(currentElement === 3) ? 'app-bar-item active' : 'app-bar-item' }
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
