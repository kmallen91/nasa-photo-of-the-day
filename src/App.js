import React from "react";
import "./App.css";
// import axios from "axios";
import Photo from "./photo"
// import Drop from "./Drop"

function App() {
  return (
    <div className="container">
    <div className="App-header">
      <img className="App-logo" alt="NASA logo" src="https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png" /> 
    </div>

    <div className="App">
      <h1 className="nasa">NASA Astronomy Photo of the Day</h1>
      {/* <Drop /> */}
      <Photo />
    </div>
    <div>

      
    </div>
    
    </div>
  )
}



export default App;

