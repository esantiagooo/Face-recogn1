import './App.css';
import Navigation from './components/Navigation';
import Logo from './components/Logo';
import ImageLinkForm from './components/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition';
import Rank from './components/Rank';
import React, { useState } from 'react';


function App() {
 
  return (
    <div className="App">
    <Navigation/>
    <Logo/>
    <ImageLinkForm/>
    <FaceRecognition/>
    <Rank/>
    </div>
  );
}

export default App;
