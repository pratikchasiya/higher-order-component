import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
     <Header />
     <Home />
     <About />
    </div>
  );
}

export default App;
