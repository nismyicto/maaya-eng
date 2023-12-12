import './App.css';
import Home from './component/Home/Home'
import Reasons from './component/Reasons/Reasons';
import Services from './component/Services/Services';

function App() {
  return (
    <div className="App">
      <Home />
      <Services />
      <Reasons />
    </div>
  );
}

export default App;
