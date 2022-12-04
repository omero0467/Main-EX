import React from 'react'
import './App.css';
import GlobalContext from './context/GlobalContext';
import List from './components/ListItem/List';
function App() {
  return (
    <div className='App'>
      <GlobalContext>
     <List />
      </GlobalContext>
    </div>
  )
}

export default App