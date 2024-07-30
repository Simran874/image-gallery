import React from 'react';
import './App.css';
import ImageGallery from './components/ImageGallery';

function App() {
  const images = [
    "/images/dhoni.jpeg",
    "/images/rohit.jpeg",
    "/images/virat.jpeg",
    "/images/yuvraj.jpeg",
    "/images/smriti.webp",
    "/images/mithali.jpeg",
    "/images/sangakara.jpeg",
    "/images/warner.jpeg",
    "/images/rutu.jpeg",
    "/images/jasprit.jpeg",
    "/images/anil.jpeg",
    "/images/bravo.jpeg",
    "/images/pant.jpg",
    "/images/perry.jpeg"
  ];

  return (
    <div className="App">
      <h1>Image Gallery</h1>
      <ImageGallery images={images} />
    </div>
  );
}

export default App;
