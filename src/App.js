import React, { useState } from 'react';
import './App.css';
import { FiHome, FiUser, FiMessageCircle, FiHeart } from 'react-icons/fi'

function App() {
  const [ currentElement, setCurrentElement ] = useState(0);
  const elements = [
    {
      'bgPage': '#8969FD',
      'fontColor': '#8A75E5',
      'bgButton': '#E7E1FE'
    },
    {
      'bgPage': '#ED775E',
      'fontColor': '#E97E69',
      'bgButton': '#FBE9E6'
    },
    {
      'bgPage': '#5BCBFB',
      'fontColor': '#68CBF5',
      'bgButton': '#E4F7FE'
    },
    {
      'bgPage': '#F7BC33',
      'fontColor': '#F7C036',
      'bgButton': '#FEF2DC'
    },
  ];

  function changeToggle() {
    console.log('entrou');
    const slider = document.querySelector('span.slider-round');
    if(slider.style.right === '0%')
      slider.style.right = '50%';
    else
      slider.style.right ='0%';
  }

  return (
    <div className="app-container" style={{ backgroundColor: elements[currentElement].bgPage }}>
      <button className='switch' onClick={changeToggle}>
        <span className='slider-round'></span>
      </button>
      <div className='app-bar'>
        <button
          type='button'
          className={(currentElement === 0) ? 'app-bar-item active' : 'app-bar-item' }
          onClick={() => setCurrentElement(0)}
          style={{ backgroundColor: (currentElement === 0) ? elements[currentElement].bgButton : 'transparent' }}
        >
          <FiHome
            size={25}
            color={(currentElement === 0) ?  elements[currentElement].fontColor : '#282c34'}
          />
          <span
            style={{ color: elements[currentElement].fontColor }}
          >
            Home
          </span>
        </button>
        
        <button
          type='button'
          className={(currentElement === 1) ? 'app-bar-item active' : 'app-bar-item' }
          onClick={() => setCurrentElement(1)}
          style={{backgroundColor: (currentElement === 1) ? elements[currentElement].bgButton : 'transparent'}}
        >
          <FiMessageCircle
            size={25}
            color={(currentElement === 1) ?  elements[currentElement].fontColor : '#282c34'}
          />
          <span
            style={{ color: elements[currentElement].fontColor }}
          >
            Chat
          </span>
        </button>
        
        <button
          type='button'
          className={(currentElement === 2) ? 'app-bar-item active' : 'app-bar-item' }
          onClick={() => setCurrentElement(2)}
          style={{backgroundColor: (currentElement === 2) ? elements[currentElement].bgButton : 'transparent'}}
        >
          <FiHeart
            size={25}
            color={(currentElement === 2) ?  elements[currentElement].fontColor : '#282c34'}
          />
          <span
            style={{ color: elements[currentElement].fontColor }}
          >
            Like
          </span>
        </button>
        
        <button
          type='button'
          className={(currentElement === 3) ? 'app-bar-item active' : 'app-bar-item' }
          onClick={() => setCurrentElement(3)}
          style={{backgroundColor: (currentElement === 3) ? elements[currentElement].bgButton : 'transparent'}}
        >
          <FiUser
            size={25}
            color={(currentElement === 3) ?  elements[currentElement].fontColor : '#282c34'}
          />
          <span
            style={{ color: elements[currentElement].fontColor }}
          >
            Profile
          </span>
        </button>
      </div>
    </div>
  );
}

export default App;
