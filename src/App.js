import Game from './Game';
import './App.css';
// Add this in your component file
require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);
function App() {
  return (
    <div className="App">
      <Game/>
    </div>
  );
}

export default App;
