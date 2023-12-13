import './App.css';
import Countries from './components/Countries';
import Country from './components/Country';
import Header from './components/Header';
import React, {useState, useEffect} from 'react'
import Filter from './components/Filter';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() { 
  return (
<>
  <Router>

    <Header/>  

    <Routes>
      <Route path='' element={<Filter/>}/>
    </Routes>

    <Routes>
      <Route path='' element={<Countries/>}/>      
    </Routes>

    <Routes>
      <Route path='/countries/:name' element={<Country/>}/>      
    </Routes>

  </Router>

</>
  );
}

export default App;
