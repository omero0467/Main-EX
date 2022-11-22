import React from 'react'
import './App.css';
import GrandFather from './GrandFather';
import Father from './Father';
import GrandSon from './GrandSon';


function App() {
  return (
    <div className='App'>
      <GrandFather> סבא 
        <Father> אבא 
        </Father>
      </GrandFather>
    </div>
  )
}

export default App