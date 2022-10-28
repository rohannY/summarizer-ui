import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Summarize from './components/Summarize.js'

function App() {
  return (
    <div className="App h-full bg-gray-100">
      <Navbar/>
      <Home/>
    </div>
  );
}

export default App;
