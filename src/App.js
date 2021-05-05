import './App.css';
import Box from './box.js';
import React from 'react';

class App extends React.Component{
  render() {
    let squareNo = 200
    let grid = []
    while (squareNo > 0) {
      grid.push(<Box/>)
      squareNo -= 1
    }
    return (
    <div class="container">
      {grid}
    </div>
    );
    
  }
}
export default App;

