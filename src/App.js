import "./App.css";
import Home from "./component/Home/Home";
import Reasons from "./component/Reasons/Reasons";
import Services from "./component/Services/Services";
import Testimonials from "./component/Testimonials/Testimonials";
import Contact from './component/Contact/Contact'
import Footer from './component/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Home />
      <Services />
      <Reasons />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
