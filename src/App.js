import Game from './Game';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
// Add this in your component file
require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);
function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
          <Route component={Game} path="/" exact/>
      </div>
  </BrowserRouter>

  );
}

export default App;
