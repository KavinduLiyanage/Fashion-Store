import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Components/Login/Login";
import Homepage from "./Components/HomePage/Homepage";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Homepage/>
    </div>
  );
}

export default App;
