import React, {Component} from 'react'
import './App.css';
import List from './List';



export default class App extends Component {

  state ={
    display: false
  }
   renderList=()=>{
    this.setState((prev)=>({display:!prev.display}))
  }

  render(){
    return(
    <div className='App'>
      <button onClick= {this.renderList} >show List</button>
      {this.state.display&&<List></List>}
    </div>

    )
  } 



}
