import './App.css';
import Countries from './components/Countries';
import Header from './components/Header';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Filter from './components/Filter';

function App() {
  return (
    <>
      <Header/>
      <Filter/>
      <Countries/>      
    </>
  );
}

export default App;
