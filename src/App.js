import React from 'react';
import NavbarCont from './containers/NavbarCont';
import './App.css';

function App() {
  return (
    <>
     <NavbarCont/>
     <div className="counter-show"><span>0</span></div>
     <div>
       <button className="increment">+</button>
     </div>
    </>
  );
}

export default App;
