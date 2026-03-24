import './App.css';
import Navbar from './Navbar';
import Card from './Card';

function App() {
  return (
    <div className="App">
      <Navbar />
      
      {/* This div applies the new CSS and the gold line */}
      <div className="App-header-section text-center">
        <h1>CS 330L</h1>
        <h2>Section - 010</h2>
        <p>WVU ID: 800438741</p>
        <p>Hi I am Josiah</p>
      </div>

      <Card />
    </div>
  );
}

export default App;