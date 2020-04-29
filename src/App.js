import React from 'react';
import './App.css';
import './Sass/Main.css'
import { BrowserRouter as Router} from 'react-router-dom'
// import ReactCSSTransitionGroup from 'react-transition-group';
import Header from './Components/Structure/Header';
import Routes from './Components/Routes';
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes />
      </div>
    </Router>
  );
}

export default App;
