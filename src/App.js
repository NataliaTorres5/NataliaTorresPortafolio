import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Index from './pages/Index';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <NavBar/>
  
      </header>
    </div>
  );
}

export default App;
