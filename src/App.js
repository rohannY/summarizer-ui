import './App.css';
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Summarize from './components/Summarize'

function App() {
  return (
    <div className="App h-full bg-gray-100">
      <Navbar/>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/summarize' element={<Summarize/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
